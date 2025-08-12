import { IApp } from '@os/apps/config/apps';
import React, { useCallback, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createExternalAppProvider } from '@os/apps/utils/createExternalAppProvider';
import { useRecoilState, useRecoilValue } from 'recoil';
import { phoneState } from '@os/phone/hooks/state';

import {
  __federation_method_getRemote,
  __federation_method_setRemote,
  __federation_method_unwrapDefault,
  // @ts-ignore - This is virtual modules from the vite plugin. I guess they forgot to add defs.
} from '__federation__';
import { EnvMode } from '@utils/config';

const useExternalAppsAction = () => {
  const loadScript = async (url: string) => {
    await new Promise((resolve, reject) => {
      const element = document.createElement('script');

      element.src = url;
      element.type = 'text/javascript';
      element.async = true;

      document.head.appendChild(element);

      element.onload = (): void => {
        resolve(true);
      };

      element.onerror = (error) => {
        element.parentElement.removeChild(element);
        reject(error);
      };
    });
  };

  const generateAppConfig = useCallback(async (appName: string): Promise<IApp> => {
    try {
      const IN_GAME = import.meta.env.PROD || import.meta.env.MODE === EnvMode.GAME;
      const url = IN_GAME
        ? `https://cfx-nui-${appName}/web/dist/remoteEntry.js`
        : 'http://localhost:4173/remoteEntry.js';
      const scope = appName;

      await loadScript(url);

      console.log('Loaded external app', appName);

      __federation_method_setRemote(scope, {
        url: () => Promise.resolve(url),
        format: 'esm',
        from: 'vite',
      });

      const mWrapper = await __federation_method_getRemote(scope, './config');
      const m = await __federation_method_unwrapDefault(mWrapper);

      const appConfig = m();
      const config = appConfig;
      config.Component = (props: object) => React.createElement(config.app, props);

      const Provider = createExternalAppProvider(config);

      config.Route = (props: any) => {
        return (
          <Route path={config.path}>
            <Provider>
              <config.Component {...props} />
            </Provider>
          </Route>
        );
      };


      // Support both React components and public asset URLs for icons
      if (typeof config.icon === 'string') {
        // If icon is a string (likely a public asset path), use as <img src="..." />
        config.icon = <img src={config.icon.startsWith('/media/') ? config.icon : `/media/${config.icon}`} alt={appName + ' icon'} style={{ width: 24, height: 24 }} />;
      } else {
        config.icon = React.createElement(config.icon);
      }

      if (typeof config.notificationIcon === 'string') {
        config.NotificationIcon = <img src={config.notificationIcon.startsWith('/media/') ? config.notificationIcon : `/media/${config.notificationIcon}`} alt={appName + ' notification icon'} style={{ width: 24, height: 24 }} />;
      } else {
        config.NotificationIcon = config.notificationIcon;
      }

      console.debug(`Successfully loaded external app "${appName}"`);
      return config;
    } catch (error: unknown) {
      console.error(
        `Failed to load external app "${appName}". Make sure it is started before NPWD.`,
      );
      console.error(error);

      return null;
    }
  }, []);

  const getConfigs = useCallback(
    async (externalApps: string[], existingApps: IApp[]) => {
      const appAlreadyLoaded = (appName: string) => {
        return existingApps.find((app) => app.id === appName);
      };


      const safeExternalApps = Array.isArray(externalApps) ? externalApps : [];
      const configs = await Promise.all(
        safeExternalApps.map(async (appName) => {
          return appAlreadyLoaded(appName) ?? await generateAppConfig(appName);
        }),
      );

      return configs;
    },
    [generateAppConfig],
  );

  return {
    getConfigs,
  };
};

export const useExternalApps = () => {
  const [apps, setApps] = useRecoilState(phoneState.extApps);
  const { getConfigs } = useExternalAppsAction();
  const config = useRecoilValue(phoneState.resourceConfig);


  useEffect(() => {
    console.log('useExternalApps: config =', config);
    console.log('useExternalApps: config?.apps =', config?.apps);
    console.log('useExternalApps: current extApps state =', apps);
    getConfigs(config?.apps, apps).then((result) => {
      console.log('useExternalApps: getConfigs result =', result);
      setApps(result);
    });
  }, [config, setApps, getConfigs]);

  return apps.filter((app) => app);
};

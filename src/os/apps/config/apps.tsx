import React from 'react';
import { blue, common, grey, purple } from '@mui/material/colors';
import { DialerApp } from '@apps/dialer/components/DialerApp';
import { ContactsApp } from '@apps/contacts/components/ContactsApp';
import { SettingsApp } from '@apps/settings/components/SettingsApp';
import MessagesApp from '@apps/messages/components/MessagesApp';
import { ExampleAppWrapper } from '@apps/example/components/ExampleAppWrapper';
import MarketplaceApp from '@apps/marketplace/components/MarketplaceApp';
import NotesApp from '@apps/notes/NotesApp';
import { AppRoute } from '../components/AppRoute';

import {
  MESSAGES_APP_PRIMARY_COLOR,
  MESSAGES_APP_TEXT_COLOR,
} from '@apps/messages/messages.theme';
import {
  CONTACTS_APP_PRIMARY_COLOR,
  CONTACTS_APP_TEXT_COLOR,
} from '@apps/contacts/contacts.theme';
import {
  MARKETPLACE_APP_PRIMARY_COLOR,
  MARKETPLACE_APP_ICON_COLOR,
} from '@apps/marketplace/marketplace.theme';
import { NOTES_APP_ICON_COLOR, NOTES_APP_PRIMARY_COLOR } from '@apps/notes/notes.theme';
import { DIALER_APP_PRIMARY_COLOR, DIALER_APP_TEXT_COLOR } from '@apps/dialer/dialer.theme';
import {
  TWITTER_APP_PRIMARY_COLOR,
  TWITTER_APP_TEXT_COLOR,
} from '@apps/twitter/twitter.theme';
import { MATCH_APP_PRIMARY_COLOR, MATCH_APP_TEXT_COLOR } from '@apps/match/match.theme';
import { SvgIconProps, Theme } from '@mui/material';
import { INotificationIcon } from '@os/notifications/providers/NotificationsProvider';
import { BrowserApp } from '@apps/browser/components/BrowserApp';
import { MatchApp } from '@apps/match/components/MatchApp';
import LifeInvaderContainer from '@apps/twitter/components/TwitterContainer';
import { IPhoneSettings } from '@typings/settings';
import { i18n } from 'i18next';
import {
  DARKCHAT_APP_PRIMARY_COLOR,
  DARKCHAT_APP_TEXT_COLOR,
} from '@apps/darkchat/darkchat.theme';
import DarkChatApp from '../../../apps/darkchat/DarkChatApp';
import DialerAppIcon from '../icons/material/app/DIALER';
import PhoneIcon from '../icons/material/app/PHONE';
import BrowserIcon from '../icons/material/app/BROWSER';
import MessagesIcon from '../icons/material/app/MESSAGES';
import DarkchatIcon from '../icons/material/app/DARKCHAT';
import ContactIcon from '../icons/material/app/CONTACTS';
import SettingsIcon from '../icons/material/app/SETTINGS';
import TwitterIcon from '../icons/material/app/TWITTER';
import MarketplaceIcon from '../icons/material/app/MARKETPLACE';
import NotesIcon from '../icons/material/app/NOTES';
import ExampleIcon from '../icons/material/app/EXAMPLE';
import { BankApp } from '@apps/bank/components/BankApp';
import BankIcon from '../icons/material/app/BANK';
import { CryptoAppWrapper } from '@apps/crypto/components/CryptoAppWrapper';
import CryptoIcon from '../icons/material/app/CRYPTO';
import { NewsAppWrapper } from '@apps/news/NewsAppWrapper';
import NewsIcon from '../icons/material/app/NEWS';
import { CallCenterAppWrapper } from '@apps/callcenter/CallCenterAppWrapper';
import CallCenterIcon from '../icons/material/app/CALLCENTER';
import BrowseAdsAppWrapper from '@apps/browseads/BrowseAdsAppWrapper';
import LaborAppWrapper from '@apps/labor/LaborAppWrapper';

export interface IAppConfig {
  id: string;
  nameLocale: string;
  backgroundColor: string;
  color: string;
  path: string;
  disable?: boolean;
  Route: React.FC<{ settings?: IPhoneSettings; i18n?: i18n; theme?: Theme }>;
  icon: JSX.Element;
}

export type IApp = IAppConfig & {
  notification: INotificationIcon;
  icon: JSX.Element;
  isDisabled: boolean;
  notificationIcon: JSX.Element;
  NotificationIcon: React.FC<SvgIconProps>;
  Icon?: React.FC<SvgIconProps>;
  theme?: any;
};

const BrowseAdsIcon: React.FC<{ className?: string; fontSize?: string | number }> = ({ className }) => (
  <img
    src="https://cdn.prodigyrp.net/phone/apps/adverts.webp"
    alt="Browse Ads Icon"
    className={className}
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
    draggable={false}
  />
);

const LaborIcon: React.FC<{ className?: string; fontSize?: string | number }> = ({ className }) => (
  <img
    src="https://cdn.prodigyrp.net/phone/apps/labor.webp"
    alt="Labor Icon"
    className={className}
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
    draggable={false}
  />
);

export const APPS: IAppConfig[] = [
  {
    id: 'DIALER',
    nameLocale: 'APPS_DIALER',
    backgroundColor: DIALER_APP_PRIMARY_COLOR,
    icon: <PhoneIcon />,
    color: DIALER_APP_TEXT_COLOR,
    path: '/phone',
    Route: () => <AppRoute id="DIALER" path="/phone" component={DialerApp} emitOnOpen={false} />,
  },
  {
    id: 'BROWSER',
    nameLocale: 'BROWSER.NAME',
    backgroundColor: blue['300'],
    path: '/browser',
    icon: <BrowserIcon />,
    color: common.white,
    Route: () => (
      <AppRoute id="BROWSER" path="/browser" component={BrowserApp} emitOnOpen={false} />
    ),
  },
  {
    id: 'MESSAGES',
    nameLocale: 'APPS_MESSAGES',
    icon: <MessagesIcon />,
    backgroundColor: MESSAGES_APP_PRIMARY_COLOR,
    color: MESSAGES_APP_TEXT_COLOR,
    path: '/messages',
    Route: () => (
      <AppRoute id="MESSAGES" path="/messages" component={MessagesApp} emitOnOpen={false} />
    ),
  },
  {
    id: 'CONTACTS',
    nameLocale: 'APPS_CONTACTS',
    backgroundColor: CONTACTS_APP_PRIMARY_COLOR,
    icon: <ContactIcon />,
    color: CONTACTS_APP_TEXT_COLOR,
    path: '/contacts',
    Route: () => (
      <AppRoute id="CONTACTS" path="/contacts" component={ContactsApp} emitOnOpen={false} />
    ),
  },
  {
    id: 'SETTINGS',
    nameLocale: 'APPS_SETTINGS',
    icon: <SettingsIcon />,
    backgroundColor: '#383838',
    color: grey[50],
    path: '/settings',
    Route: () => (
      <AppRoute id="SETTINGS" path="/settings" component={SettingsApp} emitOnOpen={false} />
    ),
  },
  {
    id: 'TWITTER',
    nameLocale: 'APPS_TWITTER',
    icon: <TwitterIcon />,
    backgroundColor: TWITTER_APP_PRIMARY_COLOR,
    color: TWITTER_APP_TEXT_COLOR,
    path: '/twitter',
    Route: () => (
      <AppRoute id="TWITTER" path="/twitter" component={LifeInvaderContainer} emitOnOpen={false} />
    ),
  },
  {
    id: 'MARKETPLACE',
    nameLocale: 'APPS_MARKETPLACE',
    icon: <MarketplaceIcon />,
    backgroundColor: MARKETPLACE_APP_PRIMARY_COLOR,
    color: MARKETPLACE_APP_ICON_COLOR,
    path: '/marketplace',
    Route: () => (
      <AppRoute
        id="MARKETPLACE"
        path="/marketplace"
        component={MarketplaceApp}
        emitOnOpen={false}
      />
    ),
  },
  {
    id: 'NOTES',
    nameLocale: 'APPS_NOTES',
    icon: <NotesIcon />,
    backgroundColor: NOTES_APP_PRIMARY_COLOR,
    color: NOTES_APP_ICON_COLOR,
    path: '/notes',
    Route: () => <AppRoute id="NOTES" path="/notes" component={NotesApp} emitOnOpen={false} />,
  },
  {
    id: 'CRYPTO',
    nameLocale: 'APPS_CRYPTO',
    icon: <CryptoIcon />,
    backgroundColor: blue[500],
    color: blue[50],
    path: '/crypto',
    Route: () => <AppRoute id="CRYPTO" path="/crypto" component={CryptoAppWrapper} emitOnOpen={false} />,
  },
  {
    id: 'NEWS',
    nameLocale: 'APPS_NEWS',
    icon: <NewsIcon />,
    backgroundColor: '#131313',
    color: '#fff',
    path: '/news',
    Route: () => <AppRoute id="NEWS" path="/news" component={NewsAppWrapper} emitOnOpen={false} />,
  },
  {
    id: 'CALLCENTER',
    nameLocale: 'APPS_CALLCENTER',
    icon: <CallCenterIcon />,
    backgroundColor: '#131313',
    color: '#fff',
    path: '/callcenter',
    Route: () => <AppRoute id="CALLCENTER" path="/callcenter" component={CallCenterAppWrapper} emitOnOpen={false} />,
  },
  {
    id: 'BROWSEADS',
    nameLocale: 'APPS_BROWSEADS',
    icon: <BrowseAdsIcon />, // Use the new component
    backgroundColor: '#131313',
    color: '#fff',
    path: '/browseads',
    Route: () => <AppRoute id="BROWSEADS" path="/browseads" component={BrowseAdsAppWrapper} emitOnOpen={false} />,
  },
  {
    id: 'LABOR',
    nameLocale: 'APPS_LABOR',
    icon: <LaborIcon />, // Use the new component
    backgroundColor: '#131313',
    color: '#fff',
    path: '/labor',
    Route: () => <AppRoute id="LABOR" path="/labor" component={LaborAppWrapper} emitOnOpen={false} />,
  },
];

// Example app only in dev

import { atom, AtomEffect, DefaultValue } from 'recoil';
import { IPhoneSettings, SettingEvents } from '@typings/settings';
import config from '../../../config/default.json';
import fetchNui from '@utils/fetchNui';
import { isSchemaValid } from '../utils/schema';
import { NPWD_STORAGE_KEY } from '../utils/constants';

const getInitialState = (): IPhoneSettings => {
  const savedSettings = localStorage.getItem(NPWD_STORAGE_KEY);
  if (!savedSettings) {
    return config.defaultSettings;
  }

  try {
    const validString = isSchemaValid(savedSettings);
    if (validString) {
      return JSON.parse(savedSettings);
    }
    console.error('Settings Schema was invalid, applying default settings');
    return config.defaultSettings;
  } catch (e) {
    console.error('Failed to parse settings:', e);
    return config.defaultSettings;
  }
};

const localStorageEffect: AtomEffect<IPhoneSettings> = ({ setSelf, onSet, trigger }) => {
  if (trigger === 'get') {
    setSelf(getInitialState());
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(NPWD_STORAGE_KEY);
    } else {
      localStorage.setItem(NPWD_STORAGE_KEY, JSON.stringify(newValue));
      fetchNui(SettingEvents.NUI_SETTINGS_UPDATED, newValue, {}).catch((e) => {
        console.error('Failed to update NUI settings:', e);
      });
    }
  });
};

export const settingsState = atom<IPhoneSettings>({
  key: 'settings',
  default: config.defaultSettings,
  effects: [localStorageEffect],
});

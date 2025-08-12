import { Schema, Validator } from 'jsonschema';
import { NPWD_STORAGE_KEY } from './constants';

const v = new Validator();

const settingOptionSchema: Schema = {
  id: '/SettingOption',
  type: 'object',
  properties: {
    label: { type: 'string' },
    value: { type: ['string', 'number', 'object'] },
  },
  required: ['label', 'value'],
};

const iconSetValueSchema: Schema = {
  id: '/IconSetValue',
  type: 'object',
  properties: {
    name: { type: 'string' },
    custom: { type: 'boolean' },
  },
  required: ['name', 'custom'],
};

const settingOptionIconSet: Schema = {
  id: '/SettingOptionIconSet',
  type: 'object',
  properties: {
    label: { type: 'string' },
    value: { $ref: '/IconSetValue' },
  },
  required: ['label', 'value'],
};

v.addSchema(iconSetValueSchema, '/IconSetValue');
v.addSchema(settingOptionIconSet, '/SettingOptionIconSet');

const settingsSchema: Schema = {
  type: 'object',
  properties: {
    callVolume: { type: 'number' },
    iconSet: { $ref: '/SettingOptionIconSet' },
    language: { $ref: '/SettingOption' },
    wallpaper: { $ref: '/SettingOption' },
    frame: { $ref: '/SettingOption' },
    theme: { $ref: '/SettingOption' },
    zoom: { $ref: '/SettingOption' },
    streamerMode: { type: 'boolean' },
    anonymousMode: { type: 'boolean' },
    customWallpaper: { type: 'string' },
    ringtone: { $ref: '/SettingOption' },
    notiSound: { $ref: '/SettingOption' },
    TWITTER_notiFilter: { $ref: '/SettingOption' },
    TWITTER_notiSound: { $ref: '/SettingOption' },
    TWITTER_notiSoundVol: { type: 'number' },
    TWITTER_notifyNewFeedTweet: { type: 'boolean' },
    MARKETPLACE_notifyNewListing: { type: 'boolean' }
  },
  required: [
    'callVolume',
    'iconSet',
    'language',
    'wallpaper',
    'frame',
    'theme',
    'zoom',
    'streamerMode',
    'anonymousMode',
    'customWallpaper',
    'ringtone',
    'notiSound',
    'TWITTER_notiFilter',
    'TWITTER_notiSound',
    'TWITTER_notiSoundVol',
    'TWITTER_notifyNewFeedTweet',
    'MARKETPLACE_notifyNewListing'
  ]
};

v.addSchema(settingOptionSchema, '/SettingOption');

export function isSchemaValid(schema: string): boolean {
  const storedSettings = JSON.parse(schema);
  const resp = v.validate(storedSettings, settingsSchema);
  return resp.valid;
}

export function isSettingsSchemaValid(): boolean {
  const localStore = localStorage.getItem(NPWD_STORAGE_KEY);
  if (localStore) {
    try {
      const parsedSettings = JSON.parse(localStore);
      return v.validate(parsedSettings, settingsSchema).valid;
    } catch (e) {
      console.error(
        'JSON eror encountered while parsing the NPWD localStorage JSON string, using default schema as a fall back.',
        e,
      );
    }
  }
  return true;
}

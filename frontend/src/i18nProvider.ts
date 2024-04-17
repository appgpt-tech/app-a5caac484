//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Laws: {
      name: 'Laws',
      fields: {
        Title: 'Title',
        Description: 'Description',
        EffectiveDate: 'Effective Date',
        Keywords: 'Keywords',
        id: 'id',
      },
    },
    LawTypes: {
      name: 'Law Types',
      fields: { Name: 'Name', Description: 'Description', id: 'id' },
    },
    Languages: {
      name: 'Languages',
      fields: { Name: 'Name', Code: 'Code', id: 'id' },
    },
    User: {
      name: 'User',
      fields: {
        Username: 'Username',
        Email: 'Email',
        Password: 'Password',
        PreferredLanguage: 'Preferred Language',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Laws: {
      name: 'Laws (fr)',
      fields: {
        Title: 'Title (fr)',
        Description: 'Description (fr)',
        EffectiveDate: 'Effective Date (fr)',
        Keywords: 'Keywords (fr)',
        id: 'id',
      },
    },
    LawTypes: {
      name: 'Law Types (fr)',
      fields: { Name: 'Name (fr)', Description: 'Description (fr)', id: 'id' },
    },
    Languages: {
      name: 'Languages (fr)',
      fields: { Name: 'Name (fr)', Code: 'Code (fr)', id: 'id' },
    },
    User: {
      name: 'User (fr)',
      fields: {
        Username: 'Username (fr)',
        Email: 'Email (fr)',
        Password: 'Password (fr)',
        PreferredLanguage: 'Preferred Language (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);

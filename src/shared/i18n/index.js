import i18next from 'i18next';
import en from './resources/en';

/**
 * @module {Object} i18n
 * @description The base instance of i18next module for internationalization and
 * localization.
 */
i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: { en }
});

export default i18next;

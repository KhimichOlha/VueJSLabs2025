import { createI18n } from 'vue-i18n';
import ua from './locales/ua.json';
import en from './locales/en.json';

const customModifiers = {

  quoted: (str) => «${str}»
};

const i18n = createI18n({
  legacy: false, 
  locale: 'ua',  
  fallbackLocale: 'en',
  messages: {
    ua,
    en
  },
  modifiers: {
    ...customModifiers
  }
});

export default i18n;
import { defineStore } from 'pinia';
import { ref } from 'vue';
import i18n from '@/i18n'; 

export const useSettingsStore = defineStore('settings', () => {
  const locale = ref('ua'); 

  function setLocale(newLocale) {
    locale.value = newLocale;
    
    if (i18n.global) {
      i18n.global.locale.value = newLocale;
    }
  }

  return { locale, setLocale };
}, {
  persist: {
    key: 'my-app-settings', 
    pick: ['locale'],       
  },
});

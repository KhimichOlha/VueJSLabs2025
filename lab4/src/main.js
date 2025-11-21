import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router' 
import i18n from './i18n'
import { useSettingsStore } from './stores/settings'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) 
app.use(pinia)


const settingsStore = useSettingsStore()
i18n.global.locale.value = settingsStore.locale

app.use(i18n)
app.use(router)

app.mount('#app')
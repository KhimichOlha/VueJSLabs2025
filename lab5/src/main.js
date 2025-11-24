import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';

import ToastService from 'primevue/toastservice';


import CopyToClipboardPlugin from './plugins/copyToClipboard';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(ToastService); 
app.use(CopyToClipboardPlugin); 

app.mount('#app');

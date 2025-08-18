import Lara from '@primeuix/themes/Lara';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from './App.vue';
import { i18n } from './plugins';
import router from './router';
import './styles/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      darkModeSelector: false || 'none',
      cssLayer: 'primevue',
    },
  },
});
app.use(i18n);
app.mount('#app');

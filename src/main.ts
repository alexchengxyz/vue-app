import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from './App.vue';
import { i18n } from './plugins';
import router from './router';
import 'modern-normalize/modern-normalize.css';
import './assets/vendors/bootstrap-grid.css';
import './assets/styles/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || 'none',
      cssLayer: 'primevue',
    },
  },
});
app.use(i18n);
app.mount('#app');

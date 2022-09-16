import { registerGlobalComponents } from './components/globals/_globals';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createClient } from 'villus';
import './assets/styles/main.scss';

const client = createClient({
  url: process.env.VUE_APP_API_ENDPOINT,
});

export const app = createApp(App);
registerGlobalComponents();
app.use(router).use(client).mount('#app');

import App from '@/App.vue';
import '@/styles/style.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia()).mount('#app');

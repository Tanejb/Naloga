import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/lara-light-teal/theme.css'




const app = createApp(App)
app.use(PrimeVue);
app.use(router);
app.use(ToastService);

app.mount('#app');

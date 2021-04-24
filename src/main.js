import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

//Components
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

//Style
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
const app = createApp(App);
app.use(PrimeVue);
app.component('Button', Button);
app.component('InputText', InputText);
app.mount('#app');

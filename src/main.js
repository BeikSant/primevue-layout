import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import Button from "primevue/button"
import Menubar from 'primevue/menubar';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import StyleClass from 'primevue/styleclass';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
                

const app = createApp(App)

app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Sidebar', Sidebar);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column)

app.directive('styleclass', StyleClass);

app.use(router)
app.use(PrimeVue)

app.mount('#app')

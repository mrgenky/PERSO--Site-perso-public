require('./bootstrap');

import Vue from "vue"
import vuetify from "./plugins/vuetify"
import router from './router'
// import store from './store'
import App from './App.vue';

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'


const app = new Vue({
    vuetify,
    router,
    // store,
    render: (h) => h(App),
}).$mount('#app');

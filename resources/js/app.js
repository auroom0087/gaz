require('./bootstrap');

window.Vue = require('vue');

import router from './router';
import Vuetify from '../plugins/vuetify';
import App from './App.vue'
import store from './store';

new Vue({
	vuetify: Vuetify,
	render: h => h(App),
    router,
    store
}).$mount('#app')
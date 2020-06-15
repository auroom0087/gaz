
require('./bootstrap');

window.Vue = require('vue');

import Vuetify from '../plugins/vuetify';

Vue.use(Vuetify);

Vue.component('App', require('./components/App.vue').default);

const app = new Vue({
    vuetify: Vuetify,
    el: '#app'
});

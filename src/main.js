import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import store from './store/store';
import axios from 'axios';
import assets from './config.js';

import 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');
require('./style/style.css');

import App from './App';

Vue.use(VueOnsen);
Vue.prototype.$http = axios;
Vue.mixin(assets)
export const bus = new Vue();

new Vue({
  el: '#app',
  store,
  template: '<app></app>',
  components:{App},
});

import 'babel-polyfill';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// import types from './store/types';

import {ConstMaps} from './maps/ConstMaps';

import '../static/index.scss';

import store from './store';

import filters from './filters';

console.log(filters );

Vue.config.productionTip = false;

Vue.prototype.$ConstMaps = ConstMaps;

store.dispatch('UPDATE_ARTICLE');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  filters: {
    ...filters
  },
  template: '<App/>',
  components: {App}
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import * as types from './store/types';

import '../static/index.scss';

import store from './store';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    store.commit(types.HANG_PROGRESS);
  }, 1000);
  next();
});

router.afterEach((to, from) => {
  setTimeout(() => {
    store.commit(types.END_PROGRESS);
  }, 2000);
  setTimeout(() => {
    store.commit(types.OVER_PROGRESS);
  }, 3000);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

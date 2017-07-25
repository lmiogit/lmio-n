// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// import types from './store/types';

import {ConstMaps} from './lib/maps/ConstMaps';

import '../static/index.scss';

import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$ConstMaps = ConstMaps;

store.dispatch('UPDATE_ARTICLE');

// router.beforeEach((to, from, next) => {
//   setTimeout(() => {
//     store.dispatch({
//       type: types.CHANGE_ROUTE_PROGRESS, state: 'start'
//     });
//   }, 1000);
//   next();
// });
//
// router.afterEach((to, from) => {
//   setTimeout(() => {
//     store.dispatch({
//       type: types.CHANGE_ROUTE_PROGRESS, state: 'end'
//     });
//   }, 2000);
//   setTimeout(() => {
//     store.dispatch({
//       type: types.CHANGE_ROUTE_PROGRESS, state: 'over'
//     });
//   }, 3000);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

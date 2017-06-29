// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import '../static/index.scss';

import {Stores} from './store';

Vue.config.productionTip = false;

Vue.prototype.$store = {...Stores};

router.beforeEach((to, fron, next) => {
  Vue.prototype.$store.
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

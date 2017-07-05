import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/Pages/HomePage.vue';
import Introduction from '../components/Pages/Introduction.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/intro',
      name: 'Introduction',
      component: Introduction
    }
  ]
});

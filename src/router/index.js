import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/Pages/HomePage.vue';
import Introduction from '../components/Pages/Introduction.vue';
import Login from '../components/Pages/Login.vue';

Vue.use(Router);
// todo 路由规则/子路由/路由延时加载
export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});

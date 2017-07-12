// main
import Vue from 'vue';
import Vuex from 'vuex';
// types
// import types from './types';
// modules
import pages from './pages';
// maps
import {ConstMaps} from '../lib/ConstMaps';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    routeState: 'start',
  },
  mutations: {
    [ConstMaps.CHANGE_ROUTE_PROGRESS]: (state, payload) => {
      state.routeState = payload.state;
    }
  },
  actions: {
    [ConstMaps.CHANGE_ROUTE_PROGRESS]: ({commit, state}, payload) => {
      commit(payload);
    }
  },
  getters: {
    routeState: state => state.routeState
  },
  modules: {
    pages
  }
});


export default store;

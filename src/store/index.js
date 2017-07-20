// main
import Vue from 'vue';
import Vuex from 'vuex';
// types
// import types from './types';
// modules
import pages from './pages';
// maps
import {MutationMaps, ActionMaps} from '../lib/ConstMaps';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    routeState: 'start',
  },
  mutations: {
    [MutationMaps.CHANGE_ROUTE_PROGRESS]: (state, payload) => {
      state.routeState = payload.state;
    }
  },
  actions: {
    [ActionMaps.CHANGE_ROUTE_PROGRESS]: ({commit, state}, payload) => {
      commit(MutationMaps.CHANGE_ROUTE_PROGRESS, payload);
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

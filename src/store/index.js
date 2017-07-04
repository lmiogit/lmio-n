import Vue from 'vue';
import Vuex from 'vuex';

import * as types from './types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    routeState: 'start',
  },
  mutations: {
    [types.START_PROGRESS](state) {
      state.routeState = 'start';
    },
    [types.HANG_PROGRESS](state) {
      state.routeState = 'hang';
    },
    [types.END_PROGRESS](state) {
      state.routeState = 'end';
    },
    [types.OVER_PROGRESS](state) {
      state.routeState = 'over';
    }
  },
  actions: {},
  getters: {
    routeState: state => state.routeState
  },
  modules: {}
});


export default store;

// main
import Vue from 'vue';
import Vuex from 'vuex';
// types
// import types from './types';
// modules
import pages from './pages';
// maps
import {MutationMaps, ActionMaps} from '../maps/ConstMaps';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    routeState: 'start',
    language: 'CH',
  },
  mutations: {
    [MutationMaps.CHANGE_ROUTE_PROGRESS]: (state, payload) => {
      state.routeState = payload.state;
    }
  },
  actions: {
    [ActionMaps.CHANGE_ROUTE_PROGRESS]: async ({commit, state}, payload) => {
      commit(MutationMaps.CHANGE_ROUTE_PROGRESS, payload);
    },
    [`${ActionMaps.ACTION_UPDATE}_${ActionMaps.MODEL_ARTICLE}`]: async ({commit, dispatch, state}, payload) => {
      await dispatch(`${ActionMaps.ACTION_SELECT}_${ActionMaps.MODEL_ARTICLE}`);
      console.log('TEST ACTION1!!!!!');
    },
    [`${ActionMaps.ACTION_SELECT}_${ActionMaps.MODEL_ARTICLE}`]: async ({commit, state}, payload) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('TEST ACTION2!!!!!');
          resolve();
        }, 5000);
      });
    }
  },
  getters: {
    routeState: state => state.routeState,
    language: state => state.language,
  },
  modules: {
    pages
  }
});


export default store;

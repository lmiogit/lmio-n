import types from './types';

export default {
  [types.CHANGE_FLOOR_DESCRIPTION](state, payload) {
    state.floors[payload.index].desc = payload.desc;
  }
};

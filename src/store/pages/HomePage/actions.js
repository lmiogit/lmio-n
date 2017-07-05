import types from './types';

export default {
  [types.CHANGE_FLOOR_DESCRIPTION]: ({commit, state}, payload) => {
    commit(payload);
  }
};

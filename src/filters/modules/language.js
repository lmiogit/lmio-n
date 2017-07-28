import {mapGetters} from 'vuex';

export default {
  l: value => {
    return value[mapGetters('language')];
  }
};

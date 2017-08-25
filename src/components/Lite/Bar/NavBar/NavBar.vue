<template>
  <nav>
    <ul class="nav-ul">
      <li class="nav-ul-li">{{ UI.LOGO[LANG] }}</li>
      <li class="nav-ul-li" @click="goLogin">{{ UI.LOGIN[LANG] }}</li>
    </ul>
  </nav>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {UI} from '../../../../maps/UI_Maps';
  import UserBar from '../UserBar/UserBar';

  export default {
    name: 'NavBar',
    components: {UserBar},
    data() {
      return {};
    },
    methods: {
      goLogin() {
        this.$router.push('/login');
      }
    },
    computed: {
      ...mapGetters({
        LANG: 'language',
        USER: 'userInfo'
      }),
      UI: () => {
        return UI;
      }
    },
    created() {
      this.$store.dispatch('GET_USER');
    }
  };
</script>

<template>
  <nav>
    <ul class="nav-ul">
      <li class="nav-ul-li">Logo</li>
      <li class="nav-ul-li" @click="goLogin">Login</li>
    </ul>
  </nav>
</template>
<script>
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
    computed: {},
    created() {
    }
  };
</script>

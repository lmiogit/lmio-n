<template>
  <nav>
    <ul class="nav-ul">
      <li class="nav-ul-li">Logo</li>
      <li class="nav-ul-li">About</li>
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
    computed: {},
    created() {
    }
  };
</script>

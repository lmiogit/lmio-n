<template>
  <nav>
    <ul class="nav-ul">
      <li class="nav-ul-li">Logo</li>
      <li class="nav-ul-li">
        <UserBar></UserBar>
      </li>
    </ul>
  </nav>
</template>
<script>
  import UserBar from './UserBar';

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

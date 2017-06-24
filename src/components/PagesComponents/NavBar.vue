<template>
  <nav>
    <ul>
      <li>logo</li>
      <li v-for="(item, index) in floors" :key="index" :title="item.desc"><input v-model="item.name" type="text"></li>
      <li>
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
      return {
      };
    },
    computed: {},
    props: {floors: [Array]},
    created() {
    }
  };
</script>

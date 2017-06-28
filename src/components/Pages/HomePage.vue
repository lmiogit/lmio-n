<template>
  <div id="HomePage" data-id="HomePage" data-route-id="HomePage">
    <NavBar></NavBar>
    <div class="floor-list">
      <Floor v-for="(item, index ) in floors" :key="index" :floor="item"></Floor>
    </div>
    <FootBar></FootBar>
  </div>
</template>
<script>
  import NavBar from '../PagesComponents/NavBar';
  import Floor from '../PagesComponents/Floor/Floor';
  import FootBar from '../PagesComponents/FootBar';

  export default {
    name: 'HomePage',
    components: {
      NavBar, Floor, FootBar
    },
    data() {
      return {...this.$store.HomePage};
    },
    created() {
      console.log(this.$store.HomePage);
    }
  };
</script>

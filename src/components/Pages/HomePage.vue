<template>
  <div id="HomePage" class="pages" data-id="HomePage" data-route="HomePage">
    <NavBar></NavBar>
    <div class="floor-list">
      <Floor v-for="(item, index ) in floors" :key="index" :floor="item"></Floor>
    </div>
    <FootBar></FootBar>
  </div>
</template>
<script>
  import NavBar from '../PagesComponents/NavBar';
  import FootBar from '../PagesComponents/FootBar';
  import Floor from '../PagesComponents/Floor/Floor';

  import {mapGetters} from 'vuex';

  export default {
    name: 'HomePage',
    components: {
      NavBar, Floor, FootBar
    },
    data() {
      return {};
    },
    computed: {
      ...mapGetters({
        floors: 'floors'
      })
    },
    created() {
    }
  };
</script>

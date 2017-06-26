<template>
  <div id="HomePage" data-id="HomePage" data-route-id="HomePage">
    <NavBar></NavBar>
    <div class="floor-list">
      <Floor v-for="(item, index ) in homeStore.construct.floors" :key="index" :floor="item"></Floor>
    </div>
    <FootBar></FootBar>
  </div>
</template>
<script>
  import NavBar from '../PagesComponents/NavBar';
  import Floor from '../PagesComponents/Floor/index';
  import FootBar from '../PagesComponents/FootBar';
  import {Stores} from '../../store';

  export default {
    name: 'HomePage',
    components: {
      NavBar, Floor, FootBar
    },
    data() {
      return {...Stores};
    },
    created() {
    }
  };
</script>

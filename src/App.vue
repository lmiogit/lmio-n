<template>
  <div id="Lmio">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  //  import LiteRouteProgress from './components/Lite/Progress/RouteProgress';
  export default {
    name: 'Lmio',
    components: {
//      LiteRouteProgress
    },
    data() {
      return {};
    },
    created() {
//      console.log(this.$store);
    }
  };
</script>

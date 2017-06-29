<template>
  <div id="Lmio">
    <LiteRouteProgress></LiteRouteProgress>
    <router-view></router-view>
  </div>
</template>
<script>
  import LiteRouteProgress from './components/Lite/Progress/RouteProgress';
  export default {
    name: 'Lmio',
    components: {
      LiteRouteProgress
    }
  };
</script>

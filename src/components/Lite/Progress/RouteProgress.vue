<template>
  <div :class="['route-progress',state]"></div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'LiteRouteProgress',
    components: {},
    computed: {
      ...mapGetters({
        state: 'routeState',
      })
    }
  };
</script>

<template>
  <div class="floor">
    <h3>{{ floor.name }}</h3>
    <component :is="floor.components.desc" :text="floor.desc"></component>
    <hr>
  </div>
</template>
<script>
  export default {
    name: 'Floor',
    data() {
      return {};
    },
    props: {
      floor: [Object]
    },
    created() {}
  };
</script>

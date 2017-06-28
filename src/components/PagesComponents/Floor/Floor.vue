<template>
  <div class="floor">
    <div class="floor-content">
      <div class="floor-title">{{ name }}</div>
      <Description :text="desc"></Description>
    </div>
  </div>
</template>
<script>
  import Description from './Description.vue';
  export default {
    components: {
      Description
    },
    name: 'Floor',
    data() {
      return {...this.floor};
    },
    props: {
      floor: [Object]
    },
    created() {
    }
  };
</script>

<template>
  <div class="floor">
    <div class="floor-content" @click="goIntroduction">
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
      return {
        ...this.floor,
        ...{
          onEdit: false
        }
      };
    },
    props: {
      floor: [Object]
    },
    methods: {
      goIntroduction() {
        this.$router.push('/intro');
      }
    },
    created() {
    }
  };
</script>

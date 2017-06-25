<template>
  <p class="description">{{ text }}</p>
</template>
<script>
  export default {
    name: 'description',
    components: {},
    props: {text: [String]}
  };
</script>

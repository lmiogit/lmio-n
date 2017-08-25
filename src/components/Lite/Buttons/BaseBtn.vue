<template>
  <button :class="btnClass">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'BaseBtn',
    components: {},
    props: {
      btnClass: [String]
    }
  };
</script>

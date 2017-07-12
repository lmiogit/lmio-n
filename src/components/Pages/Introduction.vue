<template>
  <div id="Introduction" class="pages" data-id="Introduction" data-route="Introduction">
    <NavBar></NavBar>
    <FootBar></FootBar>
  </div>
</template>
<script>
  import NavBar from '../Lite/Bar/NavBar/NavBar';
  import FootBar from '../Lite/Bar/FootBar/FootBar';


  export default {
    name: 'Introduction',
    components: {
      NavBar, FootBar
    }
  };
</script>

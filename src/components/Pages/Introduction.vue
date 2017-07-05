<template>
  <div id="Introduction" class="pages" data-id="Introduction" data-route="Introduction">
    <NavBar></NavBar>
    <FootBar></FootBar>
  </div>
</template>
<script>
  import NavBar from '../PagesComponents/NavBar';
  import FootBar from '../PagesComponents/FootBar';


  export default {
    name: 'Introduction',
    components: {
      NavBar, FootBar
    }
  };
</script>

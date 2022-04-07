<script>
  import Navbar from './components/Navbar.vue'
  export default{
    name: "App",
    components: {
      Navbar
    }
  }
</script>
<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<style>
  body{
    background-color: #333;
  }
  div{
    flex: 1;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }
</style>
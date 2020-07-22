<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>

  import {store} from "@/store/store";

  export default {
    name: "App",
    store,
    components: {}
  };
</script>

<style>
  #app {
    font-family: 'Red Rose', cursive !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0 !important;
    padding: 0 !important;
    }

  html body {
    margin: 0 !important;
    padding: 0 !important;
    background: #f7f9f9;
    }
</style>

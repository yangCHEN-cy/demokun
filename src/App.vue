<template>
  <div id="app">
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myfooter from '../src/components/footer/tabbar'
export default {
  name: 'App',
  components:{
    myfooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <MyMain/>
  </div>
</template>

<script>
import MyMain from './components/MyMain.vue'


export default {
  name: 'App',
  components: {
    MyMain
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

}
</style>

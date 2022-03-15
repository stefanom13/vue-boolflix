<template>
  <div id="app">
    <MyHeader/>
    <MyMain/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'



export default {
  name: 'App',
  components: {
    MyHeader,
    MyMain
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

}
</style>

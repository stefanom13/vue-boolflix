<template>
  <div id="app">
    <MyHeader @getEmettiValore="getValueSelected"/>
    <MyMain :filmList="filmList"/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'

import axios from 'axios'


export default {
  name: 'App',
  components: {
    MyHeader,
    MyMain
  },
  data() {
    return {
      filmList: [],
      searchFilm:"",
    }
  },
  methods:{
    getUrl(string){
      axios.get(` https://api.themoviedb.org/3/search/movie/550?api_key=72a92ebe1723db6f134bc8b280196055S&query=${string}&language=it_IT`)
      .then((risposta)=>{
        this.filmList = risposta.data.results;
      });
    },
    getValueSelected(value){
      this.searchFilm = value;
      this.getUrl(this.searchFilm);
    }
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ul{
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

}
</style>

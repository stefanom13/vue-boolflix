<template>
  <div id="app">
    <MyHeader @getEmettiValore="getValueSelected"/>
    <MyFilm :filmList="filmList"/>
    <MySerietv :serieTv="serieTv"/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFilm from './components/MyFilm.vue'
import MySerietv from './components/MySerietv.vue'

import axios from 'axios'


export default {
  name: 'App',
  components: {
    MyHeader,
    MyFilm,
    MySerietv
  },
  data() {
    return {
      filmList: [],
      searchFilm:"",
      serieTv: [],
    }
  },
  methods:{
     getSerieTv(string){
      axios.get(` https://api.themoviedb.org/3/search/tv?api_key=9857cfb37fc41b760e69c70f6d75b517&query=${string}&language=it_IT`)
      .then((risposta)=>{
        this.serieTv = risposta.data.results;
       
      });
    },
    getFilmUrl(string){
      axios.get(` https://api.themoviedb.org/3/search/movie?api_key=9857cfb37fc41b760e69c70f6d75b517&query=${string}&language=it_IT`)
      .then((risposta)=>{
        this.filmList = risposta.data.results;
       
      });
    },
    getValueSelected(value){
      this.searchFilm = value;
      this.getFilmUrl(this.searchFilm);
      this.serieTv = value;
      this.getSerieTv(this.serieTv)
    },

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

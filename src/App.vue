<template>

  <div id="app">

    <MyHeader/>
    <main class="containerCard">
      <div class="container CardFilm">
       <MyCard v-for="movie in movies" :key="movie.id" :element="movie"/>
      </div>

      <h2>serietv</h2>

      <div class="container CardFilm">
        <MyCard v-for="serie in series" :key="serie.id" :element="serie"/>
      </div>
     
    </main>
    
  </div>

</template>

<script>

// import { hasFlag } from 'country-flag-icons'
import MyCard from "./components/MyCard.vue"
import MyHeader from "./components/MyHeader.vue"
// import { library } from '@fortawesome/fontawesome-svg-core'
import state from "./store.js"



export default {
  components: { 
    MyHeader,
    MyCard,
  },
  name: "App",

  computed:{
    movies: function() {
      return state.movies
    },
    search: function(){
      return state.search
    },
    series: function() {
      return state.series
    },
  }

  
}

</script>

<style lang="scss">

@import './assets/_app.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.CardFilm{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.containerCard{
  padding:20px 0px;
  background-color: rgb(139, 110, 110);
}
</style>

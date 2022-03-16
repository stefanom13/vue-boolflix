<template>
  <section class="sectionFilm">
      <div class="listFind">
          <ul>
              <li v-for="film in filmList" :key="film.id">
                  <h3>Film</h3>
                  <p>Titolo:{{film.title}}</p>
                  <p>Titolo originale: {{film.original_title}}</p>
                  <p>Lingua originale: {{film.original_language}}</p>
                  <p>Voto: {{film.vote_average}}</p>

              </li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    name: "MyFilm",
    props : ["filmList"],

}
</script>

<style  scoped lang="scss">

    .listFind{
        max-width:1000px;
        padding:10px;
        margin: 0 auto;
        border: 1px solid black;

        ul {
            display:flex;
            flex-wrap: wrap;
            align-items: center;
            gap:8px;

            li{
                padding:10px;
                max-width: 100%;
                
            }
            
        }
       
    }


</style>
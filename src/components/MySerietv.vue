<template>
  <section class="sectionFilm">
      <div class="listFind">
          <ul>
              <li v-for="serie in serieTv" :key="serie.id">
                  <h3>Serie Tv</h3>
                  <figure>
                      <img v-if="serie.poster_path " width="320" height="390" :src="`https://image.tmdb.org/t/p/w342${serie.poster_path }`">
                      <img v-else width="320" height="390" src="https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg">
                  </figure>
                  <div class="cont-info">
                        <p>Titolo:{{serie.name}}</p>
                        <p>Titolo originale: {{serie.original_name}}</p>
                        <p>Lingua originale: {{  (serie.original_language) }}</p>
                        <p>Voto: {{serie.vote_average}}</p>
                  </div>
              </li>
          </ul>
      </div>
  </section>
</template>

<script>


export default {
    name: "MySerietv",
    props : ["serieTv"],

    
}
</script>

<style  scoped lang="scss">

    .listFind{
        // max-width:1000px;
        padding:10px;
        // margin: 0 auto;
        border: 1px solid black;

        ul {
            display:flex;
            flex-wrap: wrap;
            align-items: center;
            gap:8px;

            li{
                padding:10px;
                

                .cont-info{
                   p{
                        max-width: 300px;
                        padding-left: 5px;
                   }
                }
                
            }
            
        }

    }


</style>
<template>
  <section class="sectionFilm">
      <div class="listFind">
          <ul>
              <li v-for="serie in serieTv" :key="serie.id">
                  <h3>Serie Tv</h3>
                  <p>Titolo:{{serie.name}}</p>
                  <p>Titolo originale: {{serie.original_title}}</p>
                  <p>Lingua originale: {{serie.original_language}}</p>
                  <p>Voto: {{serie.vote_average}}</p>
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
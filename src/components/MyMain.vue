<template>
  <section class="sectionFilm">
      <div class="listFind">
          <ul>
              <li v-for="film in filmList" :key="film.id">
                  {{film.title}}
                  {{film.original_title}}
                  {{film.original_language}}
                  {{film.vote_average}}

              </li>
          </ul>
      </div>
  </section>
</template>

<script>
export default {
    name: "MyMain",
    props : ["filmList"],

}
</script>

<style  scoped lang="scss">
.sectionFilm{
    height:100vh;
    background-color:lightgreen;

    .listFind{
        max-width:1000px;
        padding:10px;
        margin: 0 auto;
        border: 1px solid black;
        display:flex;
        align-items: center;
        justify-content: center;

    }
}

</style>
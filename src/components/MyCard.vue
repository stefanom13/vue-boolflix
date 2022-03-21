<template>
  <div class="card">
    <div class="contCard">
      <figure>
        <img  height="513px" v-if="element.poster_path" :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`">
        <img v-else width="342px" height="513px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAERCAMAAAD/iZ1nAAAAOVBMVEXMzMzPz8+Ojo7S0tLAwMDJycmoqKizs7OcnJy2traTk5PGxsaVlZW5ubmwsLC/v7+goKCrq6uKiooKuQRWAAABu0lEQVR4nO3Wi46bMBCFYc8YG+O79/0ftjbd7SXaatWq3VjV/ykhChxFB2dAGAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeBaRv5P5dLWXjyLJ9+MzqvwO8dHXn9ezvTy0lBzGuduaJy2Pc+CGe8yk/Wal6NpKS2KSS0mONIsal0ybe+eedQ5J118gqclKuhVYsaeSGlebHrWJDzn6qM69uKZdhzTNeY2IhDCjTWMXCVGP+T2r+/C3/3HxLGtJ5yVqfbe5ih5O3aFSw9wheq0ZcTmI9GE0zQPe27BiOxQvKiXb1eh8K27PYPuw4S5uXBw2Xza2K68Dd+zJxa814yVKie8Ur2/F5Yo2blXcHOuu0lSu8O6K57u4rPPKp9Vjfs6h2qH4vNrqZbSG8WPxdhevucTrvnbP7O0IVY3TM9Qtihvj56XWgp/jfoov0pPrLnUpQ0wf96jImIdXsBkpK3nHnt17zoF8fRiZ77X9/rra64zfkdcHFvkW2Na845wbTMQfkNO3nVf21/Z7QgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+a18AJJcMday6gyoAAAAASUVORK5CYII=" alt="">
      </figure>
      
      <div class="infocard"> 
        <h2 v-if="element.title" > {{  element.title }}</h2>
        <h2 v-else> {{ element.name }}</h2>

        <p v-if="element.original_title" >{{element.original_title}}  </p>
        <p v-else> {{element.original_name}}  </p>

        <img width="25px" v-if="element.origin_country" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${element.origin_country.toString().toUpperCase()}.svg`">
        <img width="25px" v-else  :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${element.original_language.toUpperCase()}.svg`">

        <!-- <p>{{element.vote_average}}</p> -->
        <p><i  v-for="number in 5" :key="number" :class="starClass(element.vote_average, number)"> &#9733; </i></p>
        <p class="overview">{{ element.overview }}</p>
        <!-- <span :class="star < starClass(element) ?  'star' : '' " v-for="element in 5" :key="element"> &#9733; </span> -->
      </div>


    </div>

  </div>
</template>

<script>
// import getUnicodeFlagIcon from 'country-flag-icons/unicode'




export default {
    props:{
        element: {
            type: Object,
            required: true,
        }
    },
  
    methods:{
        starClass(element, number) {
        return number <= Math.ceil(element / 2) ? 'star' : '';
        },
        // starClass : function (element){
        //   return Math.ceil(element.vote_average / 2) ;
        // }
    }
 
}
</script>

<style lang="scss" scoped>
  .star {
    color: goldenrod;
}
.card{
  position: relative;
  height: 513px;
 
}

figure:hover {
   opacity: 0.1;
}


.infocard{
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  background-color: transparent;
  color: black;
  max-height:513px;
  p{
    font-weight: 700;
  }
}
// .infocard:hover{
//   display:block !important;
  
// }

.infocard{
  display: none;
}
.card:hover .infocard{
  display: block !important;
    // z-index: 99999;
}

.overview{
  padding-top:10px;
  font-size: 12px;

}
</style>


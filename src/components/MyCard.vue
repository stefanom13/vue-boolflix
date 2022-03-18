<template>
  <div>
    <div>
        <figure>
            <img v-if="element.poster_path" :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`">
            <img v-else width="342px" height="513px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAERCAMAAAD/iZ1nAAAAOVBMVEXMzMzPz8+Ojo7S0tLAwMDJycmoqKizs7OcnJy2traTk5PGxsaVlZW5ubmwsLC/v7+goKCrq6uKiooKuQRWAAABu0lEQVR4nO3Wi46bMBCFYc8YG+O79/0ftjbd7SXaatWq3VjV/ykhChxFB2dAGAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeBaRv5P5dLWXjyLJ9+MzqvwO8dHXn9ezvTy0lBzGuduaJy2Pc+CGe8yk/Wal6NpKS2KSS0mONIsal0ybe+eedQ5J118gqclKuhVYsaeSGlebHrWJDzn6qM69uKZdhzTNeY2IhDCjTWMXCVGP+T2r+/C3/3HxLGtJ5yVqfbe5ih5O3aFSw9wheq0ZcTmI9GE0zQPe27BiOxQvKiXb1eh8K27PYPuw4S5uXBw2Xza2K68Dd+zJxa814yVKie8Ur2/F5Yo2blXcHOuu0lSu8O6K57u4rPPKp9Vjfs6h2qH4vNrqZbSG8WPxdhevucTrvnbP7O0IVY3TM9Qtihvj56XWgp/jfoov0pPrLnUpQ0wf96jImIdXsBkpK3nHnt17zoF8fRiZ77X9/rra64zfkdcHFvkW2Na845wbTMQfkNO3nVf21/Z7QgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+a18AJJcMday6gyoAAAAASUVORK5CYII=" alt="">
        </figure>

        <h3 v-if="element.title" > {{  element.title }}</h3>
        <h3 v-else> {{ element.name }}</h3>

        <p v-if="element.original_title" >{{element.original_title}}  </p>
        <p v-else> {{element.original_name}}  </p>

        <img width="25px" v-if="element.origin_country" :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${element.origin_country}.svg`">
        <img width="25px" v-else :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${element.original_language.toUpperCase()}.svg`">
        <p>{{element.vote_average}}</p>
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
        // getFlag:function(unicode) {
        //   return getUnicodeFlagIcon(unicode)
        // //   funzione flag non funzionante <span>{{ getFlag (element.original_language)}}</span> 
        // },
    }

}
</script>

<style lang="scss" scoped>

</style>


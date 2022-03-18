<template>
    <header>
      <input type="text" v-model="search" @keyup.enter="setSearch">
    </header>
</template>

<script>
import state from '../store.js'
import { fetchData } from '../store.js'

export default {
   data() {
       return {
         search: '',
       }
    },

    methods: {
        setSearch: function(){
           state.search = this.search

           fetchData()
        }
    },
}
</script>

<style lang="scss" scoped>
    header{
        padding:10px
    }
</style>


<template>
    <header>
        <figure>
            <img src="../assets/Myimg/Boolflix.svg" alt="">
        </figure>
        <div class="contInput">
            <input type="text" v-model="search" @keyup.enter="setSearch" placeholder="inserisci titolo ">
            <button  @click="setSearch"> Cerca </button>
        </div>
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
        padding:20px 10px;
        display:flex;
        align-items: center;
        justify-content:space-around;
        background-color: rgb(34, 26, 26);

        figure{
            width:100px;
        }


        .contInput{
            display:flex;
            align-items:center;
            gap:10px;

            input{ 
                padding:10px;
                border:1px solid red;
                border-radius:50px;
            }

            button{
                padding: 10px;
                border-radius:50px;
                color:white;
                background-color: rgb(34, 26, 26);
                border:1px solid red;
            }

            button:hover{
                background-color: rgb(68, 65, 65);
            }
        }
    }
</style>


import Vue from 'vue'
import axios from "axios";


const state = Vue.observable({
    search: '',
    movies: [],
    series: [],
    baseURI: 'http://api.themoviedb.org/3',
})

export default state

export function fetchData () {

    axios.get (`${state.baseURI}/search/movie`, {
        params: {
            api_key: '9857cfb37fc41b760e69c70f6d75b517',
            query: state.search,
            language: "it-IT",
        },
    })
    .then((res) => {
         state.movies = res.data.results;
    });

    axios.get (`${state.baseURI}/search/tv`, {
        params: {
            api_key: '9857cfb37fc41b760e69c70f6d75b517',
            query: state.search,
            language: "it-IT",
        },
    })
    .then((res) => {
         state.series = res.data.results;
    });

}


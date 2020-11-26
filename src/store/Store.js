import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)
let getTheParty= `http://www.omdbapi.com/?i=tt3896198&apikey=`
// .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.VUE_APP_APIKEY}&${Object.keys(dataReq).map(function(key) {
//     return key + '=' + dataReq[key];
//     }).join('&')}`)

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        movies: [],
    },

    mutations: {
        fetchMovie(state, { res }) {
            state.movies = res.data
            state.movies.push(res.data)
        },
        addMovie(state, { payload }) {
            state.movies.push(payload)
        },
        deleteMovie(state, { payload }) {
            state.movies.splice(payload.index, 1)
        },
        editMovie(state, { payload }) {
            state.movies[payload.index].Title = payload.Title
            state.movies[payload.index].Year = payload.Year
        }
    },

  actions: {
    async search({commit},payload){
        await Axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.VUE_APP_APIKEY}&${Object.keys(payload).map(function(key) {
        return key + '=' + payload[key];
        }).join('&')}`)
        .then(res => commit('fetchMovie', { res }))
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
        
    },
    async fetchmovie({ commit }) {
        await Axios.get(getTheParty)
        .then(res => commit('fetchMovie', { res }))
        .catch(err => alert(err))
    },
    async addmovie({ commit }, payload) {
        await Axios.post(getTheParty, payload)
        .then(() => commit('addMovie', { payload }))
        .catch(err => alert(err))
    },
    async deletemovie({ commit }, payload) {
      alert(payload._id),
        await Axios.delete(getTheParty + payload._id)
        .then(() => commit('deleteMovie', { payload }))
        .catch(err => alert(err))
    },
    async editmovie({ commit }, payload) {
        await Axios.put(getTheParty + payload._id, payload)
        .then(() => commit('editMovie', { payload }))
        .catch(err => alert(err))
    }
  },

    getters: {
        movies: state => state.movies
    }
});
  new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
      axios
        //.get('http://www.omdbapi.com/?i=tt3896198&apikey='+process.env.VUE_APP_APIKEY) //get apikey form .env local
        .get('http://localhost:5000/api/omdb')//get apikey form local
        .then(response => {
          this.info = response
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  })
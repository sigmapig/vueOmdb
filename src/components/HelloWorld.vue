<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <h1>test omdbapi</h1>

    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div>
 {{ info }}
 
      </div>

    </section>
  </div>
</template>

<script type="module">
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      info: null,
      loading: true,
      errored: false
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

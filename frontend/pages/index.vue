<template>
<section>
Pagina de landing
<p>{{cuerpo}}</p>
</section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      cuerpo: 'das'
    }
  },
  mounted: function () {
    this.getHabits()
  },
  methods: {
    getHabits: function () {
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          id: 1
        }
      })
        .then((response) => {
          console.log(response)
          this.cuerpo = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

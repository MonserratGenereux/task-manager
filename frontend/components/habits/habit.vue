<template>
  <section>
    <div class="card" v-bind:style="{'background-color': info.color +'!important'}">
      <div class="card-content white-text">
        <span class="card-title">Habit {{info.name}}</span>
        <p>Points: {{info.score}}</p>
      </div>
      <div class="card-action">
        <a v-if="this.info.typeGood== true" class="btn-floating btn-large waves-effect waves-light green" @click="success(info.id)" ><i class="material-icons">add</i></a>
        <a v-if="this.info.typeBad== true"class="btn-floating btn-large waves-effect waves-light red" @click="failure(info.id)" style="margin-left: 249px;"><i class="material-icons">remove</i></a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  props: ['info'],
  methods: {
    success: function (id) {
      this.info.score = this.info.score + 1
      var data = {
        'id': this.id,
        'good': true,
        'bad': false
      }
      axios.patch('http://localhost:3000/habit', data)
        .then((response) => {
          console.log('Respuesta', response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    failure: function (id) {
      this.info.score = this.info.score - 1
      var data = {
        'id': this.id,
        'good': false,
        'bad': true
      }
      axios.patch('http://localhost:3000/habit', data)
        .then((response) => {
          console.log('Respuesta', response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css">
</style>

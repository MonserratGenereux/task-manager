<template>
  <section>
    <div class="card" v-bind:style="{'background-color': info.color +'!important'}">
      <div class="card-content white-text">
        <span class="card-title">Habit {{info.name}}</span>
        <p>Points: {{info.score}}</p>
      </div>
      <div class="card-action">
        <a class="btn-floating btn-large waves-effect waves-light green" @click="success(info.id)" ><i class="material-icons">exposure_plus_1</i></a>
        <a class="btn-floating btn-large waves-effect waves-light red" @click="failure()" style="margin-left: 249px;"><i class="material-icons">exposure_neg_1</i></a>
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
    defineColor: function () {
      if (this.info.score < 0) {
        this.info.color = 'rgba(244, 119, 33, 0.5)'
      } else if (this.info.score > 0 < 10) {
        this.info.color = 'rgba(244, 19, 33, 0.5)'
      } else if (this.info.score > 10 < 40) {
        this.info.color = 'rgba(24, 119, 33, 0.5)'
      } else if (this.info.score > 40 < 50) {
        this.info.color = 'rgba(2, 1, 3, 0.5)'
      }
    },
    success: function (id) {
      // this.info.score = this.info.score + 1
      this.info.score = this.info.score + 1
      this.defineColor()
      var data = {
        'id': this.id,
        'score': this.info.score
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
      this.defineColor()
      var data = {
        'id': this.id,
        'score': this.info.score
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

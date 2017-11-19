<template>
  <section>
    <div class="card" :class="{redBackground: color.RED, orangeBackground: color.ORANGE, yellowBackground: color.YELLOW, greenBackground: color.GREEN, blueBackground:color.BLUE}">
      <div class="card-content white-text">
        <span class="card-title">Habit {{info.name}}</span>
        <p>Points: {{info.score}}</p>
      </div>
      <div class="card-action">
        <a v-if="this.info.good== true" class="btn-floating btn-large waves-effect waves-light green" v-on:click="success(info._id)" ><i class="material-icons">add</i></a>
        <a v-if="this.info.bad== true"class="btn-floating btn-large waves-effect waves-light red" @click="failure(info._id)" style="margin-left: 249px;"><i class="material-icons">remove</i></a>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  data () {
    return {
      red: false,
      orange: false,
      yellow: false,
      green: false,
      blue: false
    }
  },
  props: ['info'],
  created () {
    this.setColor(this.info.color)
  },
  methods: {
    setColor: function (color) {
      this.color = {}
      if (color) {
        this.color[color] = true
      } else {
        this.color['ORANGE'] = true
      }
    },
    success: function (id) {
      let userId = Vue.localStorage.get('user-id')
      var data = {
        '_id': this.info._id,
        'id': this.info.userId,
        'name': this.info.name,
        'description': this.info.description,
        'good': this.info.good,
        'bad': this.info.bad,
        'difficulty': this.info.difficulty,
        'score': this.info.score,
        'color': this.info.color
      }
      var config = {
        headers: {'user-id': userId}
      }
      axios.post('http://localhost:3000/habits/good/' + this.info._id, {data}, config)
        .then((response) => {
          console.log('GOOOOOOD')
          console.log('Respuesta', response)
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    failure: function (id) {
      let userId = Vue.localStorage.get('user-id')
      var data = {
        '_id': this.info._id,
        'userId': this.info.userId,
        'name': this.info.name,
        'description': this.info.description,
        'good': this.info.good,
        'bad': this.info.bad,
        'difficulty': this.info.difficulty,
        'score': this.info.score,
        'color': this.info.color
      }
      var config = {
        headers: {'user-id': userId}
      }
      axios.post('http://localhost:3000/habits/bad/' + this.info._id, data, config)
        .then((response) => {
          console.log('BADD')
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
  .orangeBackground{
    background-color: rgba(244, 119, 33, 0.5) !important;
  }
  .greenBackground{
    background-color: rgba(127, 187, 0, 0.5) !important;
  }
  .yellowBackground{
    background-color: rgba(255, 217, 0, 0.5) !important;
  }
  .blueBackground{
    background-color: rgba(0, 153, 229, 0.5) !important;
  }
  .redBackground{
    background-color: rgba(255, 76, 76, 0.5) !important;
  }
</style>

<template>
    <div class="card" v-if="!info.completed" :class="{redBackground: color.true}">
    <div class="card-content white-text">
      <span class="card-title">{{info.name}}</span>
      <p>Due date: {{info.dueDate}}</p>
    </div>
    <div class="card-action">
      <a class="btn-floating btn-large waves-effect waves-light green" @click="completed()">
        <i class="material-icons">check</i>
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  data () {
    return {
      red: false
    }
  },

  props: ['info'],
  created () {
    this.setColor(this.info.display_color)
  },
  methods: {
    setColor: function (color) {
      this.color = {}
      if (color) {
        this.color[color] = true
      } else {
        this.color[''] = true
      }
    },
    completed: function (id) {
      let userId = Vue.localStorage.get('user-id')
      var data = {
        '_id': this.info._id,
        'id': this.info.userId,
        'name': this.info.name,
        'description': this.info.description,
        'color': this.info.color
      }
      var config = {
        headers: {'user-id': userId}
      }
      axios.post('http://localhost:3000/tasks/complete/' + this.info._id, {data}, config)
        .then((response) => {
          console.log('Respuesta', response)
          location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css">
#negative{
  margin-left: 249px;
}
.add{
  background-color: rgb(32,145,135);
  margin-left: 400px;
}
.card{
  width: 400px;
  background-color: rgb(205,89, 90,0.4) !important;
}
.right{
  border-right: black;
}
.card-title{
  text-align: center;
}
.fixed-action-btn{
  top: 40px;
}
p{
  text-align: right;
}
.redBackground{
  background-color: rgba(255, 76, 76, 0.5) !important;
}
</style>

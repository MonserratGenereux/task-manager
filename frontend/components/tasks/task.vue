<template>
    <div class="card" v-if="!info.completed" :class="{redBackground: color.true}">
    <div class="card-content white-text">
      <span class="card-title">Task {{info.name}}</span>
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
      var data = {
        'id': this.id
      }
      axios.post('http://localhost:3000/tasks/complete/' + this.info.id, data)
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

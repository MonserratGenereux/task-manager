<template>
    <div class="card" v-if="!info.is_completed" :class="{redBackground: color.red}">
    <div class="card-content white-text">
      <span class="card-title">{{info.title}}</span>
      <p>Due date: {{this.formated}}</p>
    </div>
    <div class="card-action" href="javascript: reload()">
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
    this.formated = this.formatDate(new Date(Number(this.info.due_timestamp)))
    this.setColor(this.info.display_color)
  },
  methods: {
    formatDate: function (date) {
      var monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ]

      var day = date.getDate()
      var monthIndex = date.getMonth()
      var year = date.getFullYear()

      return day + ' ' + monthNames[monthIndex] + ' ' + year
    },
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
      var config = {
        headers: {'user-id': userId}
      }
      axios.post('http://10.43.91.223:3000/tasks/complete/' + this.info.id, {}, config)
        .then((response) => {
          console.log('respuesta', response)
          this.setColor(response.data.display_color)
          this.is_completed = true
          this.$parent.$emit('completed')
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
  background-color: rgb(205,89, 90,0.4);
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

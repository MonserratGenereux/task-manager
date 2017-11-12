<template>
  <div class="card">
    <div class="card-content white-text">
      <span class="card-title">Task {{info.name}}</span>
      <p>Due date: {{info.score}}</p>
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
    }
  },
  props: ['info'],
  methods: {
    completed: function (id) {
      this.info.score = this.info.score + 1
      var data = {
        'id': this.id
      }
      axios.patch('http://localhost:3000/task', data)
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
  background-color: rgb(32,145,135,0.5) !important;
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
</style>

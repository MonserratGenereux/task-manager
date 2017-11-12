<template>
  <v-row>
    <v-grid s12 m6 l4>
      <i class="large material-icons">person</i>
      <i>{{user.username}}</i>
    </v-grid>
    <v-grid s12 m6 l8>
      <h5 class="left">Tasks</h5>
      <div class="progress">
        <div class="determinate" style="width: 90.8%">
        </div>
      </div>
      <h5 class="left">Habits</h5>
      <div class="progress">
        <div class="determinate" style="width: 70%"></div>
      </div>
    </v-grid>

    <br></br>
    <v-grid s12 m6 l6 >
      <div class="col s12 m7">
        <div class="row">
          <div class="col s12 m6">
            <Tasks/>
          </div>
        </div>
      </div>
    </v-grid>
    <v-grid s12 m6 l6>
      <div class="col s12 m7">
        <div class="row">
          <div class="col s12 m6">
            <Habits/>
          </div>
        </div>
      </div>
    </v-grid>
    <v-grid s12 m12 l12>
      <Actions/>
    </v-grid>
    <v-grid s12 m6 l6>
    </v-grid>
  </v-row>
</template>

<script>
import axios from 'axios'
import Tasks from '~/components/tasks/tasks'
import Habits from '~/components/habits/habits'
import Actions from '~/components/utils/actions'

export default{
  data () {
    return {
      user: ['']
    }
  },
  components: {
    Tasks,
    Habits,
    Actions
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser: function () {
      axios.get('http://localhost:3000/account', {
        params: {
          password: 'password123'
        }
      })
        .then((response) => {
          console.log('respuesta', response.data)
          this.user = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
h5.left{
  text-align: left !important;
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

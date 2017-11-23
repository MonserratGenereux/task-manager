<template>
  <v-row>
    <v-grid s12 m6 l4>
      <i class="large material-icons">person</i>
      <h5>{{user.username}}</h5>
    </v-grid>

    <br></br>
    <v-grid l12>
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
    </v-grid>

    <v-grid s12 m12 l12>
      <Actions/>
    </v-grid>
    <v-grid s12 m6 l6>
    </v-grid>
  </v-row>
</template>

<script>
import Vue from 'vue'
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
      let userid = Vue.localStorage.get('user-id')
      axios.get('http://10.43.91.223:3000/accounts/' + userid)
        .then((response) => {
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
h5{
  margin-top: -63px;
}
</style>

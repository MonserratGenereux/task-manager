<template>
  <v-row>
    <v-grid s12 m8 l8 offset-l2 offset-m2>
      <h1>Task Manager</h1>
      <div class="input-field">
          <i class="material-icons prefix">person</i>
          <input id="icon_prefix" type="text" class="validate" v-model="login.username">
          <label for="icon_prefix">User Name</label>
        </div>

    </v-grid>

    <v-grid s12 m8 l8 offset-l2 offset-m2>
      <div class="input-field">
        <i class="material-icons prefix">vpn_key</i>
        <input id="icon_telephone" type="password" class="validate" v-model="login.password">
        <label for="icon_telephone">Password</label>
      </div>
    </v-grid>
    <v-grid s12 m8 l8 offset-l2 offset-m2>
      <a class="btn waves-effect waves-light right" name="action" @click="loginAction()" >Login
        <i class="material-icons right">send</i>
      </a>
    </v-grid>
  </v-row>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default{
  data () {
    return {
      login: []
    }
  },
  props: ['info'],
  methods: {
    loginAction: function () {
      var api = 'http://localhost:3000/accounts/' + this.login.username
      var data = {
        'username': this.login.username,
        'password': this.login.password
      }
      axios.get(api, data)
        .then((response) => {
          if (!response.data.exists) {
            alert('The account does not exists')
            Vue.localStorage.set('user-id', response.data.account.id)
            window.location = '/'
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
.btn{
  background-color: rgb(205,89, 90,0.4) !important;
}

.active{
  color: rgb(205,89, 90,0.4) !important;
}

</style>

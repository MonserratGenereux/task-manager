<template>
  <v-row>
    <v-grid s12 m8 l8 offset-l2 offset-m2>
      <h1>Task Manager</h1>
      <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input id="icon_prefix" type="email" class="validate" v-model="login.email">
          <label for="icon_prefix">Email</label>
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
import axios from 'axios'
export default{
  data () {
    return {
      login: []
    }
  },
  methods: {
    loginAction: function () {
      var api = 'localhost:3000/login'
      var data = {
        'email': this.login.email,
        'password': this.login.password
      }
      axios.get(api, data)
        .then((response) => {
          console.log(response)
          window.location = '/register'
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>


<style>
</style>

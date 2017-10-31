<template>
  <v-row>
    <h1>Task Manager</h1>
    <h2>Register</h2>
    <v-grid s12 m6 l6 >

      <div class="input-field">
          <i class="material-icons prefix">person</i>
          <input id="icon_prefix" type="text" class="validate" v-model="login.name">
          <label for="icon_prefix">Name</label>
        </div>

        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input id="icon_telephone" type="email" class="validate" v-model="login.email">
          <label for="icon_telephone">Email</label>
        </div>


    </v-grid>

    <v-grid s12 m6 l6>
    <div class="input-field">
      <i class="material-icons prefix">cake</i>
      <input id="icon_telephone" type="text" class="validate" v-model="login.birthday">
      <label for="icon_telephone">Birthday</label>
    </div>
    <div class="input-field">
      <i class="material-icons prefix">vpn_key</i>
      <input id="icon_telephone" type="password" class="validate" v-model="login.password">
      <label for="icon_telephone">Password</label>
    </div>
    </v-grid>
    <v-grid s12 m12 l12 >
      <a class="btn waves-effect waves-light right" name="action" @click="loginAction()" >Register
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
      var api = 'http://localhost:3000/docs/#/account/post_account'
      var data = {
        'name': this.login.name,
        'email': this.login.email,
        'password': this.login.password,
        'birthday': this.login.birthday
      }
      axios.post(api, data)
        .then((response) => {
          console.log(response)
          window.location = '/dashboard'
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

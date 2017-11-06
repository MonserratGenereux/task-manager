<template>
  <v-row>

    <h2>Sign Up</h2>
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
h2 {
  font-family: "Poppins", Sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 70px;
  text-shadow: 4px 5px #e6e6d8, 6px 7px #c6a39a;
  text-align:center;

}

h2 span {
  display: inline-block;
  vertical-align: middle;
}

span.star {
  font-size: 20px;
}

.btn{
  background-color:white;
  color:black;
  border-radius:20px;
  border-color:black;
  outline: 2px;
}
.btn:hover{
  background-color: #C6A39A;
}
.row{
 background-color: white;
    width: 800px;
    border: 3px solid black;
    padding: 25px;
    margin: 25px;
}
</style>

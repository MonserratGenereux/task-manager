<template>
  <v-row>
    <v-grid s12 m8 l8 offset-l2 offset-m2>
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
      <h1>LOG IN</h1>
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
      <a class="btn waves-effect waves-light right" name="action" @click="loginAction()" >Send
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
h1 {
  font-family: "Poppins", Sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 70px;
  text-shadow: 4px 5px #e6e6d8, 6px 7px #c6a39a;
  text-align:center;

}

h1 span {
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

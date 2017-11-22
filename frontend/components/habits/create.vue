<template>
  <section>
    <div class="box">
      <div class="box-part">
        <h3>Create Habit </h3>
        <v-grid s12 m6 l6 >
          <div class="input-field col l12">
            <input id="last_name" type="text" class="validate" v-model="create.name">
            <label for="last_name">Name</label>
          </div>
          <div class="input-field col l12">
            <input id="last_name" type="text" class="validate" v-model="create.description">
            <label for="last_name">Description</label>
          </div>
        </v-grid>
        <v-grid s12 m6 l6 id="bp-left">
          <h5>Habit type</h5>
          <div class="type">
            <row s12 m6 l6 offset-l2>
              <input type="checkbox" id="good" value="true" v-model="create.good">
              <label for="good">Good</label>
            </row>
            <row s12 m6 l6 style="padding-left:90px">
              <input type="checkbox" id="bad" value="true" v-model="create.bad">
              <label for="bad">Bad</label>
            </row>
          </div>
          <h5>Difficulty</h5>
          <div class="col l4">
            <p>
              <input name="group2" type="radio" id="test4" value=0 v-model="create.difficulty"/>
              <label for="test4">Easy</label>
            </p>
          </div>
          <div class="col l4">
            <p>
              <input name="group2" type="radio" id="test5" value=1 v-model="create.difficulty"/>
              <label for="test5">Medium</label>
            </p>
          </div>
          <div class="col l4">
            <p>
              <input name="group2" type="radio" id="test6" value=2 v-model="create.difficulty"/>
              <label for="test6">Hard</label>
            </p>
          </div>
        </v-grid>
      </div>
    </div>
    <button class="btn waves-effect waves-light" id="buttonSubmit" type="submit" name="action" @click="createHabit()">Save
    </button>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default{
  data () {
    return {
      create: []
    }
  },
  methods: {
    createHabit: function () {
      let userId = Vue.localStorage.get('user-id')
      if (!this.create.name || !this.create.description || !this.create.difficulty || (!this.create.good && !this.create.bad)) {
        alert('Please enter all fields')
      } else {
        var api = 'http://192.168.100.13:3000/habits'
        var habit = {
          'name': this.create.name,
          'description': this.create.description,
          'good': this.create.good,
          'bad': this.create.bad,
          'difficulty': this.create.difficulty
        }
        var config = {
          headers: {'user-id': userId}
        }
        axios.post(api, {habit}, config)
          .then((response) => {
            location.reload()
          })
          .catch((error) => {
            console.log(error)
          })
        this.$modal.hide('habits')
        this.$emit('load', 'habit')
      }
    }
  }
}
</script>
<style>
h5{
  text-align: center;
  padding-top: 20px;
}
h3{
  text-align: center;
  padding-bottom: 20px;
}
form{
  padding-left: 100px;
}
.type{
  padding-left: 50px;
}
#bp-left{
  margin-top: -35px !important;
}
#bp-left{
  h5{
    text-align: center;
  }
}
#buttonSubmit{
  width: 100%;
  margin-top: 38px;
}
.positive{
  width: 30px !important;
  height: 30px !important;
}
.icon{
  margin-top: -19px;
}
</style>

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
            <input name="group3" type="radio" id="test1" value=1 v-model="create.type"/>
            <label for="test1">Good</label>
          </row>
          <row s12 m6 l6 style="padding-left:90px">
            <input name="group3" type="radio" id="test2" value=2 v-model="create.type"/>
            <label for="test2">Bad</label>
          </row>
        </div>
        <h5>Difficulty</h5>
        <div class="col l4">
          <p>
            <input name="group2" type="radio" id="test4" value=1 v-model="create.difficulty"/>
            <label for="test4">Easy</label>
          </p>
        </div>
        <div class="col l4">
          <p>
            <input name="group2" type="radio" id="test5" value=2 v-model="create.difficulty"/>
            <label for="test5">Medium</label>
          </p>
        </div>
        <div class="col l4">
          <p>
            <input name="group2" type="radio" id="test6" value=3 v-model="create.difficulty"/>
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
import axios from 'axios'
export default{
  data () {
    return {
      create: []
    }
  },
  methods: {
    createHabit: function () {
      var api = 'http://localhost:3000/habit'
      var data = {
        'name': this.create.name,
        'description': this.create.description,
        'type': this.create.type,
        'difficulty': this.create.difficulty,
        'score': 0
      }
      axios.post(api, data)
        .then((response) => {
          console.log(data)
          console.log(response.data)
          // window.location = '/register'
        })
        .catch((error) => {
          console.log(error)
        })
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

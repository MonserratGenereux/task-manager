<template>
  <section>
    <div class="box">
    <div class="box-part">
      <h3>Create Task</h3>
      <v-grid s12 m6 l6 >
        <div class="input-field col l12">
          <input id="last_name" type="text" class="validate" v-model="create.name">
          <label>Name</label>
          </div>
          <div class="input-field col l12">
          <input id="last_name" type="text" class="validate" v-model="create.description">
          <label>Description</label>
        </div>
      </v-grid>
      <v-grid s12 m6 l6 id="bp-left">

        <label>Due Date</label>
        <input type='text' name='customDate' placeholder='MM/DD/YYYY'
              pattern="\d{1,2}/\d{1,2}/\d{4}"class="validate" v-model="create.dueDate">
        <h5>Remind me</h5>
        <form action="#" id="radio-2">
          <p>
            <input name="group1" type="radio" id="test1" value="diary" v-model="create.reminder"/>
            <label for="test1">Diary</label>
          </p>
          <p>
            <input name="group1" type="radio" id="test2"value="weekly" v-model="create.reminder" />
            <label for="test2">Weekly</label>
          </p>
          <p>
            <input name="group1" type="radio" id="test3" value="monthly" v-model="create.reminder"/>
            <label for="test3">Monthly</label>
          </p>
        </form>

      </v-grid>
    </div>

</div>
<button class="btn waves-effect waves-light" id="buttonSend" type="submit" name="action"@click="createTask()">Save

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
    createTask: function () {
      if (!this.create.name || !this.create.description || !this.create.dueDate || !this.create.reminder) {
        alert('error')
      } else {
        var api = 'http://localhost:3000/tasks'
        var data = {
          'name': this.create.name,
          'description': this.create.description,
          'dueDate': this.create.dueDate,
          'reminder': this.create.reminder
        }
        axios.post(api, data)
          .then((response) => {
            console.log(data)
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
        alert('Task creado exitosamente')
        this.$modal.hide('tasks')
        this.$emit('load', 'task')
      }
    }
  }
}
</script>
<style scoped>
h5{
  text-align: center;
  margin-top: -7px !important;
}
h3{
  text-align: center;
  padding-bottom: 20px;
}
#radio-2{
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
#buttonSend{
  width: 100%;
  margin-top: 13px;
}
</style>

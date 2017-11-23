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
        <div class = "col l6">
          <label>Due Date</label>
          <input type='text' name='customDate' placeholder='MM-DD-YYYY'
                pattern="\d{1,2}-\d{1,2}-\d{4}"class="validate" v-model="create.dueDate">
        </div>

              <form class = "col l6">
              <div class = "row">
               <label>Select the hour due Date</label>
               <select class = "browser-default" v-model="dueDate.hours">
                  <option value = "" disabled selected>Hour</option>
                  <option value = 0 >00:00</option>
                  <option value = 1 >01:00</option>
                  <option value = 2 >02:00</option>
                  <option value = 3 >03:00</option>
                  <option value = 4 >04:00</option>
                  <option value = 5 >05:00</option>
                  <option value = 6 >06:00</option>
                  <option value = 7 >07:00</option>
                  <option value = 8 >08:00</option>
                  <option value = 9 >09:00</option>
                  <option value = 10 >10:00</option>
                  <option value = 11 >11:00</option>
                  <option value = 12 >12:00</option>
                  <option value = 13 >13:00</option>
                  <option value = 14 >14:00</option>
                  <option value = 15 >15:00</option>
                  <option value = 16 >16:00</option>
                  <option value = 17 >17:00</option>
                  <option value = 18 >18:00</option>
                  <option value = 19 >19:00</option>
                  <option value = 20 >20:00</option>
                  <option value = 21 >21:00</option>
                  <option value = 22 >22:00</option>
                  <option value = 23 >23:00</option>

               </select>
              </div>
              </form>
        <h5>Remind me</h5>
        <div class = "col l6">
          <form action="#" id="radio-2">
            <p>
              <input id="last_name" type="text" class="validate" v-model="reminder.days">
              <label>Days Before Due Date</label>
            </p>
          </form>
        </div>
        <form class = "col l6">
        <div class = "row">
         <label>Select the hour for remind</label>
         <select class = "browser-default" v-model="reminder.hours">
            <option value = "" disabled selected>Hour</option>
            <option value = 0 >00:00</option>
            <option value = 1 >01:00</option>
            <option value = 2 >02:00</option>
            <option value = 3 >03:00</option>
            <option value = 4 >04:00</option>
            <option value = 5 >05:00</option>
            <option value = 6 >06:00</option>
            <option value = 7 >07:00</option>
            <option value = 8 >08:00</option>
            <option value = 9 >09:00</option>
            <option value = 10 >10:00</option>
            <option value = 11 >11:00</option>
            <option value = 12 >12:00</option>
            <option value = 13 >13:00</option>
            <option value = 14 >14:00</option>
            <option value = 15 >15:00</option>
            <option value = 16 >16:00</option>
            <option value = 17 >17:00</option>
            <option value = 18 >18:00</option>
            <option value = 19 >19:00</option>
            <option value = 20 >20:00</option>
            <option value = 21 >21:00</option>
            <option value = 22 >22:00</option>
            <option value = 23 >23:00</option>

         </select>
        </div>
        </form>
      </v-grid>
    </div>

</div>
<button class="btn waves-effect waves-light" id="buttonSend" type="submit" name="action"@click="createTask()">Save

</button>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default{
  data () {
    return {
      create: [],
      reminder: [],
      dueDate: []
    }
  },
  methods: {
    createTask: function () {
      var moment = require('moment')
      var today = (moment().valueOf())
      var dueDate = (moment(this.create.dueDate, 'MM-DD-YYYY').set({hour: this.dueDate.hours, minute: 0, second: 0, millisecond: 0}).valueOf())
      var reminder = (moment(dueDate).set({hour: this.reminder.hours, minute: 0, second: 0, millisecond: 0}).subtract(this.reminder.days, 'days').valueOf())
      let userId = Vue.localStorage.get('user-id')
      if (!this.create.name || !this.create.description || !this.create.dueDate || !this.dueDate.hours || !this.reminder.hours || !this.reminder.days) {
        alert('Please enter all fields')
      } else {
        var api = 'http://10.43.91.223:3000/tasks'
        var config = {
          headers: {'user-id': userId}
        }
        var task = {
          'user_id': userId,
          'title': this.create.name,
          'description': this.create.description,
          'due_timestamp': dueDate,
          'reminder_timestamp': reminder,
          'created_timestamp': today
        }
        axios.post(api, {task}, config)
          .then((response) => {
            console.log('task', response.data)
            location.reload()
          })
          .catch((error) => {
            console.log(error)
          })
        console.log(task)
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
#radio-2 {
  padding-left: 10px;
  margin-top: -35px;
}
#buttonSend{
  width: 100%;
  margin-top: 11px;
}
</style>

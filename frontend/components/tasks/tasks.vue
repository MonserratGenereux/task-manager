<template>
  <section>
    <h5>Tasks</h5>
    <Task v-for="task in tasks"  v-bind:info="task" :key="task.id"/>
    <reminder v-for="task in reminder_flag" v-bind:info="task" :key="task.id"/>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Task from '~/components/tasks/task'
import reminder from '~/components/tasks/reminder'
export default {
  data () {
    return {
      tasks: [],
      reminder_flag: []
    }
  },
  components: {
    Task,
    reminder
  },
  mounted () {
    this.$on('completed', function () {
      this.getTasks()
    })
    this.getTasks()
  },
  methods: {
    getTasks: function () {
      let userId = Vue.localStorage.get('user-id')
      var config = {
        headers: {'user-id': userId}
      }
      axios.get('http://10.43.91.223:3000/tasks/', config)
        .then((response) => {
          console.log(response)
          this.tasks = response.data.tasks
          this.setNotifications(response.data.tasks)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    setNotifications: function (object) {
      let reminderObject = []
      for (var index in object) {
        if (object[index].reminder_flag) {
          reminderObject.push(object[index])
        }
      }
      this.reminder_flag = reminderObject
    }
  }
}
</script>

<style lang="css">
.btn{
  background-color: rgb(205,89, 90,0.4) !important;
}
</style>

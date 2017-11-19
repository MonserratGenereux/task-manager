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
      tasks: [''],
      reminder_flag: ['']
    }
  },
  components: {
    Task,
    reminder
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks: function () {
      let userid = Vue.localStorage.get('userid')
      axios.get('http://localhost:3000/tasks/' + userid)
        .then((response) => {
          this.tasks = response.data
          this.setNotifications(response.data)
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
</style>

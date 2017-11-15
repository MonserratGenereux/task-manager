<template>
  <section>
    <h5>Tasks</h5>
    <Task v-for="task in tasks"  v-bind:info="task" :key="tasks.id"/>
    <reminder v-for="task in tasks" v-bind:info="task" :key="tasks.id"/>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Task from '~/components/tasks/task'
import reminder from '~/components/tasks/reminder'
export default {
  data () {
    return {
      tasks: [''],
      flag: ['']
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
      axios.get('http://localhost:3000/tasks', {
      })
        .then((response) => {
          console.log('Respuesta', this.tasks = response.data)
          this.flag = response.data.tasks.flag
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css">
</style>

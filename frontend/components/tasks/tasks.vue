<template>
  <section>
    <h5>Tasks</h5>
    <Task v-for="task in tasks"  v-bind:info="task" :key="tasks.id"/>
  </section>
</template>

<script>
import axios from 'axios'
import Task from '~/components/tasks/task'
export default {
  data () {
    return {
      tasks: ['']
    }
  },
  components: {
    Task
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

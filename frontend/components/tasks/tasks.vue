<template>
  <section>
    <h5>Tasks</h5>
    <Task v-for="task in tasks"  v-bind:info="task" :key="task.nombre"/>
  </section>
</template>

<script>
import Task from '~/components/tasks/task'
export default {
  data () {
    return {
      tasks: []
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
      // cosa de axios
      this.tasks = [{'nombre': 'one', 'puntos': '23'}, {'nombre': 'dos', 'puntos': '32'}, {'nombre': 'tres', 'puntos': '42'}]
    }
  }
}
</script>
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
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: 1
        }
      })
        .then((response) => {
          console.log('Respuesta', this.habits = response.data)
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

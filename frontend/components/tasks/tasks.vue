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

<style lang="css">
</style>

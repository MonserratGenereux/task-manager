<template>
  <section>
    <h5>Delayed Tasks</h5>
    <delayedTasks v-for="task in delayedtasks"  v-bind:info="task" :key="delayedtasks.id"/>
  </section>
</template>

<script>
import axios from 'axios'
import delayedTasks from '~/components/reports/delayedTask'
export default {
  data () {
    return {
      delayedtasks: []
    }
  },
  components: {
    delayedTasks
  },
  mounted () {
    this.getDelayedTasks()
  },
  methods: {
    getDelayedTasks: function () {
      axios.get('http://localhost:3000/report/user')
        .then((response) => {
          console.log(response.data)
          this.delayedtasks = response.data.tasks
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

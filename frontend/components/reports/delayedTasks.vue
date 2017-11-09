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
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: 1
        }
      })
        .then((response) => {
          console.log(response.data)
          this.delayedtasks = response.data
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

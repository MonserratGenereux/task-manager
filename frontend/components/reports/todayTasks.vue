<template>
  <section>
    <h5>Tasks Due Today</h5>
    <todayTask v-for="task in todayTaks"  v-bind:info="task" :key="todayTaks.id"/>
  </section>
</template>

<script>
import axios from 'axios'

import todayTask from '~/components/reports/todayTask'
export default {
  data () {
    return {
      todayTaks: []
    }
  },
  components: {
    todayTask
  },
  mounted () {
    this.getTodayTasks()
  },
  methods: {
    getTodayTasks: function () {
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: 1
        }
      })
        .then((response) => {
          console.log(response.data)
          this.todayTaks = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>

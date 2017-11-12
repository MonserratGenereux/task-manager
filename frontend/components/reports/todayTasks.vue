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
      axios.get('http://localhost:3000/report/task', {
        params: {
          dueDate: '10/11/2017'
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

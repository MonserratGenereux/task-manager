<template>
  <section>
    <h5>Tasks Due Today</h5>
    <todayTask v-for="task in todayTaks"  v-bind:info="task" :key="todayTaks.id"/>
  </section>
</template>

<script>
import Vue from 'vue'
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
      let userid = Vue.localStorage.get('user-id')
      axios.get('http://10.43.91.223:3000/reports/' + userid)
        .then((response) => {
          console.log(response.data)
          this.todayTaks = response.data.tasks.duetodayList
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

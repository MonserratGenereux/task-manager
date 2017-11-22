<template>
  <section>
    <h5>Delayed Tasks</h5>
    <delayedTasks v-for="task in delayedtasks"  v-bind:info="task" :key="delayedtasks.id"/>
  </section>
</template>

<script>
import Vue from 'vue'
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
      let userid = Vue.localStorage.get('user-id')
      axios.get('http://192.168.100.13:3000/reports/' + userid)
        .then((response) => {
          console.log(response.data)
          this.delayedtasks = response.data.tasks.delayedList
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

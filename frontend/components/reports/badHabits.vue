<template>
  <section>
    <h5>Bad Habits</h5>
    <badHabit v-for="habit in badHabits"  v-bind:info="habit" :key="badHabits.id"/>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import badHabit from '~/components/reports/badHabit'
export default {
  data () {
    return {
      badHabits: ['']
    }
  },
  components: {
    badHabit
  },
  mounted () {
    this.getBadHabits()
  },
  methods: {
    getBadHabits: function () {
      let userid = Vue.localStorage.get('user-id')
      axios.get('http://10.43.91.223:3000/reports/' + userid)
        .then((response) => {
          console.log(response.data)
          this.badHabits = response.data.habits.badHabitsList
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

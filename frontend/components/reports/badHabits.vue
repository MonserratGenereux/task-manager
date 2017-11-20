<template>
  <section>
    <h5>Bad Habits</h5>
    <badHabit v-for="habit in badHabits"  v-bind:info="habit" :key="badHabits.id"/>
  </section>
</template>

<script>
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
      axios.get('http://localhost:3000/report/user')
        .then((response) => {
          console.log(response.data)
          this.badHabits = response.data.habits
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

<template>
  <section>
    <h5>Good Habits</h5>
    <goodHabit v-for="habit in goodHabits"  v-bind:info="habit" :key="goodHabits.id"/>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import goodHabit from '~/components/reports/goodHabit'
export default {
  data () {
    return {
      goodHabits: []
    }
  },
  components: {
    goodHabit
  },
  mounted () {
    this.getgoodHabits()
  },
  methods: {
    getgoodHabits: function () {
      let userid = Vue.localStorage.get('user-id')
      axios.get('http://10.43.91.223:3000/reports/' + userid)
        .then((response) => {
          console.log(response.data)
          this.goodHabits = response.data.habits.goodHabitsList
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

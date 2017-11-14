<template>
  <section>
    <h5>Habits</h5>
      <Habit v-for="habit in habits"  v-bind:info="habit" :key="habits.id"/>
  </section>

</template>

<script>
import axios from 'axios'
import Habit from '~/components/habits/habit'
export default {
  data () {
    return {
      habits: ['']
    }
  },
  components: {
    Habit
  },
  mounted () {
    this.getHabits()
  },
  methods: {
    getHabits: function () {
      axios.get('http://localhost:3000/habits', {
      })
        .then((response) => {
          console.log('Respuesta', response)
          this.habits = response.data
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

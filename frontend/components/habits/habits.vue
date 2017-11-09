<template>
  <section>
    <h5>Habits</h5>
      <Habit v-for="habit in habits"  v-bind:info="habit" :key="habits.nombre"/>
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
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: 1
        }
      })
        .then((response) => {
          console.log('Respuesta', this.habits = response.data)
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

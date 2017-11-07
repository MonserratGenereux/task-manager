<template>
  <section>
    <h5>Habits</h5>
      <Habit v-for="habit in habits"  v-bind:info="habit"/>
  </section>

</template>

<script>
import Habit from '~/components/habits/habit'
export default {
  data () {
    return {
      habits: []
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
      // cosa de axios
      this.habits = [{'nombre': 'one', 'puntos': '23'}, {'nombre': 'dos', 'puntos': '32'}, {'nombre': 'tres', 'puntos': '42'}]
    }
  }
}
</script>
<style lang="css">
</style>

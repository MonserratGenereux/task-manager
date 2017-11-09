<template>
  <section>
    <h5>Good Habits</h5>
    <goodHabit v-for="habit in goodHabits"  v-bind:info="habit" :key="goodHabits.id"/>
  </section>
</template>

<script>
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
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: 1
        }
      })
        .then((response) => {
          console.log(response.data)
          this.goodHabits = response.data
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

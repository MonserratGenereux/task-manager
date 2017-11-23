<template>
  <section>
    <h5>Habits</h5>
    <Habit v-for="habit in habits"  v-bind:info="habit" :key="habits.id"/>
  </section>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
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
    this.$on('click', function () {
      this.getHabits()
    })
    this.getHabits()
  },
  methods: {
    getHabits: function () {
      let userId = Vue.localStorage.get('user-id')
      var config = {
        headers: {'user-id': userId}
      }
      axios.get('http://10.43.91.223:3000/habits', config)
        .then((response) => {
          this.habits = response.data.habits
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
  </script>
  <style lang="css">
  .btn{
    background-color: rgb(205,89, 90,0.4) !important;
  }
  </style>

<template lang="html">
  <section class="row">
    <ul>
      <p><strong>Best Habit:</strong></p>
      <p>Name: {{bestName}}</p>
      <p>Points: {{bestScore}}</p>
      <p><strong>Worst Habit:</strong></p>
      <p>Name: {{worstName}}</p>
      <p>Points: {{worstScore}}</p>
    </ul>

  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      bestName: [],
      bestScore: [],
      worstName: [],
      worstScore: []
    }
  },
  mounted () {
    this.getHabits()
  },
  methods: {
    showChart: function (data) {
      this.active = data
    },
    getHabits: function () {
      axios.get('http://192.168.100.13:3000/reports', {
      })
        .then((response) => {
          this.bestName = response.data.habits.best.name
          this.bestScore = response.data.habits.best.score
          this.worstName = response.data.habits.worst.name
          this.worstScore = response.data.habits.worst.score
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
li{
  padding-top: 15px;
}
p{
  padding-top: 15px;
}
h3{
  text-align: center;
}
</style>

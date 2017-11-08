<template>
  <vue-chart type="doughnut" :data="chartData"></vue-chart>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  name: 'App',

  components: {
    VueChart
  },

  data: () => ({
    chartData: {
      datasets: [{
        data: [56, 10],
        backgroundColor: ['#56a0d3', '#fd5c63'],
        borderWidth: 1
      }],
      labels: [
        'Before Time',
        'On Time'
      ]
    }
  })
}
</script>

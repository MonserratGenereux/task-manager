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
        data: [56, 10, 30, 40],
        backgroundColor: ['#ecb731', '#fb8a2e', '#a4c639', '#0091cd'],
        borderWidth: 1
      }],
      labels: [
        'Yellow',
        'Orange',
        'Green',
        'Blue'
      ]
    }
  })
}
</script>

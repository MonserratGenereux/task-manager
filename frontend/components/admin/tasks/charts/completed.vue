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
        data: [73, 23],
        backgroundColor: ['#fd5c63', '#56a0d3'],
        borderWidth: 1
      }],
      labels: [
        'Delayed',
        'Completed'
      ]
    }
  })
}
</script>

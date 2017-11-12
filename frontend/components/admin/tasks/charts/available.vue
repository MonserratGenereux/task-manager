<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './chart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null,
        graphData: {}
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.getData()
        this.datacollection = {
          labels: this.graphData.label,
          datasets: [
            {
              backgroundColor: this.graphData.color,
              data: this.graphData.data
            }
          ]
        }
      },
      getData () {
        // axios
        this.graphData = {
          label: ['Available', 'Completed'],
          data: [this.getRandomInt(), this.getRandomInt()],
          color: ['rgba(255, 217, 0, 0.5)', 'rgba(244, 119, 33, 0.5)']
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 500px;
    padding-top: 20px;
    padding-left: 140px;
  }
</style>

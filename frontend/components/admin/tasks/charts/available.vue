<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './chart.js'
  import axios from 'axios'
  export default {
    components: {
      LineChart
    },
    data () {
      return {
        range: [],
        datacollection: null,
        graphData: {}
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        // axios
        axios.get('http://10.43.91.223:3000/reports', {
          params: {
          }
        })
          .then((response) => {
            this.datacollection = {
              labels: ['Remainding', 'For Today', 'Delayed'],
              datasets: [
                {
                  backgroundColor: ['rgba(255, 76, 76, 0.5)', 'rgba(0, 153, 229, 0.5)', 'rgba(10, 59, 40, 0.5)'],
                  data: [response.data.tasks.availableTasks.remaining, response.data.tasks.availableTasks.fortoday, response.data.tasks.availableTasks.delayed]
                }
              ]
            }
          })
          .catch((error) => {
            console.log(error)
          })
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

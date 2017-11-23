<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './rangeChart.js'
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
      getRgba (color) {
        switch (color) {
          case 'RED':
            return 'rgba(255, 76, 76, 0.5)'
          case 'ORANGE':
            return 'rgba(244, 119, 33, 0.5)'
          case 'YELLOW':
            return 'rgba(255, 217, 0, 0.5)'
          case 'GREEN':
            return 'rgba(127, 187, 0, 0.5)'
          case 'BLUE':
            return 'rgba(0, 153, 229, 0.5)'
          default:
            return 'rgba(0,1,1,1)'
        }
      },
      fillData () {
        // axios
        axios.get('http://10.43.91.223:3000/reports', {
          params: {
          }
        })
          .then((response) => {
            var arrColor = response.data.habits.rangeCountsList.map(function (color) {
              return color.color
            })
            var arrCount = response.data.habits.rangeCountsList.map(function (color) {
              return color.count
            })
            var arrRgba = response.data.habits.rangeCountsList.map((color) => {
              return this.getRgba(color.color)
            })
            this.datacollection = {
              labels: arrColor,
              datasets: [
                {
                  backgroundColor: arrRgba, // ['rgba(127, 187, 0, 0.5)', 'rgba(255, 76, 76, 0.5)', 'rgba(0, 153, 229, 0.5)', 'rgba(255, 217, 0, 0.5)', 'rgba(244, 119, 33, 0.5)'],
                  data: arrCount // [response.data.habits.countRed, response.data.habits.countGreen, response.data.habits.countBlue, response.data.habits.countYellow, response.data.habits.countOrange]
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

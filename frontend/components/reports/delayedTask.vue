<template>
  <div class="card-panel teal">
    <span class="white-text">Name:{{info.title}}
    </span>
    <span class="white-text points">Due Date: {{formated}}
    </span>
        </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    this.formated = this.formatDate(new Date(Number(this.info.dueTimestamp)))
  },
  methods: {
    formatDate: function (date) {
      var monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ]

      var day = date.getDate()
      var monthIndex = date.getMonth()
      var year = date.getFullYear()

      return day + ' ' + monthNames[monthIndex] + ' ' + year
    }
  },
  props: ['info']
}
</script>

<style>
.points{
  padding-left: 500px !important;
}
.teal{
  background-color: rgb(205,89, 90,0.4) !important;
}
</style>

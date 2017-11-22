<template>
  <section>

    <div class="card">
      <div class="card-content">
        <h3>Report of your tasks and habits</h3>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li @click="showTab('today')" class="tab">My task due today</li>
          <li @click="showTab('delayed')" class="tab">My delayed task</li>
          <li @click="showTab('good')" class="tab">My Good Habits</li>
          <li @click="showTab('bad')" class="tab">My Bad Habits</li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div v-show="active == 'today'"><todayTasks/></div>
        <div v-show="active == 'delayed'"><delayedTasks/></div>
        <div v-show="active == 'good'"><goodHabitsReport/></div>
        <div v-show="active == 'bad'"><badHabitsReport/></div>
      </div>
    </div>
  </section>
</template>

<script>
import goodHabitsReport from '~/components/reports/goodHabits'
import badHabitsReport from '~/components/reports/badHabits'
import todayTasks from '~/components/reports/todayTasks'
import delayedTasks from '~/components/reports/delayedTasks'
export default {
  components: {
    goodHabitsReport,
    badHabitsReport,
    todayTasks,
    delayedTasks
  },
  data () {
    return {
      active: 'today'
    }
  },
  props: ['info'],
  methods: {
    showTab: function (data) {
      this.active = data
    }
  }
}
</script>


<style>
h3{
  text-align: center;
}
li{
  cursor: pointer;
  color: black !important;
}
</style>

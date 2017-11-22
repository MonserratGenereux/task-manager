<template>
  <section>
    <div class="card">
      <div class="card-content">
        <h2>Report tasks and habits for all users</h2>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li @click="showTab('tasks')" class="tab">Tasks</li>
          <li @click="showTab('habits')" class="tab">Habits</li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div v-show="active == 'tasks'">
          <tasksReports/>
        </div>
        <div v-show="active == 'habits'">
          <habitsReports/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import tasksReports from '~/components/admin/tasks/report'
import habitsReports from '~/components/admin/habits/report'
export default {
  components: {
    tasksReports,
    habitsReports
  },
  data () {
    return {
      active: 'tasks'
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
.tab{
  cursor: pointer;
}
h2{
  text-align: center;
}
li{
  color: black !important;
}
.btn{
  background-color: rgb(205,89, 90,0.4) !important;
}
</style>

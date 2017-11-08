<template lang="html">
  <section class="row">
    <div class="col l3">
      <ul>
        <li>
          <a @click="showChart('completed')" class="waves-effect waves-light btn">
            <i class="material-icons left">pie_chart</i>Completed
          </a>
        </li>
        <li>
          <a @click="showChart('onTime')" class="waves-effect waves-light btn">
            <i class="material-icons left">pie_chart</i>On Time
          </a>
        </li>
        <li>
          <a @click="showChart('available')" class="waves-effect waves-light btn">
            <i class="material-icons left">pie_chart</i>Available
          </a>
        </li>
    </ul>
    </div>
    <div v-show="active == 'completed'" class="col l9">
      <completed/>
    </div>
    <div v-show="active == 'onTime'" class="col l9">
      <onTime/>
    </div>
    <div v-show="active == 'available'" class="col l9">
      <available/>
    </div>
  </section>
</template>

<script>
import completed from '~/components/admin/tasks/charts/completed'
import onTime from '~/components/admin/tasks/charts/onTime'
import available from '~/components/admin/tasks/charts/available'

export default {
  components: {
    completed,
    onTime,
    available
  },
  data () {
    return {
      active: 'completed'
    }
  },
  props: ['info'],
  methods: {
    showChart: function (data) {
      this.active = data
    }
  }
}
</script>

<style>
li{
  padding-top: 10px;
}
</style>

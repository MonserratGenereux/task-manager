<template lang="html">
  <section class="row">
    <div class="col l3">
      <ul>
          <p><strong>Best Habit:</strong></p>
          <p>Name:</p>
          <p>Points:</p>
          <p><strong>Worst Habit:</strong></p>
          <p>Name:</p>
          <p>Points:</p>
    </ul>
    </div>
    <div class="col l9">
      <h3>Habits Per Range</h3>
      <range/>
    </div>
  </section>
</template>

<script>
import range from '~/components/admin/habits/charts/range'
export default {
  components: {
    range
  },
  data () {
    return {
      active: 'range'
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
  padding-top: 15px;
}
p{
  padding-top: 15px;
}
h3{
  text-align: center;
}
</style>

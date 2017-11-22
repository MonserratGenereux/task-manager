<template lang="html">
  <section class="row">
    <div class="col l3">
      <bestWorst/>
    </div>
    <div class="col l9">
      <h3>Habits Per Range</h3>
      <range/>
    </div>
  </section>
</template>

<script>
import range from '~/components/admin/habits/charts/range'
import bestWorst from '~/components/admin/habits/charts/bestWorst'
export default {
  components: {
    range,
    bestWorst
  },
  data () {
    return {
      active: 'range'
    }
  },
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

<template>
  <section>
    <div class="card ">
      <div class="card-content white-text">
        <span class="card-title">Habit {{info.userId}}</span>
        <p>Points: {{info.id}}</p>
      </div>
      <div class="card-action">
        <a class="btn-floating btn-large waves-effect waves-light green" @click="success()" ><i class="material-icons">exposure_plus_1</i></a>
        <a class="btn-floating btn-large waves-effect waves-light red" @click="failure()" style="margin-left: 249px;"><i class="material-icons">exposure_neg_1</i></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['info'],
  methods: {
    success: function () {
      alert('te amo mil')
    },
    failure: function () {
      alert('que menso')
    }
  }
}
</script>

<style lang="css">
</style>

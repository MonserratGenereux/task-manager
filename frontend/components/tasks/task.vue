<template>
  <div class="card">
    <div class="card-content white-text">
      <span class="card-title">Task {{info.id}}</span>
      <p>Points: {{info.userId}}</p>
    </div>
    <div class="card-action">
      <a class="btn-floating btn-large waves-effect waves-light green" @click="success()">
        <i class="material-icons">exposure_plus_1</i>
      </a>
      <a class="btn-floating btn-large waves-effect waves-light red" id="negative" @click="failure()">
        <i class="material-icons">exposure_neg_1</i>
      </a>
    </div>
  </div>
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
#negative{
  margin-left: 249px;
}
.add{
  background-color: rgb(32,145,135);
  margin-left: 400px;
}
.card{
  width: 400px;
  background-color: rgb(32,145,135,0.5) !important;
}
.right{
  border-right: black;
}
.card-title{
  text-align: center;
}
.fixed-action-btn{
  top: 40px;
}
p{
  text-align: right;
}
</style>

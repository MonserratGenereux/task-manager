<template>
  <div class="card-panel teal">
    <span class="white-text">Name: {{info.name}}
    </span>
    <span class="white-text points">Completed: {{info.completed}}
    </span>
        </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['info']
}
</script>

<style>
.points{
  text-align: right;
}
.teal{
  background-color: rgb(205,89, 90,0.4) !important;
}
</style>

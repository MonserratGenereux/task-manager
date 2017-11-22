<template>
  <div class="card-panel teal">
          <span class="white-text">Name:{{info.name}}
          </span>
          <span class="white-text points">Score:{{info.score}}
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
  padding-left: 700px;
}
.teal{
  background-color: rgb(205,89, 90,0.4) !important;
}
</style>

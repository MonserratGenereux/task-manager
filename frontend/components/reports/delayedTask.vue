<template>
  <div class="card-panel teal">
    <span class="white-text">{{info.id}}
    </span>
    <span class="white-text points">Puntaje:{{info.id}}
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
  padding-left: 540px;
}
</style>

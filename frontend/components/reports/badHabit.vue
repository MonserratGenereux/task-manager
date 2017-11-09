<template>
  <div class="card-panel teal">
    <span class="white-text">Nombre:{{info.id}}
    </span>
    <span class="white-text points">Puntaje:{{info.userId}}
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

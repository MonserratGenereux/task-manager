<template>
  <div class="reminder">
    <notifications
      :duration="10000"
      :width="500"
      animation-name="v-fade-left"
      position="top left">
    </notifications>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 1,
      animation: {
        enter: {
          opacity: [2, 2],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }
    }
  },
  props: ['info'],
  mounted () {
    console.log(this.info)
    let title = ('This is a Reminder for task ' + this.info.title)
    let text = 'Due for ' + new Date(Number(this.info.due_timestamp))
    let group = 'custom-template'
    console.log('algo', text)
    this.$notify({ group, title, text })
    this.$parent.$emit('reminder')
  },
  methods: {
    clean (group) {
      this.$notify({ group, clean: true })
    }
  }
}
</script>

<style lang="scss">
.notifications{
  padding-top: 65px !important;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  h2 {
    font-weight: 300;
    a {
      color: black;
      font-size: 12px;
    }
  }

  #app {
    text-align: center;
    color: #2c3e50;
    .content {
      margin: 0 auto;
      max-width: 420px;
    }
  }
}
.sub-button {
  display: inline-block;
  float: right;
  background: #E54D42;
  padding: 4px;
  box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
}
/*
  EXAMPLES
*/
.notification.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #EAF4FE;
  border: 1px solid #D4E8FD;
  .notification-title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px;
    color: #2589F3;
  }
}
.custom-template {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;
  font-size: 13px;
  margin: 5px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  &, & > div {
    box-sizing: border-box;
  }
  background: #E8F9F0;
  border: 2px solid #D0F2E1;
  .custom-template-icon {
    flex: 0 1 auto;
    color: #15C371;
    font-size: 32px;
    padding: 0 10px;
  }
  .custom-template-close {
    flex: 0 1 auto;
    padding: 0 20px;
    font-size: 16px;
    opacity: 0.2;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .custom-template-content {
    padding: 10px;
    flex: 1 0 auto;
    .custom-template-title {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 600;
    }
  }
}
.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all .5s;
}
.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-500px) scale(0.2);
}
</style>

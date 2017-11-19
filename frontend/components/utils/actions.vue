<template lang="html">
  <section>
    <div class="fixed-action-btn horizontal">
      <a class="btn-floating btn-large waves-effect waves-light red">
        <i class="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a class="btn-floating red modal-trigger" @click="$modal.show('habits')">
            <i class="material-icons">insert_invitation</i>
          </a>
        </li>
        <li>
          <a class="btn-floating yellow darken-1" @click="$modal.show('tasks')">
            <i class="material-icons">playlist_add_check</i>
          </a>
        </li>
      </ul>
    </div>

    <!-- Modals -->
    <modal name="habits" transition="pop-out" :width="800" :height="400">
      <createHabit/>
    </modal>
    <modal name="tasks" transition="pop-out" :width="800" :height="400">
      <createTask/>
    </modal>
  </section>
</template>

<script>
import createHabit from '~/components/habits/create'
import createTask from '~/components/tasks/createTask'
export default {
  components: {
    createHabit,
    createTask
  }
}
</script>

<style>
</style>

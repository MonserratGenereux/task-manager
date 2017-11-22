<template>
<div>
  <v-nav>
    <div class="container">
    <a href="#!" class="brand-logo" slot="logo">Task Manager</a>
    <ul class="right">
      <li>
        <nuxt-link to="/"><v-icon>home</v-icon></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/register"><v-icon>person_add</v-icon></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/login"><v-icon>lock</v-icon></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/reports"><v-icon>show_chart</v-icon></nuxt-link>
      </li>
    </ul>
    </div>
  </v-nav>
</div>
</template>
<style>
.nav-wrapper {
        background-color: rgb(205,89, 90) !important;
    }
</style>

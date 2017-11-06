<template>
<div>
  <v-nav>
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"> 
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
    </ul>
    </div>
  </v-nav>
</div>
</template>
<style>

@import url(https://fonts.googleapis.com/css?family=Oswald:400|Open+Sans:700);
@import url(http://weloveiconfonts.com/api/?family=fontawesome);
.nav-wrapper {
        background-color: #FADB7D !important;
    }
.brand-logo {
  font-family: "Poppins", Sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 70px;
  text-shadow: 4px 5px #e6e6d8, 6px 7px #c6a39a;
  top:0px;
  left:470px;
  width:50px;

}

.brand-logo span {
  display: inline-block;
  vertical-align: middle;
}

span.star {
  font-size: 20px;
}






















</style>

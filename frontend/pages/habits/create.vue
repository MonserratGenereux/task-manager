<template>
  <v-row>
    <h1>Create Habit </h1>
    <v-grid s12 m6 l6 >
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Title</label>
        </div>
      </div>
    </form>
  </div>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Description</label>
        </div>
      </div>
    </form>
  </div>
<h5>Dificulty</h5>
<row s12 m6 l12>
  <div class="col l4">
    <div class="switch">
    <label>
      Easy
      <input type="checkbox">
      <span class="lever"></span>
    </label>
  </div>
  </div>
  <div class="col l4" style="padding-left: 0px;">
    <div class="switch">
    <label>
      Medium
      <input type="checkbox">
      <span class="lever"></span>
    </label>
  </div>
  </div>
  <div class="col l4">
    <div class="switch">
    <label>
      Hard
      <input type="checkbox">
      <span class="lever"></span>
    </label>
  </div>
  </div>
</row>

    </v-grid>
    <v-grid s12 m6 l6>
      <h5>Habit type</h5>
      <div class="type">
        <row s12 m6 l6 offset-l2>
          <a class="btn-floating btn-large waves-effect waves-light green" ><i class="material-icons">check</i></a>

        </row>
        <row s12 m6 l6>
          <a class="btn-floating btn-large waves-effect waves-light red" style="margin-left: 209px;"><i class="material-icons">close</i></a>

        </row>
        <row s12 m6 l6 >
          <small>Positive</small>
        </row>
        <row s12 m6 l6 style="padding-left: 230px;">
          <small>Negative</small>
        </row>
      </div>

      <h5>Frecuency</h5>

  <form action="#">
    <p>
      <input name="group1" type="radio" id="test1" />
      <label for="test1">Diary</label>
    </p>
    <p>
      <input name="group1" type="radio" id="test2" />
      <label for="test2">Weekly</label>
    </p>
    <p>
      <input name="group1" type="radio" id="test3" />
      <label for="test3">Monthly</label>
    </p>
  </form>

    </v-grid>
    <button class="btn waves-effect waves-light right" type="submit" name="action">Save
      <i class="material-icons right">send</i>
    </button>
  </v-row>
</template>

<script>
</script>


<style>
h5{
  text-align: center;
  padding-top: 20px;
}
h1{
  text-align: center;
  padding-bottom: 20px;
}
form{
  padding-left: 155px;
}
.type{
  padding-top: 50px;
  padding-left: 50px;
}
small{
  padding-top: 5px;

}
button{
  margin-top: 100px;
}
</style>

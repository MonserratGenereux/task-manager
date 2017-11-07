<template>
  <section>
    <div class="box">
    <div class="box-part">
      <h3>Create Habit </h3>
      <v-grid s12 m6 l6 >
        <div class="input-field col l12">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Name</label>
          </div>
          <div class="input-field col l12">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Description</label>
        </div>
        <h5>Difficulty</h5>
        <div class="col l4">
          <p>
            <input name="group2" type="radio" id="test4" />
            <label for="test4">Easy</label>
          </p>
        </div>
        <div class="col l4">
          <p>
            <input name="group2" type="radio" id="test5" />
            <label for="test5">Medium</label>
          </p>
        </div>
        <div class="col l4">
          <p>
            <input name="group2" type="radio" id="test6" />
            <label for="test6">Hard</label>
          </p>
        </div>
      </v-grid>
      <v-grid s12 m6 l6 id="bp-left">
        <h5>Habit type</h5>
        <div class="type">
          <row s12 m6 l6 offset-l2>
            <a class="btn-floating btn-large waves-effect waves-light green positive" ><i class="material-icons icon">check</i></a>

          </row>
          <row s12 m6 l6 style="padding-left:90px">
            <a class="btn-floating btn-large waves-effect waves-light red positive"><i class="material-icons icon">close</i></a>
          </row>
        </div>
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
    </div>

</div>
<button class="btn waves-effect waves-light" id="buttonSubmit" type="submit" name="action">Save

</button>
  </section>
</template>

<script>
</script>
<style>
h5{
  text-align: center;
  padding-top: 20px;
}
h3{
  text-align: center;
  padding-bottom: 20px;
}
form{
  padding-left: 100px;
}
.type{
  padding-left: 50px;
}
#bp-left{
  margin-top: -35px !important;
}
#bp-left{
  h5{
    text-align: center;
  }
}
#buttonSubmit{
  width: 100%;
  margin-top: 12px;
}
.positive{
  width: 30px !important;
  height: 30px !important;
}
.icon{
  margin-top: -19px;
}
</style>

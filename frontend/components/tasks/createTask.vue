<template>
  <section>
    <div class="box">
    <div class="box-part">
      <h3>Create Task</h3>
      <v-grid s12 m6 l6 >
        <div class="input-field col l12">
          <input id="last_name" type="text" class="validate">
          <label>Name</label>
          </div>
          <div class="input-field col l12">
          <input id="last_name" type="text" class="validate">
          <label>Description</label>
        </div>
      </v-grid>
      <v-grid s12 m6 l6 id="bp-left">

        <label>Due Date</label>
        <input type='text' name='customDate' placeholder='MM/DD/YYYY'
              pattern="\d{1,2}/\d{1,2}/\d{4}"class="validate">
        <h5>Remind me</h5>
        <form action="#" id="radio-2">
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
<button class="btn waves-effect waves-light" id="buttonSend" type="submit" name="action">Save

</button>
  </section>
</template>

<script>

</script>
<style scoped>
h5{
  text-align: center;
  margin-top: -7px !important;
}
h3{
  text-align: center;
  padding-bottom: 20px;
}
#radio-2{
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
#buttonSend{
  width: 100%;
  margin-top: 13px;
}
</style>

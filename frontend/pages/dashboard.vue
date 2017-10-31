<template>
  <v-row>
      <v-grid s12 m6 l4>
        <i class="large material-icons">person</i>
        <i>Monserrat Sánchez</i>
      </v-grid>
      <v-grid s12 m6 l8>
        <h5>Tasks</h5>
        <div class="progress">
          <div class="determinate" style="width: 90.8%">
          </div>
        </div>
        <h5>Habits</h5>
        <div class="progress">
          <div class="determinate" style="width: 70%"></div>
        </div>
      </v-grid>

    <br></br>
    <v-grid s12 m6 l6 >
      <div class="col s12 m7">
        <div class="row">
          <div class="col s12 m6">
            <Tasks/>
          </div>
        </div>
      </div>
    </v-grid>
    <v-grid s12 m6 l6>
      <div class="col s12 m7">
        <div class="row">
          <div class="col s12 m6">
            <h5>Habits</h5>
            <div class="card ">
              <div class="card-content white-text">
                <span class="card-title">Habit one</span>
                <p>Points:190</p>
              </div>
              <div class="card-action">
                <a class="btn-floating btn-large waves-effect waves-light green" ><i class="material-icons">exposure_plus_1</i></a>
                <a class="btn-floating btn-large waves-effect waves-light red"style="margin-left: 249px;"><i class="material-icons">exposure_neg_1</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-grid>
    <v-grid s12 m12 l12>
      <div class="fixed-action-btn horizontal">
        <a class="btn-floating btn-large waves-effect waves-light red">
          <i class="large material-icons">add</i>
        </a>
        <ul>
          <li><a class="btn-floating red modal-trigger"><i class="material-icons">insert_invitation</i></a></li>
          <li><a class="btn-floating yellow darken-1"><i class="material-icons">playlist_add_check</i></a></li>
        </ul>
      </div>
    </v-grid>
    <v-grid s12 m6 l6>

  <!-- Modal Trigger -->
  <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
</v-grid>
  </v-row>
</template>

<script>
import Tasks from '~/components/tasks/tasks'
export default{
  components: {
    Tasks
  }
}
</script>


<style>
.add{
  background-color: rgb(32,145,135);
  margin-left: 400px;
}
.card{
  width: 400px;
  background-color: rgb(32,145,135,0.5) !important;
}
.right{
  border-right: black;
}
.card-title{
  text-align: center;
}
.fixed-action-btn{
  top: 40px;
}
p{
  text-align: right;
}
</style>

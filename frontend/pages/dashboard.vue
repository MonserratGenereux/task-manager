<template>

  <v-row>
      <v-grid s12 m6 l4>
      <link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200' rel='stylesheet' type='text/css'>
        <div class="profile"><div class="hello"> Hello!<br>Montserrat Generaux</div></div>
      </v-grid>
      <v-grid s12 m6 l8>
       <h1>Current Progress</h1>
        <h5>&nbsp;</h5>
        <div class="progress">
          <div class="determinate" style="width: 90.8%">
          </div>
        </div>
        <h5>&nbsp;</h5>
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
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Patrick+Hand');


.profile {
  position: relative;
  border-radius: 50%;
  width: 150px;
	height: 150px;
  background: url('https://res.cloudinary.com/dd3gauh9w/image/upload/v1473497735/IMG_1494_a6suhl.jpg') 0 0 no-repeat;
  background-repeat: no-repeat;
  -webkit-animation: focus ease-in-out infinite 7s;
  -moz-animation: focus ease-in-out infinite 7s;
  animation: focus ease-in-out infinite 7s;
  -webkit-filter: grayscale(70%);
  filter: grayscale(70%);
}

.hello {
  position: absolute;
  top: -60px;
  left: -60%;
  margin-right: -0.1em;
  padding: 10px 15px;
  border-radius: 7px;
  background: #ddd;
  color: #555;
  font-size: 0.8em;
  line-height: 1.5em;
  letter-spacing: 0.1em;
}

.hello::before {
  content: ' ';
  position: absolute;
  bottom: -10px;
  right: 20px;
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  border-top: 15px solid #ddd;
  width: 0; 
  height: 0; 
  
}

@keyframes focus {
    0% { background-position: -1372px -444px; }
    5% { background-position: -1372px -444px; }
    10% { background-position: -310px -176px; }
    15% { background-position: -310px -176px; }
    20% { background-position: -1267px -189px; }
    25% { background-position: -1267px -189px; }
    30% { background-position: -417px -499px; }
    35% { background-position: -417px -499px; }
    40% { background-position: -1150px -193px; }
    45% { background-position: -1150px -193px; }
    50% { background-position: -606px -514px; }
    55% { background-position: -606px -514px; }
    60% { background-position: -1168px -492px; }
    65% { background-position: -1168px -492px; }
    60% { background-position: -410px -223px; }
    65% { background-position: -410px -223px; }
    70% { background-position: -1597px -207px; }
    75% { background-position: -1597px -207px; }
    80% { background-position: -977px -490px; }
    85% { background-position: -977px -490px; }
    90% { background-position: -935px -281px; }
    95% { background-position: -935px -281px; }
    100% { background-position: -1372px -444px; }
}


h1,h5 {
font-family: 'Patrick Hand', cursive;
}

</style>

<template>
  <v-row>
      <v-grid s12 m6 l4>
        <i class="large material-icons">person</i>
        <i>Monserrat Sánchez</i>
      </v-grid>
      <v-grid s12 m6 l8>
        <h5>Tasks</h5>
         <div class="icon">
    <div class="calendar">
      25
      <div class="holes"></div>
      <div class="flip"></div>
    </div>
  </div>

      
         <div class="icon">
    <div class="clock">
      <div class="circle"></div>
      <div class="clockwise"></div>
      <div class="shadows"></div>
    </div>
  </div>
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

.clock{
  width:40px;
  height:40px;
  background:#45c1ae;
  border-radius:50%;
  box-shadow: 0 2px 0 0px rgba(0,0,0,0.25), inset 0 1px 0 0 rgba(255,255,255,0.2);
  position:absolute;
  left:50%;
  margin-left:-209px;
  top:35%;
  margin-top:-54px;
  cursor:pointer;
}

.clock .circle{
  content:"";
  width:44px;
  height:44px;
  background:#cccabf;
  border-radius:50%;
  position:absolute;
  left:50%;
  margin-left:-22px;
  overflow:hidden;
  top:100%;
  margin-top:-42px;
}

.clock .circle:before{
  content:"";
  width:44px;
  height:44px;
  background:#edebde;
  border-radius:50%;
  position:absolute;
  left:50%;
  margin-left:-42px;
  overflow:hidden;
  top:50%;
  margin-top:-37px;
}

.clock .circle:after {
  content:"";
  width:14px;
  height:14px;
  background:#4b494f;
  position:absolute;
  border-radius:50%;
  left:50%;
  margin-left:-7px;
  top:50%;
  margin-top:-7px;
  z-index:5;
}

.clock .clockwise {
  width:29px;
  height:4px;
  background:#4b494f;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:6px;
  margin-top:-2px;
  transform-origin:-5px 2px;
  transition:transform 0.5s;
}

.clock .clockwise:after{
  content:"";
  width:21px;
  height:4px;
  background:#4b494f;
  position:absolute;
  left:-33px;
  transform-origin:26px center;
  transform:rotate(30deg);
}

.clock .clockwise:before{
  content:"";
  width:28px;
  height:4px;
  background:#9f9ba7;
  position:absolute;
  transform-origin:-6px center;
  transform:rotate(-90deg);
}

.clock .shadows {
  width:14px;
  height:14px;
  background:rgba(0,0,0,0.2);
  position:absolute;
  border-radius:50%;
  left:50%;
  margin-left:-7px;
  top:50%;
  margin-top:-3px;
  z-index:3;
  transition:transform 0.5s;
}

.clock .shadows:after {
  content:"";
  width:21px;
  height:4px;
  background:rgba(0,0,0,0.2);
  position:absolute;
  top:4px;
  left:-21px;
  transform-origin:26px center;
  transform:rotate(30deg);
}

.clock .shadows:before {
  content:"";
  width:29px;
  height:4px;
  left:13px;
  top:4px;
  background:rgba(0,0,0,0.2);
  position:absolute;
}

.clock:hover .clockwise, .clock:hover .shadows {
  transform:rotate(1060deg);
}
.calendar {
  width:108px;
  height:96px;
  background:#eeecdf;
  position:absolute;
  left:50%;
  margin-left:-240px;
  top:20%;
  margin-top:-48px;
  border-radius:6px;
  box-shadow: 0 2px 0 0px rgba(0,0,0,0.25), inset 0 1px 0 0 rgba(255,255,255,0.2);
  font-family:Arial, helvetica, 'sans';
  font-size:45px;
  line-height:112px;
  text-align:center;
}

.calendar:after {
  content:"";
  width:108px;
  height:27px;
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.2);
  background:#d64646;
  position:absolute;
  border-top-left-radius:6px;
  border-top-right-radius:6px;
  top:0; left:0;
}

.calendar:before {
  content:"";
  width:0;
  height:0;
  border-bottom: 23px solid #37353a;
	border-left: 23px solid transparent;
  position:absolute;
  bottom:-2px;
  right:0;
}

.calendar .flip {
  position:absolute;
  right:0;
  bottom:0;
  width: 0;
	height: 0;
	border-top: 23px solid #fff;
	border-right: 23px solid transparent;
}
.calendar .flip:after {
  content:"";
  width:0;
  height:0;
  border-bottom: 23px solid rgba(0,0,0,0.25);
	border-left: 23px solid transparent;
  position:absolute;
  top:-23px;
  right:0;
}


.calendar .holes {
  width:8px;
  height:8px;
  position:absolute;
  border-radius:50%;
  background:#37353a;
  left:22px;
  top:10px;
  z-index:10;
  box-shadow: inset 0 2px 0 0px rgba(0,0,0,0.25), 0 1px 0 0 rgba(255,255,255,0.2);
}

.calendar .holes:after {
  content:"";
  width:8px;
  height:8px;
  position:absolute;
  border-radius:50%;
  background:#37353a;
  left:56px;
  box-shadow: inset 0 2px 0 0px rgba(0,0,0,0.25), 0 1px 0 0 rgba(255,255,255,0.2);
}




</style>

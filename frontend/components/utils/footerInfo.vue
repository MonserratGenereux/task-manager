<template>
  <v-footer>
      <div class="container" slot="content" >
          <div class="row">
              <div class=" rows col l4 s12">
                  <h5 class="white-text">Software Design and Architecture</h5>
                  <p class="grey-text text-lighten-4">Final Project</p>
              </div>
              <div class="col l3 offset-l2 s12">
                  <h5 class="white-text">Team</h5>
              </div>

              <div class="col l3 offset-l2 s12">
                  <ul>
                      <li><i class="tiny material-icons prefix">person</i>Monserrat Genereux</li>
                      <li><i class="tiny material-icons prefix">person</i>Toatzin Padilla Arias</li>
                      <li><i class="tiny material-icons prefix">person</i>Victor Garcia Rosales</li>
                  </ul>
              </div>
              <div class="col l3 s12">
                  <ul>
                      <li><i class="tiny material-icons prefix">person</i>Diego Toledo Medina</li>
                      <li><i class="tiny material-icons prefix">person</i>Fernanda Lopéz Cardenas</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="container" slot="copyright">&copy; Copyright 2017</div>
  </v-footer>
</template>

<script>

</script>

<style>
.page-footer {
        background-color: #FADB7D !important;
    }
body {
	width: 100wh;
	height: 90vh;
	color: #fff;
	background: linear-gradient(-45deg, #FADB7D,#FFFFFF, #808080, #404040);
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

</style>

<template>
  <nav
    v-bind:class="{ 'isOverlay': state.overlay}"
    class="navbar navbar-default navbar-fixed-bottom"
  >

    <div class="container">
      <div id="navbar" class="navbar-collapse collapse  ">
        <ul class="nav navbar-nav">

          <li>
            <a href="https://vine.co/u/1371198183925043200?mode=tv" target="_blank">
              <img class="social-ico" src="./../assets/ico-vine.svg">
            </a>
          </li>
          <li><a href=""><img class="social-ico" src="./../assets/ico-instagram.svg"></a></li>
          <li><a href=""><img class="social-ico" src="./../assets/ico-vimeo.svg"></a></li>

          <li><a v-link="'/projects'">projets</a></li>
          <li><a v-on:click="toogleOverlay" class="btn-overlay" >infos</a></li>

        </ul>
        <ul class="nav navbar-nav navbar-right">
          <a v-link="'/'"><img class="logo" src="./../assets/logo-seul.png"></a>
        </ul>
      </div>
    <h1>
      C'est une maison bleue
      Adossée à la colline
      On y vient à pied, on ne frappe pas
      Ceux qui vivent là, ont jeté la clé
      On se retrouve ensemble
      Après des années de route
      Et l'on vient s'asseoir autour du repas
      Tout le monde est là, à cinq heures du soir
      San Francisco s'embrume
      Quand San Francisco s'allume
      San Francisco, où êtes vous
      Lizard et Luc, Psylvia, attendez moi
    </h1>
    </div>
  </nav>
</template>

<script>
import state from './../state.js'

export default {
  data: function () { return {state: state} },
  methods: {
    toogleOverlay: function () {
      this.state.overlay = !this.state.overlay
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-overlay {
  display: block;
   cursor: pointer;
}
nav.navbar {
  height: 160vh;
  bottom: -120vh;

  transition: bottom .8s ease-in-out;

  border:none;
  background: linear-gradient(-180deg, rgba(255,255,255,0) 0, rgba(0,0,0,255) 40vh);
  pointer-events: none;

}

nav.navbar.isOverlay {
  bottom: -45vh;
}

#navbar {
  margin-top: calc(20vh + 150px);
  pointer-events: auto;
}

.social-ico {
  height: 32px;
  top:-4px;
  position: relative;
  transition: top .2s ease-in-out;

}
.social-ico:hover {

  position: relative;
  top:-12px;

}
.navbar a {
  /* [vine][vimeo][insta]: */
  font-family: les_druides_Regular;
  font-size: 18px;
  color: #50E3C2 !important;
  letter-spacing: 0px;
}

.logo {
  /*margin-bottom: 25px;*/
  margin-top: -50px;
}
h1 {
  /* C'est une maison ble: */
  font-family: les_druides_Regular;
  font-size: 26px;
  color: #50E3C2;
  letter-spacing: 0.8px;
  line-height: 45px;

  text-align: center;

}
</style>



<template>
  <nav v-bind:class="{ 'isOverlay': state.overlay}" class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">

      <div id="navbar" class="navbar-collapse collapse  ">
        <ul class="nav navbar-nav">
          <li><a v-link="'/'"><img class="logo" src="./../assets/logo-seul.png"></a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-if="!state.overlay"><a v-on:click="toogleOverlay" class="btn-overlay" >infos</a></li>
          <li v-if="state.overlay"><a v-on:click="toogleOverlay" class="btn-overlay-close" ><img src="./../assets/ico-close.svg"></a></li>

          <li><a href="https://vine.co/u/1371198183925043200?mode=tv" target="_blank"><img class="social-ico" src="./../assets/ico-vine.svg"></a></li>

          <li><a href=""><img class="social-ico" src="./../assets/ico-vimeo.svg"></a></li>
        </ul>
      </div>

      <div class="container">
        <h1 class="about"  v-if="about">{{about.text}}</h1>
      </div>
    </div>

  </nav>
</template>

<script>
import state from './../state.js'
import _ from 'lodash'

export default {
  data: function () { return {state: state} },
  computed: {
    about: function () {
      return _(this.state.txts).filter(['key', 'about']).first()
    }
  },
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

  .btn-overlay-close {
    display: block;
    cursor: pointer;
    position: relative;
    bottom: 3px;
    right: 5px
  }
  nav.navbar {
    height: 120vh;

    bottom: calc(-80vh + 70px);
    transition: bottom .4s ease-in-out;

    border:none;
    background: linear-gradient(-180deg, rgba(255,255,255,0) 5vh, rgba(0,0,0,255) 45vh);
    pointer-events: none;

  }

  nav.navbar.isOverlay {
    bottom: 0;
  }

  #navbar {
    margin-top: calc(40vh);
    pointer-events: auto;
    height: 70px;
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
    font-size: 18px;
    color: #50E3C2 !important;
    letter-spacing: 0px;
  }

  .logo {
    margin-top: -50px;
  }

  h1 {

    font-size: 26px;
    color: #50E3C2;
    letter-spacing: 0.8px;
    line-height: 45px;

    text-align: center;

  }
</style>



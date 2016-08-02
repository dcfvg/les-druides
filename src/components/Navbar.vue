<template>
  <nav v-bind:class="{ 'isOverlay': state.overlay}" class="navbar navbar-default navbar-fixed-bottom">
    <div class="container" v-if="'texts.length > 0'">

      <div id="navbar" class="navbar-collapse collapse  ">
        <ul class="nav navbar-nav">
          <li><a v-link="'/projects'"><img class="logo" src="./../assets/logo-seul.png"></a></li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li v-if="!state.overlay"><a v-on:click="toogleOverlay" class="btn-overlay" >infos</a></li>

          <li v-if="state.overlay"><a v-on:click="toogleOverlay" class="btn-overlay-close" ><img src="./../assets/ico-close.svg"></a></li>

          <li><a v-link="'/projects'">fragments</a></li>
          <li ><a :href="texts.vinepage.text" target="_blank"><img class="social-ico" src="./../assets/ico-vine.svg"></a></li>

          <li ><a :href="texts.vimeopage.text"><img class="social-ico" src="./../assets/ico-vimeo.svg"></a></li>
        </ul>

      </div>

      <div class="container">
        <h1 class="about col-sm-offset-1 col-sm-10" >{{{texts.manifesto.text}}}</h1>
        <p class="about col-sm-12" >{{texts.infos.text}}</p>
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
    texts: function () {
      return _.keyBy(this.state.txts, 'key')
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
  }

  .btn-overlay-close img{
    height: 17px;
  }

  nav.navbar {
    height: 120vh;

    bottom: calc(-80vh + 50px);
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
    height: 50px;
  }

  .social-ico {
    height: 17px;
    top:-2px;
    position: relative;
    transition: top .2s ease-in-out;

  }

  .social-ico:hover {
    position: relative;
    top:-12px;
  }

  .navbar a {
    color: #50E3C2 !important;
    letter-spacing: 0px;
  }

  .logo {
    margin-top: -35px;
    height: 48px;
    transition: height .2s ease-in-out;
  }

  nav.navbar.isOverlay .logo {
    height: 90px;
  }

  h1 {
    font-size: 18px;
    color: #50E3C2;
    letter-spacing: 0.8px;
    line-height: 30px;
    text-align: center;
  }
  p.about {
    text-align: center;
    color: white;
  }
</style>



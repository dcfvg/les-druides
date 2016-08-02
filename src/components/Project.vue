<template>
  <div
    v-for="frag in projfrags"
    name="item-{{$index}}"
    class="row fragline"
    v-if="frag.vimeo !== ''"
  >

    <div class="container" >
      <div class="row">
        <p class="col-sm-2 type">{{frag.date}}</p>
        <h1 class="col-sm-8 v-link-active">{{frag.title}}</h1>
        <p class="col-sm-2 type">{{frag.genre}}</p>

      </div>

      <div class="row video col-sm-10 col-sm-offset-1">
        <div class="embed-responsive embed-responsive-16by9" >
          <iframe
            class="embed-responsive-item"
            :src="'https://player.vimeo.com/video/'+frag.vimeo+'?title=0&byline=0&portrait=0'"
            frameborder="0"
            webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
      </div>

      <div class="row caption">
        <p class="col-sm-offset-3 col-sm-6 pitch">{{frag.pitch}}</p>
      </div>
    </div>


  </div>
  <div class="container seeAlso">
    <Vine v-if="next" :frag="next" class="col-sm-offset-9"></Vine>
  </div>
</template>

<script>
  import state from './../state.js'
  import Vine from './Vine'
  import _ from 'lodash'

  export default {
    data: function () { return {state: state} },
    components: {Vine},
    computed: {
      projfrags: function () {
        return _.filter(this.state.frags, ['id', this.$route.params.id])
      },
      projMain: function () {
        return _(this.state.frags).filter(['id', this.$route.params.id]).first()
      },
      next: function () {
        return _(this.state.frags)
          .filter(['home', '1'])
          .reject(['id', this.$route.params.id])
          .sample()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-top: 32px;
    background-color: black;
  }

  .seeAlso {
    background-color: gold;
    height: 30vh;
    padding-top:15vh;
    background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 100%);

  }

  h1 {
    text-align: center;
    font-size: 26px;
    color: #FFFFFF;
    letter-spacing: 1.6px;
    /*min-height: 64px;*/
  }

  .type {
    font-size: 14px;
    color: #50E3C2;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 30px;
  }

  .pitch {
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.83x;
    line-height: 23px;
    text-align: center;

    opacity: 0.4;
    transition: opacity .4s ease-in-out;

  }

  .pitch:hover {
    color: #fff;
    opacity: 1;
  }

  .embed-responsive, iframe {
    background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 100%);
  }

  .video {
    color: #50E3C2;
    background-color: black;
    padding: 16px 96px 32px 96px;
  }

  .fragline {
    /*padding-bottom: 64px*/
  }

</style>

<template>
  <div v-for="frag in projfrags" class="row fragline" v-if="frag.vimeo !== ''">

    <div class="container" >
      <div class="row video">
        <div class="embed-responsive embed-responsive-16by9 col-sm-12" >
          <iframe
            class="embed-responsive-item"
            :src="'https://player.vimeo.com/video/'+frag.vimeo+'?title=0&byline=0&portrait=0'"
            frameborder="0"
            webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
      </div>

      <div class="row caption">

        <div class="col-sm-5">
          <h1>{{frag.title}}</h1>
          <p class="type">{{frag.genre}} <br/> {{frag.date}}</p>
        </div>

        <p class="col-sm-6 pitch">{{frag.pitch}}</p>

      </div>
    </div>

  </div>
</template>

<script>
  import state from './../state.js'
  import _ from 'lodash'

  export default {
    data: function () { return {state: state} },
    computed: {
      projfrags: function () {
        return _.filter(this.state.frags, ['id', this.$route.params.id])
      },
      projMain: function () {
        return _(this.state.frags).filter(['id', this.$route.params.id]).first()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-bottom: 64px;
    background-color: black;
  }

  h1 {
    text-align: center;
    /* Type something, a lo: */
    font-family: les_druides_Regular;
    font-size: 26px;
    color: #FFFFFF;
    letter-spacing: 1.6px;
    min-height: 100px;
  }

  .type {
    font-family: les_druides_Regular;
    font-size: 14px;
    color: #50E3C2;
    letter-spacing: 1px;
    text-align: center;
  }

  .pitch {
    margin-top: 20px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0.83x;
    line-height: 23px;
  }

  .embed-responsive, iframe {
    background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 100%);
  }

  .video {
    color: #50E3C2;
    background-color: black;
    padding: 64px;

  }

  .fragline {
    padding-bottom: 64px
  }

</style>

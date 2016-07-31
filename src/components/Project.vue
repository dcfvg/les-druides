<template>
  <div class="container">
    <div v-for="frag in projfrags" class="row fragline">


      <div class="row video" v-if="frag.vimeo !== ''">
        <div class="embed-responsive embed-responsive-16by9 col-sm-12" >
            <iframe
              class="embed-responsive-item"
              :src="'https://player.vimeo.com/video/'+frag.vimeo+'?title=0&byline=0&portrait=0'"
              frameborder="0"
              webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
        </div>

        <h1 class="col-sm-4">{{frag.title}}
        <div class="vine" v-if="frag.vine !== ''">
          <iframe
            class="vine-embed"
            :src="'https://vine.co/v/'+frag.vine+'/embed/simple?audio='+(state.audio ? '1' : '0')"
            width="300"
            height="300"
            frameborder="0">
          </iframe>
        </div>
        </h1>
        <p  class="col-sm-2">{{frag.genre}}, {{frag.date}}</p>
        <p  class="col-sm-4">{{frag.pitch}}</p>

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
  margin-left: 64px;
}
h1 {
  text-align: center;
}
.embed-responsive {
  background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 100%);

  border-bottom:solid black 10vh;
}

.video {

  color: #50E3C2;
  background-color: black;

  padding: 5vh;

}

.fragline {
    /*background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 50%);*/
    padding-bottom: 32px
}
.link {
  text-align: right;
}

</style>

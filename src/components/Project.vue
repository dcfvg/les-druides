<template>
  <div class="container">

  <div class="row infos">
      <h1 class="col-sm-12">{{projMain.title}}</h1>
      <p  class="col-sm-offset-2 col-sm-2">{{projMain.genre}}, {{projMain.date}}</p>
      <p  class="col-sm-4">{{projMain.pitch}}</p>
      <p  class="col-sm-4 link"><a :href="projMain.url">{{projMain.url}}</a></p>
  </div>
    <div v-for="frag in projfrags" class="row fragline">

      <div class="col-sm-2">
        <div class="vine" v-if="frag.vine !== ''">
          <iframe
            class="vine-embed"
            :src="'https://vine.co/v/'+frag.vine+'/embed/simple?audio='+(state.audio ? '1' : '0')"
            width="300"
            height="300"
            frameborder="0">
          </iframe>
        </div>
      </div>

      <div class="col-sm-10">
        <div class="vimeo embed-responsive embed-responsive-16by9 " v-if="frag.vimeo !== ''">
            <iframe
              class="embed-responsive-item"
              :src="'https://player.vimeo.com/video/'+frag.vimeo+'?title=0&byline=0&portrait=0'"
              frameborder="0"
              webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
        </div>
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

.vimeo {
  background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 100%);
  border:solid black 5vw;
  border-top:solid black 15vh;
  border-bottom:solid black 15vh;
}
.infos {
  /*color: white;*/
}
.fragline {
    /*background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 50%);*/
    padding-bottom: 32px
}
.link {
  text-align: right;
}

</style>

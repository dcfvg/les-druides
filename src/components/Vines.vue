<template>
  <div class="vines">
    <div id="vines">
      <div v-for="frag in published">
        <div class="vine">
          <iframe
            class="vine-embed"
            :src="'https://vine.co/v/'+frag.vine+'/embed/simple?audio='+(state.audio ? '1' : '0')"
            width="300"
            height="300"
            frameborder="0">
          </iframe>
          <div class="vine-hover">
            <h2><a v-link="'/projet/'+frag.id">{{frag.title}}</a></h2>
            <h3><a v-link="'/projet/'+frag.id">{{frag.genre}}</a></h3>
          </div>
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
    published: function () {
      return _.filter(this.state.frags, ['home', '1'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.vines {
  padding-bottom: 500px;
}
.vine {
  float: left;
  height: 300px;
}

h2 {
  color: white;
  /* title */
  font-family: les_druides_Regular;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: 1.6px;
}
h3 {
  /* genre: */
  font-family: les_druides_Regular;
  font-size: 14px;
  color: #50E3C2;
  letter-spacing: 1px;
  position: absolute;
  bottom: 8px;
  width: 100%;
}

.vine-hover {
  margin: 0;
  padding: 0;
  height: 300px;
  width: 300px;
  position: relative;
  top: -305px;
  text-align: center;
  padding-top: 150px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  /* Rectangle 4: */
  background: #50E3C2;
  background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 27%, #000000 100%);
}

.vine-hover:hover {
  color:white;
  opacity: 1;
}

</style>


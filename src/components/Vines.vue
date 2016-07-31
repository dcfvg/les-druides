<template>
  <div class="vines container-fluid">
    <div id="vines">
      <div v-for="frag in featured">
        <div class="vine">
          <iframe
            class="vine-embed"
            :src="'https://vine.co/v/'+frag.vine+'/embed/simple?audio='+(state.audio ? '1' : '0')"
            width="300"
            height="300"
            frameborder="0">
          </iframe>
          <div class="vine-hover">
            <a v-link="'/project/'+frag.id">

              <span class="title">{{frag.title}}</span>
              <span class="genre">{{frag.genre}}</span>

            </a>
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
    featured: function () {
      return _.filter(this.state.frags, ['home', '1'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .vines {
    padding-bottom: 500px;
    padding-left: 0;
  }

  .vine {
    float: left;
    height: 300px;
    background: linear-gradient(-180deg, rgba(0,0,0,255) 0, rgba(255,255,255,0) 100%);
  }

  .title {
    color: white;
    /* title */
    font-family: les_druides_Regular;
    font-size: 26px;
    color: #FFFFFF;
    letter-spacing: 1.6px;

    display: block;
    width: 100%;
  }
  .genre {
    /* genre: */
    font-family: les_druides_Regular;
    font-size: 14px;
    color: #50E3C2;
    letter-spacing: 1px;
    position: absolute;
    bottom: 8px;

    display: block;
    width: 100%;
  }


  .vine-hover a {
    display: block;
    text-decoration: none;
    margin: 0;
    padding: 0;
    height: 300px;
    width: 300px;
    position: relative;
    bottom: 304px;
    text-align: center;
    padding-top: 150px;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    /* Rectangle 4: */
    background: #50E3C2;
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 27%, #000000 100%);
  }

  .vine-hover a:hover {
    color:white;
    opacity: 1;
  }

</style>


<template>
    <div id="app">
      <router-view></router-view>
      <Navbar></Navbar>
    </div>
</template>

<script>
  import state from './state.js'
  import Tabletop from 'Tabletop'
  import Navbar from './components/Navbar'
  import _ from 'lodash'

  export default {
    components: {Navbar},
    created: function () {
      Tabletop.init({ key: '1b_v94YxgbjByIwqyjiv5jTupN_wlSN4HeBflVmXqq0U',
        callback: function (data, tabletop) {
          state.frags = _.sortBy(data.medias.elements, function (d) { return -d.date })
          state.txts = data.txt.elements
        }
      })
    }
  }
</script>

<style>

*::selection {
  background: #50E3C2; /* WebKit/Blink Browsers */
}

  .v-link-active {
    background-image: radial-gradient(30% 10% at 50% 85%, #50E3C2 0%, rgba(80,226,193,0.00) 100%);
  }

  @font-face {
    font-family: 'druides';
    src: url('./assets/fonts/hinted-les_druides_Regular.eot');
    src: url('./assets/fonts/hinted-les_druides_Regular.eot?#iefix') format('embedded-opentype'),
      url('./assets/fonts/hinted-les_druides_Regular.woff2') format('woff2'),
      url('./assets/fonts/hinted-les_druides_Regular.woff') format('woff'),
      url('./assets/fonts/hinted-les_druides_Regular.ttf') format('truetype'),
      url('./assets/fonts/hinted-les_druides_Regular.svg#les_druides_Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }


  #app {
    font-family: 'druides';
  }

  body {
    background-color: #50E3C2;
    padding-bottom: 40vh;
    overflow-x: hidden;
  }

</style>

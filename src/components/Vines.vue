<template>
  <div class="vines container">
    <div id="vines">
      <div v-for="frag in featured">
        <Vine :frag="frag"></Vine>
      </div>
    </div>
  </div>
</template>

<script>
import state from './../state.js'
import _ from 'lodash'
import Vine from './Vine'

export default {
  data: function () { return {state: state} },
  components: {Vine},
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
  }
</style>


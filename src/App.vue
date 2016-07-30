<template>
  <div id="app">
    <Vines></Vines>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Vines from './components/Vines'
import state from './state.js'
import Tabletop from 'Tabletop'

export default {
  components: {
    Hello, Vines
  },
  created: function () {
    Tabletop.init({ key: '1b_v94YxgbjByIwqyjiv5jTupN_wlSN4HeBflVmXqq0U',
    callback: function (data, tabletop) {
      state.frags = data
      console.log(state)
    },
    simpleSheet: true })
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

</style>

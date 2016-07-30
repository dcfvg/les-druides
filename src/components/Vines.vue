<template>
  <div class="vines">
    <div id="vines">
      <div v-for="frag in state.frags">
        <div class="vine">
          <iframe
            class="vine-embed"
            src="https://vine.co/v/{{ frag.vine }}/embed/simple?audio=1"
            width="300"
            height="300"
            frameborder="0">
          </iframe>
          <div class="vine-hover"><h1>{{frag.title}}</h1></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import state from './../state.js'

export default {
  data: function () { return {state: state} }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.vine {
  float: left;
}

.vine-hover {
  margin: 0;
  padding: 0;
  height: 150px;
  width: 300px;
  position: relative;
  top: -304px;
  text-align: center;
  padding-top: 150px;
}

.vine-hover:hover {
  background-color: blue;
  color:white;
}

</style>


<template>
  <div class="container-fluid">
      <div v-for="frag in state.frags">

        <div class="row">
          <a class="row" v-link="'/project/'+frag.id">

            <span class="col-sm-1">
 <!--              <iframe
                class="vine-embed"
                :src="'https://vine.co/v/'+frag.vine+'/embed/simple?audio='+(state.audio ? '1' : '0')"
                width="30"
                height="30"
                frameborder="0">
              </iframe> -->
            </span>
            <span class="col-sm-1">{{frag.date}}</span>
            <span class="col-sm-4">{{frag.title}}</span>
            <span class="col-sm-3">{{frag.genre}}</span>


          </a>

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
a {
  color:black;
}
.vine-embed {
  pointer-events: none;
}
</style>



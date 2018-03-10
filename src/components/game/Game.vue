<template>
  <div class="container">
    <div>
      <header class="header">{{msg}}</header>
      <div id="content"></div>
    </div>
  </div>
</template>

<script>
import Game from './core'

export default {
  name: 'game',
  data() {
    return {
      msg: 'second msg',
    }
  },
  created() {
    window.game = new Game()
  },
  destroyed() {
    window.game.destroyed()
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  font-size: 22px;
}

</style>

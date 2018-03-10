<template>
  <div class="container">
    <div>
      <header class="header">{{msg}}</header>
      <router-link :to="'Home'" class="back">Back</router-link>
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
    window.game.destroy()
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
.back {
  position: absolute;
  top: 0;
  margin-right: 10px;
  width: 100%;
  text-align: center;
  font-size: 22px;
  margin-top: 10px;
  color: 'red';
}

</style>

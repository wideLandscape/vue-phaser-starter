<template>
  <div class="container">
    <div>
      <header class="header">{{msg}}</header>
       <router-link :to="'game'" class="link">Game</router-link>
     </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.header {
  top: 0;
  width: 100%;
  text-align: center;
  font-size: 22px;
}
.link {
  width: 100%;
  text-align: center;
  font-size: 22px;
  margin-top: 10px;
  color: 'red';
}

</style>

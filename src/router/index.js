import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Game from '../components/game/Game.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/Home'
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})

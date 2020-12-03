import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Watch from '../views/Watch.vue'
import Top from '../views/Top.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watch
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

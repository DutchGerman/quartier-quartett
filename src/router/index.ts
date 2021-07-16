import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Rules from '../views/Rules.vue'
import Readme from '../views/Readme.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    // route level code-splitting
    // this generates a separate chunk (play.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "play" */ '../views/Play.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/readme',
    name: 'Readme',
    component: Readme
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

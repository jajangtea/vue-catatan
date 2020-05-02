import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tambah',
    name: 'Tambah',
    component: () => import(/* webpackChunkName: "tambah" */ '../views/Tambah.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import(/* webpackChunkName: "show" */ '../views/Show.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

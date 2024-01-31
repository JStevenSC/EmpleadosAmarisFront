import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AcercaView from '../views/AcercaView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Acerca',
    component: AcercaView
  },
  {
    path: '/Empleados',
    name: 'Empleados',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmpleadosView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

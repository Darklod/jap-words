import Vue from 'vue'
import VueRouter from 'vue-router'
import Words from '@/views/Words'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/words'
  },
  {
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/phrases',
    name: 'Phrases',
    component: () => import('../views/Phrases.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

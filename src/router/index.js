import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Loader',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Loader.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Home')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/Course')
  },
  {
    path: '/shulte',
    name: 'Shulte',
    component: () => import('../views/Shulte')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import('../views/Words')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

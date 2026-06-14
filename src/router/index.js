import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/o-ourives',
    name: 'about',
    component: AboutView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
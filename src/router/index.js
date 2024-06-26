import { createRouter, createWebHistory } from 'vue-router'
// import mainCard from '../components/mainCard.vue'
import research from '../components/researchCard.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'mainCard',
  //   component: mainCard
  // },
  {
    path: '/',
    redirect: '/mainPage',
  },
  {
    path: '/research',
    name: 'Research',
    component: research
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

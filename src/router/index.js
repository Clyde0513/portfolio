import { createRouter, createWebHistory } from 'vue-router';
import mainCard from '../components/mainCard.vue';
import projectCard from '../components/projectCard.vue';
import research from '../components/research.vue';

const routes = [
  { path: '/', name: 'Clyde\'s website', component: mainCard, meta: {title: 'Clyde\'s website'} },
  { path: '/projects', component: projectCard },
  { path: '/research', component: research },
  {
    path: '/interests',
    name: 'interests',
    component: () => import('../views/InterestsView.vue')
  },
  {
    path: '/checkers',
    name: 'checkers',
    component: () => import('../components/checkersPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Clyde\'s website';
  next();
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import mainCard from '../components/mainCard.vue';
import projectCard from '../components/projectCard.vue';
import research from '../components/research.vue';

const routes = [
  { path: '/', component: mainCard },
  { path: '/projects', component: projectCard },
  { path: '/research', component: research }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

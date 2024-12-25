import { createRouter, createWebHistory } from 'vue-router';
import mainCard from '../components/mainCard.vue';
import projectCard from '../components/projectCard.vue';
import Technologies from '../components/internships.vue';

const routes = [
  { path: '/', component: mainCard },
  { path: '/projects', component: projectCard },
  { path: '/internships', component: Technologies }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import mainCard from '../components/mainCard.vue';
import projectCard from '../components/projectCard.vue';
import internships from '../components/internships.vue';

const routes = [
  { path: '/', component: mainCard },
  { path: '/projects', component: projectCard },
  { path: '/internships', component: internships }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

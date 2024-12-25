<!-- App.vue -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import mainCard from './components/mainCard.vue';
import projectCard from './components/projectCard.vue';
import Technologies from './components/internships.vue';

const routes = [
  { path: '/', component: mainCard },
  { path: '/projects', component: projectCard },
  { path: '/internships', component: Technologies }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  name: 'App',
  setup() {
    return { router };
  }
}
</script>

<style>
/* Add global styles for the entire app if needed */
body {
  margin: 0;
}
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: rgb(39, 112, 158);
}
</style>

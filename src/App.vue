<!-- App.vue -->
<template>

  <mainCard/>
  <projectCard/>
   
</template>

<script>
import mainCard from './components/mainCard.vue'
import projectCard from './components/projectCard.vue';
// import researchCard from './components/researchCard.vue';

export default {
  name: 'App',
  components: {
    mainCard,
    projectCard,
    // researchCard
  }
}

</script>
<style >
/* Add global styles for the entire app if needed */
body{
  margin: 0;
}
#app{
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: rgb(39, 112, 158);
}
</style>

<template>
    <div class="main-container">
        <div class="project-card" v-for="(items) in projectData.ProjectsArray" v-bind:key="items">
            <h2>{{ items.Title }}</h2>
            <img :src="items.Image" alt="">
            <img :src="items.Image1" alt="">
            <p class='about-me'>{{ items.About }}</p>
            <p class='about-me'>{{ items.About1 }}</p>
            <img v-if="items.Image2" :src="items.Image2" alt="">
            <img v-if="items.Image3" :src="items.Image3" alt="">
            <img v-if="items.Image4" :src="items.Image4" alt="">
            <div class="links">
                <a :href="items.Link" target="_blank"><img src="../assets/github.png" alt="Github Logo"></a>
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from "/projects.json"
export default {
    data() {
        return {
            projectData: jsonData
        }
    }
}
</script>

<style scoped>
.main-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Create 3 columns */
    gap: 20px; /* Add gap between grid items */
    justify-items: center; /* Center items horizontally */
    align-items: start; /* Align items at the top */
    padding-left: 20px; /* Add padding to the left side */
}
.project-card {
    padding: 10px;
    background-color: rgb(115, 201, 220);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: transform 0.3s;
    min-height: 450px; /* Set a minimum height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden; /* Ensure content does not overflow */
}
.project-card:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.project-card img {
    height: 11rem;
    width: 80%;
    border-radius: 15px;
    margin: 10px auto;
}

.links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}
.links img {
    height: 1.2rem;
    margin: 5px;
    transition: transform 0.3s;
}
.links img:hover {
    transform: scale(1.2);
}
.about-me {
    width: 97%;
    margin-top: 10px;
    font-size: 1rem;
    color: #333;
    overflow: hidden; /* Ensure text does not overflow */
    text-overflow: ellipsis;
    white-space: normal; /* Allow text to wrap */
}
</style>
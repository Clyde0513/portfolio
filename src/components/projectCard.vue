<template>
    <div>
        <button @click="$router.push('/')" class="back-button">Back</button>
        <div class="main-container">
            <div class="project-card" v-for="(items) in projectData.ProjectsArray" v-bind:key="items">
                <h2 @click="toggleDropdown(items)" class="dropdown-title">{{ items.Title }}</h2>
                <transition name="fade">
                    <div :class="['dropdown-content', { 'visible': items.showDropdown }]">
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
                </transition>
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
    },
    methods: {
        toggleDropdown(item) {
            item.showDropdown = !item.showDropdown;
        }
    }
}
</script>

<style scoped>
.back-button {
    background-color: #3498db;
    color: rgb(8, 69, 255);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 20px;
}

.back-button:hover {
    background-color: #2980b9;
}

.main-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive columns */
    gap: 45px; /* Add gap between grid items */
    justify-items: center; /* Center items horizontally */
    align-items: start; /* Align items at the top */
    padding: 20px; /* Add padding around the container */
}
.project-card {
    padding: 20px;
    background-color: rgb(115, 201, 220);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: transform 0.3s, box-shadow 0.3s;
    min-height: 100px; /* Set a minimum height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden; /* Ensure content does not overflow */
}
.project-card:hover {
    transform: scale(1.0147);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.project-card img {
    height: auto;
    width: 100%;
    max-height: 800px; /* Set a maximum height */
    border-radius: 15px;
    margin: 10px 0;
    object-fit: cover; /* Ensure images cover the area */
}

.links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}
.links img {
    height: 1.5rem;
    margin: 5px;
    transition: transform 0.3s;
}
.links img:hover {
    transform: scale(1.2);
}
.about-me {
    width: 100%;
    margin-top: 10px;
    font-size: 1rem;
    color: #333;
    overflow: hidden; /* Ensure text does not overflow */
    text-overflow: ellipsis;
    white-space: normal; /* Allow text to wrap */
    line-height: 1.5; /* Improve readability */
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color:rgb(3, 24, 29)
}
.dropdown-title {
    cursor: pointer;
    color: #0f4f79;
    transition: color 0.3s;
}

.dropdown-title:hover {
    color: #2980b9;
}

.dropdown-content {
    background-color: rgb(115, 201, 220); /* Match the project card background color */
    padding: 0; /* Start with no padding */
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
}

.dropdown-content.visible {
    max-height: 1000px; /* Arbitrary large value to ensure full height */
    padding: 10px; /* Add padding when visible */
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
<template>
<div class="main-container">
    <div class = "project-card" v-for ="(items,index) in projectData.ProjectsArray" v-bind:key="items">

        <h2>{{ projectData.ProjectsArray[index].Title }}</h2>

        <img :src = "projectData.ProjectsArray[index].Image" alt = ""> 
        <img :src = "projectData.ProjectsArray[index].Image1" alt = "">     

        <p class = 'about-me'>{{ projectData.ProjectsArray[index].About }}</p>
        <p class = 'about-me'>{{ projectData.ProjectsArray[index].About1 }}</p>
        <img :src = "projectData.ProjectsArray[index].Image2" alt = "">   
        <!-- add a space between the images   -->
        
        <img :src = "projectData.ProjectsArray[index].Image3" alt = "">
        <img :src = "projectData.ProjectsArray[index].Image4" alt = "">
        <div class="links">
            <a :href = "projectData.ProjectsArray[index].Link" target = "_blank"><img src = "../assets/github.png" alt = "Github Logo"> </a> <!-- 3.3.13 Github Logo -->
        </div>

    </div>
</div>

</template>

<script>
import jsonData from "/projects.json"
    export default{
    data(){
        return{
            projectData: jsonData
        }
    }
}

</script>

<style scoped>

.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.project-card{
    margin: 100px;
    padding: 10px;
    flex-wrap: 0 0 40%;
    background-color: rgb(146, 203, 216);
    border-radius: 25px;
    box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
}

.project-card img{
    height: 11rem;
}




.links{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
.links img{
    height: 1.2rem;
    margin: 5px;
}

.about-me{
    width: 97%;
}
</style>
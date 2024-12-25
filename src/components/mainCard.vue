<script setup>
import { ref } from 'vue';
import { config } from '../utils/envUtility';

const error = ref(null);
const downloadResume = async () => {
  try {
    const response = await fetch(config.resumeUrl(), {
      headers: {
        'Authorization': `Bearer ${config.blobToken()}`
      }
    });    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Clyde_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    error.value = err.message;
    console.error('Download failed:', error);
  }
};
</script>

<template>
    
<div class="wrapper">
    <div class="main-container">

<div class="container-one">
    <div class="profile">
        <img src="../assets/me.png" alt="my photo">
        <h3>Clyde Villacrusis</h3>
        <p>UCLA 3rd Year Computer Science Student, in addition to majoring in Linguistics and CS</p>
        <div class="button-container">
            <router-link to="/projects" class="tech-button">Projects</router-link>
        </div>
        <div class="button-container">
            <router-link to="/research" class="tech-button">Research</router-link>
        </div>
    </div>
    
    <div class="social-links">
            <div class="link">
                <a href = "https://github.com/Clyde0513">
                <img src ="../assets/github.png" alt = "" > 
               <h2>GitHub</h2>
            </a>
            </div>

            <div class="link">
                <a href = "https://www.instagram.com/sagec1313/">
                <img src ="../assets/ig.png" alt = "" > 
                <h2>Instagram</h2>
            </a>
           
            </div>
            <div class="link">
            <a href = " https://www.linkedin.com/in/clydevillacrusis/">
                <img src ="../assets/linkedln.png" alt = "" >     
                <h2>Linkedln</h2>
            </a>
           </div>

           <div class="link">
            <a @click.prevent="downloadResume" href="#">
              <img src="../assets/resume.png" alt="PDF">
              <h2>Resume</h2>
            </a>
           </div>
    </div>
</div>
<div class="container-two">
    <div class = 'about-me'>
        <h1 class = 'about-me-1'>About me</h1>
        <p>Hello! My name is Clyde Villacrusis and I am majoring in Computer Science and majoring in Linguistics & CS at UCLA as a 3rd year. 
        In my free time, I like to watch kdramas and play videogames. When given the opportunity,
        I tend to code stuff such as making my own personal website, e.g. to showcase 
         many of my projects that I have done in the past. In addition, I am apart of ACM AI in which we build AI models, 
        such as using Pytorch and CNNs.😊
        <br/>
        <br/>
        <b>I am currently interning at UCLA Health to develop an AI application that translates unorganized
        blood pressure data into a cleaned and organized format. Currently, the tools I am using are OCR tools,
        smart on Fire, and ChatGPT enterprise models. When the AI application is complete, I hope to see a growth
        in the number of patients that are able to get their blood pressure data organized and cleaned.</b>
        <br/>
        <br/>
        I liked programming because of how cool it is that every successful code I ran, it is extremely satisfying. I started to learn programming and getting into it when I took
        AP Computer Science A during my senior year of highschool. The first language I learned was Java and the language I first struggled because everything was new to me:
        from basic variable syntax to the end of the AP unit: Recursion. Since then, I interned at a nonprofit company called Curls&Careers where I enhanced my coding abilities
        regarding CSS, JS, and HTML. My primary goal was to revamp the website so that it looks clean and readable for HS students finding mentors (mentorship program). It was a fun
        internship that lasted for about 5 months.
     
        <br/>
        <br/>
        At the moment, I am a part of KAWAN (Filipino-Catholic Club) as an Associate Executive Director and PIES (Pilipino in Engineering and Sciences) here at UCLA. Being a part of these clubs have helped me come out
        of my shell and socialize/network with other like-minded and diverse peers. They've helped me grow as a person and are very welcoming in new and old peers! 
        </p>
        
    </div>
    <div class="techonology-section">
        <h1>Techonologies studied</h1>
        <div class="logos">
            <img src = "../assets/c++.png" alt = "C++ Language Logo">
            <img src = "../assets/C.png" alt = "C Language Logo">
            <img src = "../assets/Js.png" alt = "JS Language Logo">
            <img src = "../assets/python.png" alt = "Python Language Logo">
            <img src = "../assets/Vue.png" alt = "Vue Language Logo">
            <img src = "../assets/java.png" alt = "Java Language Logo">
        </div>
        
    </div>
    <div class="button-container">

        <!-- <div class="research-button">
            <router-link to = "Research" class = 'research-text'>  </router-link> 
        </div> 
        <router-view/> -->
    </div>
</div>
</div>
</div>
</template>



<style scoped>

    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
        background-color: #163f4b;
    }
    img{
        height: 10px;
    }
    .main-container{
        max-width: 800px;
        width: 100%;
        background: rgb(0, 119, 171);
        border-radius: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2rem;
    }
    .container-one{
        background-color: lightskyblue;
        padding: 1%;
        margin-left: 1.5%;
        width: 95%;
        border-radius: 40px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        
    }

    /* .about-me:hover {
        transform: scale(1.05);
    } */

    .container-one:hover {
        transform: scale(1.05);
    }
    .profile {
  text-align: center;
  margin-bottom: 2rem;
    }


    .profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #3498db;
    }

    .profile h3 {
    margin-top: -1rem;
    font-size: 2.1rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    }       

    .profile p {
    color: #09328f;
    line-height: 1.6;
    font-size: 1.2rem;
    }


    .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    }

    .container-two{
        margin-top: 2rem;
        padding: 1.5rem;
        background: rgba(21, 191, 229, 0.1);
        background-color: lightskyblue;
        border-radius: 15px;
        backdrop-filter: blur(10px);
    }

    

    .link a{
        text-decoration: none;
        color: rgb(70, 31, 212);
        font-size: 10px;  
    }
    .link img{
        width: 24px;
        height: 24px;
    }

    .about-me-1{
        text-align: center;
        padding: 10px;
        font-family: 'sans-serif';
        
    }
    .about-me h2 {
        color: white;
        font-size: 1.8rem;
        margin-bottom: 1rem;
        text-align: center;
        
    }

    .about-me p {
        color: rgb(38, 26, 26);
        line-height: 1.6;
        font-size: 1.1rem;
        text-align: justify;
        padding: 0 1rem;
        font-family: sans-serif;
        }
    .logos img{
        height: 2.5rem;
    }

    .research-button{
       background-color: rgb(33, 7, 128);
       margin: 5px;
       border-radius: 15px;
       padding: 8px;
    }
    .research-button router-link{
        text-decoration: none;
        color: rgb(255, 255, 255);
    }

    .research-text{
        color: white;
    }
    .button-container{
        display: flex;
        flex: row;
        justify-content: center;
        align-items: center;
        margin-top: -1rem;
    }

    .link a:hover {
    background-color: #054163;
    transform: translateY(-2px);
    }

    .tech-button {
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        background-color: #3498db;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .tech-button:hover {
        background-color: #2980b9;
    }

    @media only screen and (max-width: 950px){
        .main-container{
            width: 95%;
        }

        .social-links {
        flex-direction: column;
        align-items: center;
    }
    }
</style>
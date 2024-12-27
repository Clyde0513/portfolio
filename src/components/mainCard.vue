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

const getRandomEmoji = () => {
  const emojis = ['👨‍💻', '🚀', '💡', '⚡', '✨'];
  return emojis[Math.floor(Math.random() * emojis.length)];
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
        <div class="status-badge">
          <span>{{ getRandomEmoji() }} Currently: Developing my Client's Website</span>
        </div>
        <div class="button-container">
            <router-link to="/projects" class="tech-button">Projects</router-link>
        </div>
        <div class="button-container">
            <router-link to="/research" class="tech-button">Research</router-link>
        </div>
        <div class="button-container">
            <router-link to="/interests" class="tech-button">Personal Interests</router-link>
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
        When given the opportunity, I tend to code stuff such as making my own personal website, e.g. to showcase 
         many of my projects that I have done in the past.😊
        <br/>
        <br/>
        <b>I am currently interning at UCLA Health to develop an AI application that translates unorganized
        blood pressure data into a cleaned and organized format. Currently, the tools I am using are OCR tools,
        smart on Fire, and ChatGPT enterprise models. When the AI application is complete, I hope to see a growth
        in the number of patients that are able to get their blood pressure data organized and cleaned.</b>
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
            <div class="tech-tooltip" v-for="tech in technologies" :key="tech.name">
              <img :src="tech.logo" :alt="tech.name">
              <span class="tooltip-text">{{ tech.experience }}</span>
            </div>
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
        animation: backgroundPulse 10s ease-in-out infinite;
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
        animation: containerGlow 3s ease-in-out infinite;
    }
    .container-one{
        background-color: lightskyblue;
        padding: 1%;
        margin-left: 0.6%;
        width: 96%;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        position: relative;
        overflow: hidden;
    }

   
    .container-one:hover {
        transform: scale(1.05);
        transition: transform 0.8s;
    }
    .container-one {
        transition: transform 0.8s;
    }
    .container-one:hover {
        transform: scale(1.05);
        transition: transform 0.8s;
    }

    .container-one::before, .container-two::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent,
            transparent 40%,
            rgba(255, 255, 255, 0.1),
            transparent 60%,
            transparent
        );
        animation: glowingBorder 3s linear infinite;
        pointer-events: none;
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
    box-shadow: 0 0 15px rgba(52, 152, 219, 0.5);
    animation: profilePulse 2s ease-in-out infinite;
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

    .status-badge {
      background: rgba(52, 152, 219, 0.1);
      padding: 8px 16px;
      border-radius: 20px;
      margin: 10px auto;
      display: inline-block;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(52, 152, 219, 0.2);
      animation: pulse 2s infinite;
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
        position: relative;
        overflow: hidden;
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

    .container-two p {
        color: rgb(38, 26, 26);
        line-height: 1.6;
        font-size: 1.1rem;
        text-align: justify;
        padding: 0 1rem;
        font-family: sans-serif;
        }

    .about-me-1 p:hover {
        transform: scale(1.05);
    } 
    .container-two:hover {
        transform: scale(1.05);
        transition: transform 0.8s;
    }

    .container-two {
        transition: transform 0.8s;
    }
    .container-two:hover {
        transform: scale(1.05);
        transition: transform 0.8s;
    }



    .logos img{
        height: 2.5rem;
        transition: transform 0.3s, filter 0.3s;
    }

    .logos img:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 10px rgba(52, 152, 219, 0.8));
    }

    .tech-tooltip {
      position: relative;
      display: inline-block;
    }

    .tooltip-text {
      visibility: hidden;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      text-align: center;
      padding: 5px 10px;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .tech-tooltip:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
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
    box-shadow: 0 0 15px rgba(5, 65, 99, 0.6);
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
        position: relative;
        overflow: hidden;
        background: linear-gradient(45deg, #3498db, #2980b9);
        box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
    }

    .tech-button:hover {
        background: linear-gradient(45deg, #2980b9, #3498db);
        box-shadow: 0 0 20px rgba(52, 152, 219, 0.8);
    }

    @keyframes backgroundPulse {
        0%, 100% { background-color: #163f4b; }
        50% { background-color: #1a4857; }
    }

    @keyframes containerGlow {
        0%, 100% { box-shadow: 0 4px 15px rgba(0, 119, 171, 0.3); }
        50% { box-shadow: 0 4px 25px rgba(0, 119, 171, 0.5); }
    }

    @keyframes profilePulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); }
        50% { transform: scale(1.02); box-shadow: 0 0 25px rgba(52, 152, 219, 0.8); }
    }

    @keyframes glowingBorder {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
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
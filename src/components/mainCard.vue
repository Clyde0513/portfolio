<template>
    
<div class="wrapper">
    <div class="main-container">

<div class="container-one">
    <div class="profile">
        <img src="../assets/me.png" alt="my photo">
        <h3>Clyde Villacrusis</h3>
        <p>UCLA 3rd Year Computer Science Student, in addition to majoring in Linguistics and CS</p>
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
           
            </div><div class="link">
            <a href = " https://www.linkedin.com/in/clydevillacrusis/">
                <img src ="../assets/linkedln.png" alt = "" >     
                <h2>Linkedln</h2>
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
        I liked programming because of how cool it is that every successful code I ran, it is extremely satisfying. I started to learn programming and getting into it when I took
        AP Computer Science A during my senior year of highschool. The first language I learned was Java and the language I first struggled because everything was new to me:
        from basic variable syntax to the end of the AP unit: Recursion. Since then, I interned at a nonprofit company called Curls&Careers where I enhanced my coding abilities
        regarding CSS, JS, and HTML. My primary goal was to revamp the website so that it looks clean and readable for HS students finding mentors (mentorship program). It was a fun
        internship that lasted for about 5 months.
        <br/>
        <br/>
        I also interned at a non-CS company called Club Stride where I had to work in groups to make presentations, pitch-decks, and 
        elevator pitches to present to the team and supervisors regarding how we can improve the transportation livelihood in Vallejo (my hometown in California). I learned and
        improved my soft and hard skills, such as communicating effectively with my peers and utilizing Notion to create slides and manage our schedule for tasks' due dates.
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

<script>

export default{
   
}
</script>

<style scoped>

    .wrapper{
        display: flex;
        justify-content: center;
    }
    img{
        height: 10px;
    }
    .main-container{
        display: flex;
        flex-direction: row;
        background-color: lightgray;
        border-radius: 25px;
        width: 60%;
        background-color: #0c406b;
        box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
    }
    .container-one{
        background-color: lightskyblue;
        padding: 1%;
        width: 30%;
        border-radius: 25px;
        box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
    }
    .profile img{
        height: 5rem;
        border-radius: 50%;
        border-radius: 25px;
    }
    .container-two{
        background-color: rgb(180, 216, 250);
        width: 70%;
        margin: 2.5%;
    }
    .link a{
        text-decoration: none;
        color: rgb(70, 31, 212);
        font-size: 10px;  
    }
    .link img{
        height: 2rem;
    }

    .about-me-1{
        text-align: center;
        padding: 10px;
    }
    .about-me{
        text-align: left;
        padding: 10px;
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
    }

    @media only screen and (max-width: 950px){
        .main-container{
            width: 95%;
        }
    }
</style>
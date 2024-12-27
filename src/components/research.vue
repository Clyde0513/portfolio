<template>
  <div class="tech-page">
    <div class="particles-container" ref="particlesContainer"></div>
    <div class="reading-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    <div class="page-content">
      <div class="back-button" @click="goBack">
        ← Go Back
      </div>
      <div class="stats-container">
        <div class="stat-item">
          <span class="stat-number">3</span>
          <span class="stat-label">Papers</span>
        </div>
      </div>
      <div class="research-container">
        <h1 class="animated-title">Research Papers</h1>
        <div class="paper-section">
          
          <div class="dropdown-header wave-text" @click="togglePaper">
            <h2>[Morphology] Taglish: A Mixed-Code Language of English and Tagalog</h2>
            <span class="arrow">{{ isOpen ? '▼' : '▶' }}</span>
          </div>
          <transition name="slide">
            <div class="paper-content" v-if="isOpen">
          
            <h3>Overview</h3>
            <p> Taglish: a mixture of two languages consisting of English and Tagalog, is a convenient way of
            speaking both languages, especially in Luzon. It was first introduced in the early 20th century when
            Americans brought English into Metro Manila, bringing Filipinos together to speak such a mixed
            language that was easier to converse in on a daily basis. For instance, Taglish sentences can be like may
            nag-te-text ba diyan, which means “is there anyone texting there?”. Notice how half of the word text, i.e.
            “te” is copied and is inserted between the Tagalog transitive affix nag and the English verb text. This is
            known as reduplication, where a part or whole of a base is copied and inserted into the right or left of it.
            </p>
            <br/>
            <p>
            In addition, Tagalog is a gender-neutral language with a VSO order(Verb-Subject-Object), unlike English
            which is an SVO language. Attaching Tagalog inflectional/derivational morpheme(s) into an English
            sentence or vice versa is what this research paper is going to explain the phenomenon of what happens to
            the morphological structure of Taglish. Investigating the Taglish phenomenon will not only help us in
            understanding the sociolinguistic background on why and how a bilingual Filipino code switches all the
            time, it will also help in determining how the morphological structure of Taglish influences their
            proficiency in either languages.</p>
            
            <a href="https://github.com/Clyde0513/Morphology-Paper/blob/main/Complete%20Paper_%20Morphology%20Research%20on%20Taglish.pdf" target="_blank" class="github-link">
              <img src="../assets/github.png" alt="GitHub Logo" class="github-logo">
            </a>
            
            <!-- Add more sections as needed -->
          </div>
          </transition>
        </div>
  
        <!-- Second Paper Section -->
        <div class="paper-section">
          <div class="dropdown-header wave-text" @click="togglePaper2">
            <h2>Attack to LLM-based Web Agent to cause PII Leakage/Phishing/Malicious Behavior </h2>
            <span class="arrow">{{ isOpen2 ? '▼' : '▶' }}</span>
          </div>
          <transition name="slide">
            <div class="paper-content" v-if="isOpen2">
              <h3>Abstract</h3>
              <p>In general, web based agents complete several tasks for you on real websites, significantly increasing human productivity. Unfortunately, web based agents can be susceptible to malicious attacks that reveal the user’s personally identifiable information (PII). In this report, we aim to explore how it is possible to make an LLM-based web agent leak a user’s private information. Attacks to LLM-based web agents are done by modifying the source code of a website that the web agent acts on. Using SeeAct with Gemini 1.5 flash as our testing framework, we demonstrated how attackers can establish hidden forms that mirror legitimate input fields, causing web agents to inadvertently recreate sensitive information into concealed fields. 
                </p>
                <br/>
                <p>
                In addition, we also used popup and adversarial attacks so that we can perform our attacks. Our preliminary results show particular success with login credential and shipping information forms. Shipping information forms is where the agent consistently populates the hidden forms, while login credential forms showed mixed results, suggesting potential built-in protective behaviors in some scenarios. Currently, the limitations of defense mechanisms, i.e., non-visible element detection and keyword filtering, fail to protect against sophisticated injection attacks. Thus, our findings highlight the need for more robust security measures against web agent attacks.</p>
              
              <a href="https://github.com/Clyde0513/Attack-To-WebAgents/blob/main/Attack%20to%20LLM-based%20Web%20Agent%20to%20cause%20PII%20Leakage_Phishing_Malicious%20Behavior.docx.pdf" target="_blank" class="github-link">
                <img src="../assets/github.png" alt="GitHub Logo" class="github-logo">
              </a>
            </div>
          </transition>
        </div>

        <div class="paper-section">
          <div class="dropdown-header wave-text" @click="togglePaper3">
            <h2>Dynamic Hand Gesture Classification</h2>
            <span class="arrow">{{ isOpen3 ? '▼' : '▶' }}</span>
          </div>
          <transition name="slide">
            <div class="paper-content" v-if="isOpen3">
              <h3>Overview</h3>
              <p>Hand gestures are a form of non-verbal communication that conveys information and emotion through the motion of hands. This has significant applications in human-computer interfaces; hand gesture recognition systems can implement touchless systems, sign language translation, or assist the impaired. One of the challenges in hand gesture recognition is the processing of a dynamic hand gesture (DHG). Unlike static hand gestures, which convey information through the basic pose of the hand, DHGs communicate information through both spatial and temporal dimensions of the hand pose. Thus, any system that processes DHGs must contain the context of recently seen movements to formulate a hand gesture classification, disregard any invalid or unrecognized hand gestures over a data stream, and achieve computational performance such that classification can be performed in a real-time setting.
                </p>
                <br/>
                <p>
                  In recent years, deep learning techniques have achieved human-like accuracy in DHG classification. These techniques have all taken both spatial and temporal information into account, but vary widely in methodology. This report will highlight three different deep learning architectures that classify dynamic hand gestures. The first model builds upon previous Recurrent Neural Networks to create a Recurrent 3D Convolutional Neural Network to encode both spatial and temporal states for the classification of DHGs. The second model uses Google’s Mediapipe to extract landmarks of the user’s hand to create a more accurate classification. The third model is a hybrid deep learning model that obtains high-level features with ImageNet, ResNet50v2, and Mediapipe to increase dynamic hand recognition accuracy.
                </p>
              <a href="https://ucladeepvision.github.io/CS163-Projects-2024Fall/2024/12/13/team43-hand-gesture-classification.html#overview" target="_blank" class="github-link">
                <img src="../assets/github.png" alt="GitHub Logo" class="github-logo">
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchPage',
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      isOpen3: false,
      scrollProgress: 0
    }
  },
  mounted() {
    this.initParticles();
    window.addEventListener('scroll', this.handleScroll);
    document.querySelectorAll('.paper-section').forEach(section => {
      section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty('--x', `${x}%`);
        section.style.setProperty('--y', `${y}%`);
      });
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    togglePaper() {
      this.isOpen = !this.isOpen
    },
    goBack() {
      this.$router.go(-1)
    },
    togglePaper2() {
      this.isOpen2 = !this.isOpen2
    },
    togglePaper3() {
      this.isOpen3 = !this.isOpen3
    },
    initParticles() {
      const particles = [];
      const container = this.$refs.particlesContainer;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = 5 + Math.random() * 10 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
        particles.push(particle);
      }
    },
    handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      this.scrollProgress = (scrollTop / documentHeight) * 100;
    }
  }
}
</script>

<style scoped>
.tech-page {
  background-color: #163f4b;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.page-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.back-button {
  position: fixed;
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: rgb(146, 169, 203);
}

.back-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.research-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  margin-top: -80px;
}

.animated-title {
  background: linear-gradient(45deg, #64B5F6, #1976D2, #0D47A1);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 3s ease infinite;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.paper-section {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin: 1rem 0;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  position: relative;
  overflow: hidden;
}

.paper-section:nth-child(2) {
  animation-delay: 0.2s;
}

.paper-section:nth-child(3) {
  animation-delay: 0.4s;
}

.dropdown-header {
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-header:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.wave-text {
  position: relative;
  overflow: hidden;
}

.wave-text::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #64B5F6, transparent);
  transform: translateX(-100%);
  opacity: 0;
}

.wave-text:hover::after {
  animation: wave 1.5s ease-in-out;
  opacity: 1;
}

.dropdown-header h2 {
  transition: color 0.3s ease, transform 0.3s ease;
}

.dropdown-header:hover h2 {
  color: #64B5F6;
  transform: translateX(10px);
}

.paper-content {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(10px);
}

.paper-content p {
  line-height: 1.6;
  color: #B0BEC5;
  transition: color 0.3s ease;
}

.paper-content:hover p {
  color: #ECEFF1;
}

h1, h2, h3 {
  margin: 0;
}

.arrow {
  font-size: 1.2rem;
}

.github-link {
  display: block;
  text-align: right;
}

.github-logo {
  width: 50px;
  height: 50px;
  margin-top: 20px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 0 8px rgba(100, 181, 246, 0.6));
}

.github-link:hover .github-logo {
  transform: scale(1.1);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes wave {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(100, 181, 246, 0.5);
  border-radius: 50%;
  animation: float linear infinite;
  transform-origin: center center;
}

.reading-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #64B5F6, #1976D2);
  z-index: 1000;
  transition: width 0.2s ease;
}

.stats-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  margin-top: 0px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #64B5F6;
  text-shadow: 0 0 10px rgba(100, 181, 246, 0.5);
}

.stat-label {
  font-size: 0.9rem;
  color: #B0BEC5;
  margin-top: 0.5rem;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    transform: translateY(-50vh) scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

.paper-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(100, 181, 246, 0.1) 0%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.paper-section:hover::before {
  opacity: 1;
}
</style>

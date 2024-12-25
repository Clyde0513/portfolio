<template>
  <div class="tech-page">
    <div class="page-content">
      <div class="back-button" @click="goBack">
        ← Go Back
      </div>
      <div class="research-container">
        <h1>Research Papers</h1>
        <div class="paper-section">
          
          <div class="dropdown-header" @click="togglePaper">
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
          <div class="dropdown-header" @click="togglePaper2">
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
      isOpen2: false
    }
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
  position: relative;
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
}

.paper-section {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin: 1rem 0;
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

.paper-content {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
}

.github-link:hover .github-logo {
  transform: scale(1.1);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
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
</style>

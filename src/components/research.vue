<template>
  <div class="tech-page">
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
        <div class="paper-content" v-show="isOpen">
        
          <h3>Introduction</h3>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchPage',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    togglePaper() {
      this.isOpen = !this.isOpen
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.tech-page {
  background-color: #163f4b;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Times New Roman', Times, serif;
}

.research-container {
  width: 80%;
  max-width: 1000px;
  padding: 2rem;
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

.back-button {
  position: absolute;
  top: 2rem;
  left: 2rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: rgb(146, 169, 203);

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
</style>

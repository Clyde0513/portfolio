<template>
    <div class="interests-container">
        <div class="back-button" @click="goBack">
            ← Go Back
        </div>
        <h1>Personal Interests</h1>
        
        <div class="interest-section">
            <div class="interest-card">
                <h2>Gaming</h2>
                <p>I enjoy playing various video games like Valorant and Minecraft. Gaming helps me unwind and connect with friends.</p>
                <div class="image-gallery">
                    <div class="image-box">
                        <img src="../assets/reyna.png" alt="Valorant" onerror="this.src='https://via.placeholder.com/300x200'">
                    </div>
                    <div class="image-box">
                        <img src="../assets/mc-removebg-preview.png" alt="Minecraft" onerror="this.src='https://via.placeholder.com/300x200'">
                    </div>
                </div>
            </div>
            
            <div class="interest-card">
                <h2>K-Dramas</h2>
                <p>I'm an avid K-drama viewer! Some of my favorites include fantasies and romantic comedies.</p>
                <div class="image-gallery">
                    <div class="image-box">
                        <img src="../assets/queenoftears.png" alt="K-Drama 1" onerror="this.src='https://via.placeholder.com/300x200'">
                    </div>
                    <div class="image-box">
                        <img src="../assets/lovenextdoor.png" alt="K-Drama 2" onerror="this.src='https://via.placeholder.com/300x200'">
                    </div>
                </div>
            </div>

            <div class="interest-card">
                <h2>Filipino Culture</h2>
                <p>As an active member of Filipino cultural clubs at UCLA, I love participating in cultural events and connecting with my heritage.</p>
                <div class="image-gallery">
                    <div class="image-box">
                        <img src="../assets/2ndsimbanggabi.png" alt="Filipino Culture 1" onerror="this.src='https://via.placeholder.com/300x200'">
                    </div>
                    <div class="image-box">
                        <img src="../assets/SPCN.png" alt="Filipino Culture 2" onerror="this.src='https://via.placeholder.com/300x200'">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}

</script>
<style scoped>

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
.interests-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #163f4b;
    min-height: 100vh;
    color: white;
}

.interests-container h1 {
    text-align: center;
    color: #3498db;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.interest-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
}

.interest-card {
    background-color: lightskyblue;
    border-radius: 15px;
    padding: 1.5rem;
    color: #2c3e50;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    padding-bottom: 2rem;
}

.interest-card:hover {
    transform: translateY(-5px);
}

.interest-card h2 {
    color: #054163;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.interest-card p {
    line-height: 1.6;
    font-size: 1.1rem;
}

.image-gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.image-box {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-box:hover img {
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .interest-section {
        grid-template-columns: 1fr;
    }
    .image-gallery {
        grid-template-columns: 1fr;
    }
}
</style>

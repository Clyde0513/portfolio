<template>
    <div class="interests-container" :class="theme">
        <canvas class="particles"></canvas>
        <div class="content-wrapper">
            <div class="theme-toggle" @click="toggleTheme">
                {{ theme === 'dark' ? '☀️' : '🌙' }}
            </div>
            <div class="back-button" @click="goBack">
                ← Go Back
            </div>
            <h1 class="page-title">Personal Interests</h1>
            
            <div class="interest-section">
                <div v-for="(interest, index) in interests" 
                     :key="index" 
                     class="interest-card"
                     :style="{ animationDelay: `${index * 0.2}s` }">
                    <h2>{{ interest.title }}</h2>
                    <p>{{ interest.description }}</p>
                    <div class="image-gallery">
                        <div v-for="(image, imgIndex) in interest.images" 
                             :key="imgIndex"
                             class="image-box"
                             @click="openImage(image.src)">
                            <img :src="image.src" :alt="image.alt">
                            <div class="image-overlay">
                                <span>Click to expand</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Modal -->
        <div v-if="selectedImage" class="modal" @click="selectedImage = null">
            <img :src="selectedImage" alt="Expanded view" class="modal-content">
        </div>
    </div>
</template>

<script>
import reyna from '../assets/reyna.png'
import minecraft from '../assets/mc-removebg-preview.png'
import queenOfTears from '../assets/queenoftears.png'
import loveNextDoor from '../assets/lovenextdoor.png'
import simbanggabi from '../assets/2ndsimbanggabi.png'
import spcn from '../assets/SPCN.png'

export default {
    data() {
        return {
            theme: 'dark',
            selectedImage: null,
            interests: [
                {
                    title: 'Gaming',
                    description: 'I enjoy playing various video games like Valorant and Minecraft. Gaming helps me unwind and connect with friends.',
                    images: [
                        { src: reyna, alt: 'Valorant' },
                        { src: minecraft, alt: 'Minecraft' }
                    ]
                },
                {
                    title: 'K-Dramas',
                    description: 'I\'m an avid K-drama viewer! Some of my favorites include fantasies and romantic comedies.',
                    images: [
                        { src: queenOfTears, alt: 'K-Drama 1' },
                        { src: loveNextDoor, alt: 'K-Drama 2' }
                    ]
                },
                {
                    title: 'Filipino Culture',
                    description: 'As an active member of Filipino cultural clubs at UCLA, I love participating in cultural events and connecting with my heritage.',
                    images: [
                        { src: simbanggabi, alt: 'Filipino Culture 1' },
                        { src: spcn, alt: 'Filipino Culture 2' }
                    ]
                }
            ]
        }
    },
    mounted() {
        this.initParticles();
        this.theme = localStorage.getItem('theme') || 'dark';
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        openImage(src) {
            this.selectedImage = src;
        },
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', this.theme);
        },
        initParticles() {
            const canvas = document.querySelector('.particles');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            const particles = [];
            
            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 3 + 1;
                    this.speedX = Math.random() * 3 - 1.5;
                    this.speedY = Math.random() * 3 - 1.5;
                    this.opacity = Math.random() * 0.5 + 0.3;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                }

                draw() {
                    ctx.fillStyle = `rgba(52, 152, 219, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            const createParticles = () => {
                for (let i = 0; i < 50; i++) {
                    particles.push(new Particle());
                }
            };

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                requestAnimationFrame(animate);
            };

            createParticles();
            animate();
        }
    }
}
</script>

<style scoped>
.interests-container {
    min-height: 100vh;
    position: relative;
    transition: all 0.3s ease;
}

.interests-container.dark {
    background: linear-gradient(135deg, #1a1f3c 0%, #163f4b 100%);
    color: white;
}

.interests-container.light {
    background: linear-gradient(135deg, #abbed5 0%, #b7d4e0 100%);
    color: #333;
}

.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    z-index: 100;
}

.theme-toggle:hover {
    transform: scale(1.1);
}

.light .interest-card {
    background: rgba(255, 255, 255, 0.2);
    color: #333;
}

.light .interest-card h2 {
    color: #2980b9;
}

.light .interest-card p {
    background: linear-gradient(45deg, #2980b9, #27ae60, #2980b9);
    -webkit-background-clip: text;
    color: #333;
}

.light .back-button {
    color: #2980b9;
    background-color: rgba(0, 0, 0, 0.1);
}

.content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.page-title {
    text-align: center;
    background: linear-gradient(45deg, #3498db, #2ecc71, #3498db);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    animation: shimmer 2s linear infinite;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
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

.interest-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 1rem;
}

.interest-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    color: white;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
    transform: translateY(20px);
}

.interest-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.15);
}

.interest-card h2 {
    color: #3498db;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
    animation: neonPulse 1.5s ease-in-out infinite;
}

.interest-card p {
    text-align: center;
    background: linear-gradient(45deg, #2b5f82, #2ecc71, #3498db);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 1rem;
    margin-bottom: 2rem;
    font-weight: 800;
    animation: shimmer 5s linear infinite;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(10, 176, 231, 0.3);
}

.image-gallery {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.image-box {
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
}

.image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-box:hover img {
    transform: scale(1.1);
}

.image-box:hover .image-overlay {
    opacity: 1;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
}

.modal-content {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    animation: zoomIn 0.3s ease;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes zoomIn {
    from {
        transform: scale(0.95);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes shimmer {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

@keyframes neonPulse {
    0%, 100% {
        text-shadow: 0 0 10px rgba(52, 152, 219, 0.5),
                     0 0 20px rgba(52, 152, 219, 0.3),
                     0 0 30px rgba(52, 152, 219, 0.1);
    }
    50% {
        text-shadow: 0 0 20px rgba(52, 152, 219, 0.8),
                     0 0 30px rgba(52, 152, 219, 0.5),
                     0 0 40px rgba(52, 152, 219, 0.3);
    }
}

@media (max-width: 768px) {
    .interest-section {
        grid-template-columns: 1fr;
    }
    
    .page-title {
        font-size: 2rem;
    }

    .interest-card {
        padding: 1.5rem;
    }
}

.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}
</style>

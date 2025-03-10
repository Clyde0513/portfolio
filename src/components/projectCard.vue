<template>
    <div class="page-container" :class="theme">
        <canvas class="particles"></canvas>
        <div class="theme-toggle" @click="toggleTheme">
            {{ theme === 'dark' ? '☀️' : '🌙' }}
        </div>
        <div class="back-button" @click="$router.push('/')">← Go Back</div>
        <div class="reminder-button">Reminder: Projects are clickable!</div>
        <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
        <div class="main-container">
            <div class="project-card" 
                 v-for="(item, index) in projects" 
                 v-bind:key="index"
                 :style="{ animationDelay: index * 0.2 + 's' }"
                 @click="toggleProject(index)">
                <div class="card-content">  
                    <h2 class="dropdown-title"> {{ item.Title }}</h2>
                    
                    <transition
                        name="slide-fade"
                        @enter="startTransition"
                        @leave="endTransition"
                    >
                        <div v-show="activeIndex === index" 
                             :class="['dropdown-content', { 'visible': activeIndex === index }]"
                             @click.stop>
                            <div class="image-gallery">
                                <img :src="item.Image" alt="" >
                                <img :src="item.Image1" alt="" >
                            <div class="project-details">
                                <p class='about-me'>{{ item.About }}</p>
                                <p class='about-me'>{{ item.About1 }}</p>
                                <p class='about-me'>{{ item.About2 }}</p>
                            </div>
                                <img v-if="item.Image2" :src="item.Image2" alt="">
                                <img v-if="item.Image3" :src="item.Image3" alt="" >
                                <img v-if="item.Image4" :src="item.Image4" alt="">
                            </div>
                          
                            <div class="links">
                                <a :href="item.Link" target="_blank" class="github-link" @click.stop>
                                    <img src="../assets/github.png" alt="Github Logo">
                                    <span>View on GitHub</span>
                                </a>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jsonData from "/projects.json"

export default {
    data() {
        return {
            theme: 'dark',
            projects: jsonData.ProjectsArray,
            activeIndex: false,
            isMobile: false,
            scrollProgress: 0
        }
    },
    mounted() {
        this.initParticles();
        // Initial check for mobile
        this.checkMobile();
        // Add resize listener
        window.addEventListener('resize', this.checkMobile);
        // Add scroll listener
        window.addEventListener('scroll', this.updateScrollProgress);
        this.theme = localStorage.getItem('theme') || 'dark';
    },
    beforeUnmount() {
        // Clean up listeners
        window.removeEventListener('resize', this.checkMobile);
        window.removeEventListener('scroll', this.updateScrollProgress);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
        toggleProject(index) {
            this.activeIndex = this.activeIndex === index ? null : index; // Open or close based on the clicked index

        },
        startTransition(el) {
            const height = el.scrollHeight;
            el.style.height = '0';
            el.offsetHeight; // force reflow
            el.style.height = height + 'px';
        },
        endTransition(el) {
            el.style.height = el.scrollHeight + 'px';
            el.offsetHeight; // force reflow
            el.style.height = '0';
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
        },
        updateScrollProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            this.scrollProgress = (scrollTop / docHeight) * 100;
        },
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', this.theme);
        },
    }
}
</script>

<style scoped>
.page-container {
    min-height: 100vh;
    position: relative;
    transition: all 0.3s ease;
}

.page-container.dark {
    background-color: #163f4b;
    color: white;
}

.page-container.light {
    background-color: #e0e8f1;
    color: #333;
}

.theme-toggle {
    position: relative;
    top: -40px;
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

.page-container {
    min-height: 100vh;
    background-color: #163f4b;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-card {
    background-color: rgba(119, 163, 187, 0.9);
    border-radius: 70px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
    margin-bottom: 2rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-content {
    padding: 1.5rem;
}

.dropdown-title {
    font-size: 1.5rem;
    color: #0f4f79;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
    padding-bottom: 0.5rem;
}

.dropdown-title:hover {
    color: #2980b9;
    transform: translateX(10px);
}

.click-indicator {
    position: absolute;
    right: 0;
    top: 50%;
    width: 10px;
    height: 10px;
    border-right: 2px solid #0f4f79;
    border-bottom: 2px solid #0f4f79;
    transform: translateY(-50%) rotate(45deg);
    transition: transform 0.3s ease;
}

.click-indicator.rotated {
    transform: translateY(-50%) rotate(-135deg);
}

.dropdown-content {
    overflow: hidden;
    transition: height 0.3s ease-out;
    height: 0;
    grid-column: span 1; /* Ensure it spans independently */
    background-color: rgba(92, 170, 198, 0.9);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.dropdown-content.visible {
    height: auto;
    opacity: 1;
}

.image-gallery {
    display: grid;
    gap: 1rem;
    margin: 1rem 0;
}

.image-gallery img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease;
    opacity: 0;
    animation: fadeIn 0.6s ease forwards;
}

.image-gallery img:hover {
    transform: scale(1.02);
}

.project-details {
    margin: 1.5rem 0;
}

.about-me {
    color: #03181d;
    line-height: 1.6;
    margin-bottom: 1rem;
    opacity: 0;
    animation: fadeIn 0.6s ease forwards 0.3s;
}

.github-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #0f4f79;
    transition: transform 0.3s ease;
}

.github-link:hover {
    transform: translateY(-2px);
}

.github-link img {
    width: 24px;
    height: 24px;
}

.back-button, .reminder-button {
    position: fixed;
    padding: 0.75rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    color: rgb(146, 169, 203);
    z-index: 100;
    transition: all 0.3s ease;
}

.back-button {
    top: 2rem;
    left: 2rem;
    cursor: pointer;
}

.reminder-button {
    top: 2rem;
    right: 2rem;
}

.back-button:hover, .reminder-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 5px;
    background-color: #2980b9;
    z-index: 101;
    transition: width 0.25s ease;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.expand-enter-active, .expand-leave-active {
    transition: all 0.5s ease;
    max-height: 2000px;
    opacity: 1;
}

.expand-enter-from, .expand-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    height: 0;
    opacity: 0;
    transform: translateY(-10px);
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

@media (max-width: 768px) {
    .main-container {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
    
    .back-button, .reminder-button {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        margin: 1rem;
        text-align: center;
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

.light .project-card {
    background-color: rgba(255, 255, 255, 0.2);
    color: #333;
}

.light .dropdown-title {
    color: #2980b9;
}

.light .paper-content {
    background: rgba(255, 255, 255, 0.1);
}

.light .back-button,
.light .reminder-button {
    color: #2980b9;
    background-color: rgba(0, 0, 0, 0.1);
}

.light .dropdown-content {
    background: rgba(13, 8, 8, 0.1);
}

.light .about-me {
    color: #333;
}
</style>
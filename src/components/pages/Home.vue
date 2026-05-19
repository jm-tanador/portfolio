<template>
    <div class="portfolio-wrapper">
        <!-- Navigation -->
        <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
            <div class="logo">jmtanador.</div>
            <div class="wip blink-warning">
                <i class="mdi mdi-alert"></i> Work in progress...
            </div>
            <!-- Inside the <nav> -->
                <ul class="nav-links">
                    <li><a href="#" @click.prevent="scrollToSection('home')" :class="{ active: activeSection == 'home' }">Home</a></li>
                    <li><a href="#" @click.prevent="scrollToSection('about')" :class="{ active: activeSection == 'about' }">About</a></li>
                    <li><a href="#" @click.prevent="scrollToSection('projects')" :class="{ active: activeSection == 'projects' }">Projects</a></li>
                    <li><a href="#" @click.prevent="scrollToSection('contact')" :class="{ active: activeSection == 'contact' }">Contact</a></li>
                </ul>

            <button class="cta-talk" @click="talkDia = true">LET'S TALK</button>
        </nav>

        <v-dialog v-model="talkDia" max-width="500px" persistent>
            <v-card class="contact-dialog-card pa-8">
                <div class="d-flex justify-space-between align-center mb-6">
                    <h2 class="dialog-title">LET'S CONNECT</h2>
                    <v-btn icon="mdi-close" variant="text" @click="talkDia = false" color="grey"></v-btn>
                </div>

                <v-form ref="form" v-model="isFormValid">
                    <div class="input-group">
                        <label>YOUR NAME</label>
                        <v-text-field 
                            v-model="contactForm.name" 
                            placeholder="Juan Dela Cruz" 
                            variant="outlined" 
                            density="comfortable" 
                            :rules="[v => !!v || 'Name is required']"
                            autocomplete="off"
                        ></v-text-field>
                    </div>

                    <div class="input-group">
                        <label>EMAIL ADDRESS</label>
                        <v-text-field 
                            v-model="contactForm.email" 
                            placeholder="example@email.com" 
                            variant="outlined" 
                            density="comfortable"
                            :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                            autocomplete="off"
                        ></v-text-field>
                    </div>

                    <div class="input-group">
                        <label>MESSAGE</label>
                        <v-textarea 
                            v-model="contactForm.message" 
                            placeholder="How can I help you?" 
                            variant="outlined" 
                            density="comfortable"
                            auto-grow
                            :rules="[v => !!v || 'Message is required']"
                            autocomplete="off"
                        ></v-textarea>
                    </div>

                    <v-btn 
                        block 
                        class="submit-btn mt-4" 
                        height="50" 
                        :loading="loading" 
                        @click="sendEmail"
                    >
                        SEND MESSAGE
                    </v-btn>
                </v-form>
            </v-card>
        </v-dialog>

        <!-- Success/Error Notification -->
        <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
            {{ snackbar.text }}
        </v-snackbar>


        <main>
            <!-- HOME SECTION -->
            <section id="home" class="hero">
                <div class="hero-content">
                    <span class="greeting">HI, THERE!</span>
                    <h1 class="main-title">
                        {{ displayedText }}<span class="cursor">|</span>
                    </h1>
                    <p class="description">Work > Sleep.</p>

                    <div class="social-icons">
                        <button class="icon-btn"><i class="mdi mdi-link-variant"></i></button>
                        <button class="icon-btn"><i class="mdi mdi-code-tags"></i></button>
                        <button class="icon-btn"><i class="mdi mdi-share-variant"></i></button>
                    </div>

                    <div class="action-buttons">
                        <button class="btn-primary" @click="scrollToSection('projects')">VIEW WORK</button>
                        <button class="btn-secondary">DOWNLOAD RESUME</button>
                    </div>
                </div>

                <div class="hero-image-container">
                    <div class="image-overlay">
                        <img src="/src/assets/img-profile.png" alt="JM Tanador" class="profile-img" />
                        <div class="status-tag">> status: available_for_hire</div>
                    </div>
                </div>
            </section>

            <!-- ABOUT SECTION -->
            <section id="about" class="about-section">
                 <div class="about-container">
                    <div class="about-image-wrapper">
                        <img src="/src/assets/img-fullbody.png" alt="JM Tanador" class="about-full-img" />
                    </div>
                    <div class="about-text-content">
                        <h2 class="section-title">ABOUT ME</h2>
                        <p class="about-description">
                            I began my programming journey in 2023, building foundational web projects using HTML, 
                            CSS, and JavaScript. My professional career took off in 2025 when I joined a private firm 
                            as a Fullstack Web Developer, where I specialized in Vue.js and Laravel. Over the following 
                            years, I transitioned into collaborative team environments, mastering version control with 
                            GitLab and deepening my expertise in database management.
                        </p>
                        <p class="about-description">
                            With over two years of professional experience in full-stack development, I remain committed 
                            to evolving my tech stack and delivering high-quality, scalable web applications.
                        </p>
                        <div class="tech-stack">
                            <span class="tech-stack-title">TECH STACK</span>
                            <div class="tech-grid">
                                <div class="tech-item" v-for="(item, index) in techStack" :key="index">
                                    <i class="mdi" :class="item.icon" :style="{ color: item.color }"></i>
                                    <span class="label">{{ item.title }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- PROJECTS SECTION (Temporary View) -->
            <section id="projects" class="projects-section">
                <h2 class="section-title">PROJECTS</h2>
                <div class="project-grid">
                    <div class="project-card" v-for="i in 3" :key="i">
                        <div class="project-img-placeholder">Project Image {{i}}</div>
                        <h3>Test {{i}}</h3>
                        <p>Test.</p>
                    </div>
                </div>
            </section>

            <!-- CONTACT SECTION (Temporary View) -->
            <section id="contact" class="contact-section">
                <h2 class="section-title">GET IN TOUCH</h2>
                <div class="contact-container">
                    <p>Have a project in mind? Let's build something amazing together.</p>
                    <a @click="talkDia = true" style="cursor:pointer" class="email-link">jmtanador@gmail.com</a>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="copyright">
                JM Tanador © 2026
            </div>
            <div class="footer-links">
                <a target="blank" href="https://github.com/jm-tanador">GitHub</a>
                <a target="blank" href="https://www.linkedin.com/in/jmtanador/">LinkedIn</a>
                <a target="blank" href="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg">X</a>
            </div>
        </footer>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'; 
import Lenis from '@studio-freight/lenis';

export default {
    name: 'PortfolioHome',
    data() {
        return {
            activeSection: 'home',
            isScrolled: false,
            titles: ["Hello, World!", "I'm JM Tanador", "I Develop.", "I Design.", "I Deploy.", "I Create.", "git commit -m 'Success'"],
            displayedText: "",
            titleIndex: 0,
            charIndex: 0,
            isDeleting: false,
            typeSpeed: 150,
            techStack: [
                { title: 'Javascript', icon: 'mdi-language-javascript', color: '#F7DF1E' },
                { title: 'PHP', icon: 'mdi-language-php', color: '#777BB4' },
                { title: 'Vue.js', icon: 'mdi-vuejs', color: '#4FC08D' },
                { title: 'Laravel', icon: 'mdi-laravel', color: '#FF2D20' },
                { title: 'MySQL', icon: 'mdi-database', color: '#4479A1' },
                { title: 'Git', icon: 'mdi-git', color: '#F05032' },
                { title: 'GitHub', icon: 'mdi-github', color: 'white' },
                { title: 'GitLab', icon: 'mdi-gitlab', color: '#F05032' },
                { title: 'Vercel', icon: 'mdi-triangle', color: 'white' },
                { title: 'Konva.js', icon: 'mdi-alpha-k-circle', color: '#1083cc' },
                { title: 'Soon', icon: 'mdi-lock', color: 'white' },
                { title: 'Soon', icon: 'mdi-lock', color: 'white' },
            ],
            talkDia: false,
            loading: false,
            isFormValid: false,
            contactForm: {},
            snackbar: {
                show: false,
                text: '',
                color: 'success'
            },
            lenis: null, 
        };
    },
    methods: {
        handleTyping() {
            const currentFullText = this.titles[this.titleIndex];
            if (this.isDeleting) {
                this.displayedText = currentFullText.substring(0, this.charIndex - 1);
                this.charIndex--;
                this.typeSpeed = 50;
            } else {
                this.displayedText = currentFullText.substring(0, this.charIndex + 1);
                this.charIndex++;
                this.typeSpeed = 150;
            }

            if (!this.isDeleting && this.charIndex === currentFullText.length) {
                this.isDeleting = true;
                this.typeSpeed = 2000;
            } else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.titleIndex = (this.titleIndex + 1) % this.titles.length;
                this.typeSpeed = 500;
            }
            setTimeout(this.handleTyping, this.typeSpeed);
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 50;

            const sections = ['home', 'about', 'projects', 'contact'];
            // We use a slightly larger offset (200) for detection to 
            // trigger the active state before the section hits the very top
            const scrollPosition = window.scrollY + 200; 

            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        this.activeSection = id;
                    }
                }
            });
        },
        async sendEmail() {
            const { valid } = await this.$refs.form.validate();
            if (!valid) return;

            this.loading = true;

            const SERVICE_ID = "service_lzvjzyf";
            const TEMPLATE_ID = "template_m7pzg2b";
            const PUBLIC_KEY = "QjlI05tKxFJeLdrtr";

            const templateParams = {
                from_name: this.contactForm.name,
                from_email: this.contactForm.email,
                message: this.contactForm.message,
            };

            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                .then(() => {
                    this.snackbar = {
                        show: true,
                        text: "Message sent successfully!",
                        color: "success"
                    };
                    this.talkDia = false;
                    this.resetForm();
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    this.snackbar = {
                        show: true,
                        text: "Failed to send message. Please try again.",
                        color: "error"
                    };
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        resetForm() {
            this.contactForm = {};
        },
        scrollToSection(id) {
            if (this.lenis) {
                // 'id' is the section ID, 'offset' is to avoid the navbar covering the title
                this.lenis.scrollTo(`#${id}`, {
                    offset: -80, 
                    duration: 1.5, // How long the scroll takes (in seconds)
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium feeling ease
                });
            }
        },
    },
    mounted() {
        this.handleTyping();
        window.addEventListener('scroll', this.handleScroll);

        // Initialize Lenis
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        // This loop is required for Lenis to work
        const raf = (time) => {
            this.lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=JetBrains+Mono&family=Playfair+Display:wght@700&display=swap');
/* @import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css'); */

html {
    scroll-padding-top: 90px; 
}

.portfolio-wrapper {
    min-height: 100vh;
    background-color: #010101;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    
    background-image: 
        linear-gradient(to right, #1a1a1a 1px, transparent 1px),
        linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
    background-size: 50px 50px;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem; 
    z-index: 1000;
    transition: all 0.4s ease; 
    background: transparent;
    border-bottom: 1px solid transparent;
    box-sizing: border-box;
}

/* Navbar Scrolled State */
.navbar-scrolled {
    padding: 1rem 4rem;
    background: rgba(1, 1, 1, 0.7);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #1a1a1a;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: bold;
}

.wip {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: bold;
}

.blink-warning {
    color: red;
    font-weight: bold;
    animation: pulse-red 1.5s infinite;
}

@keyframes pulse-red {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
    100% {
        opacity: 1;
    }
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
}

.nav-links a {
    text-decoration: none;
    color: #888;
    transition: color 0.3s;
}

.nav-links a.active {
    color: #fff !important;
    text-decoration: underline !important;
    text-underline-offset: 8px;
}

body {
    padding-top: 80px; 
}

.nav-links li {
    cursor: pointer;
    color: #888;
    transition: color 0.3s;
}

.nav-links li.active, .nav-links li:hover {
    color: #fff;
    text-underline-offset: 4px;
}

.cta-talk {
    background: white;
    color: black;
    border: none;
    padding: 0.6rem 1.2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
    cursor: pointer;
}

/* Home Section */
.hero {
    min-height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px; 
}

.hero-content {
    max-width: 800px; 
    width: 100%;
}

.greeting {
    font-family: 'JetBrains Mono', monospace;
    color: #888;
    letter-spacing: 2px;
    font-size: 0.8rem;
}

.main-title {
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem;
    margin: 1rem 0;
    line-height: 1.1;
    width: 100%;
    display: block;       
}

.cursor {
    font-weight: 200;
    color: #555;
    margin-left: 5px;
}

.description {
    color: #aaa;
    line-height: 1.6;
    margin-bottom: 2rem;
}

/* Icons */
.social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2.5rem;
}

.icon-btn {
    background: transparent;
    border: 1px solid #333;
    width: 45px;
    height: 45px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.3s;
}

.icon-btn:hover {
    border-color: #666;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 1rem;
}

.btn-primary {
    background: white;
    color: black;
    border: none;
    padding: 1rem 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
    cursor: pointer;
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 1px solid #333;
    padding: 1rem 2rem;
    font-family: 'JetBrains Mono', monospace;
    cursor: pointer;
}

/*TYPING EFFECT*/
.main-title {
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem;
    margin: 1rem 0;
    line-height: 1.1;
    min-height: 1.2em;
}

.cursor {
    font-weight: 200;
    color: #ffffff;
    margin-left: 5px;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/* Image Container */
.hero-image-container {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.image-overlay {
    position: relative;
    width: 450px;
    height: 450px;
    background: transparent; 
    display: flex;
    align-items: flex-end;
}

.profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    
    -webkit-mask-image: radial-gradient(
        ellipse at center, 
        black 15%, 
        transparent 75%
    );
    mask-image: radial-gradient(
        ellipse at center, 
        black 45%, 
        transparent 75%
    );
}

.status-tag {
    position: absolute;
    bottom: 20px;
    right: 0;
    background: rgba(20, 20, 20, 0.8); 
    backdrop-filter: blur(5px); 
    padding: 10px 20px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    border-left: 2px solid #555;
    z-index: 10;
}

.contact-dialog-card {
    background-color: #111 !important;
    border: 1px solid #333;
    color: white !important;
    font-family: 'JetBrains Mono', monospace;
}

.dialog-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    letter-spacing: 1px;
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-group label {
    display: block;
    font-size: 0.7rem;
    color: #888;
    margin-bottom: 8px;
    letter-spacing: 2px;
}

:deep(.v-field) {
    border-radius: 0 !important;
    background: #050505 !important;
}

:deep(.v-field__outline) {
    --v-field-border-opacity: 1;
    color: #333 !important;
}

:deep(.v-field--focused .v-field__outline) {
    color: #fff !important;
}

.submit-btn {
    background-color: white !important;
    color: black !important;
    font-weight: bold;
    border-radius: 0;
    letter-spacing: 2px;
}

/* About Section Layout */
.about-section {
    /* padding: 0rem 0; */
    border-top: 1px solid #1a1a1a;
}

.about-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4rem;
}

.about-text-content {
    flex: 1.2;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    margin-bottom: 2rem;
    letter-spacing: -1px;
}

.about-subtitle {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #fff;
}

.about-description {
    color: #aaa;
    line-height: 1.8;
    font-size: 14px;
    max-width: 600px;
    margin-bottom: 1.5rem;
}

/* Tech Stack Grid */
.tech-stack {
    margin-top: 3rem;
}

.tech-stack-title {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(4, 110px); 
    gap: 15px;
}

.tech-grid span{
    width: 150px;
    margin-top: 20px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
}

.tech-item i.mdi {
    font-size: 2.5rem;
    margin-bottom: 10px;
    transition: transform 0.3s ease;
}


.tech-item:hover i.mdi {
    transform: scale(1.2);
}

.label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: #555;
    text-transform: uppercase;
}

.tech-item:hover i.mdi {
    color: inherit !important; 
}

.tech-icon-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: bold;
    color: #eee;
    margin-bottom: 8px;
}



/* About Image */
.about-image-wrapper {
    flex: 1;
    height: 600px;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.about-full-img {
    width: 100%; 
    height: 100%;
    object-fit: contain;
    
    -webkit-mask-image: radial-gradient(
        circle at center, 
        black 70%, 
        transparent 80%
    );
    mask-image: radial-gradient(
        circle at center, 
        black 70%, 
        transparent 80%
    );
}

/* PROJECTS SECTION */
.projects-section {
    padding: 8rem 0;
    border-top: 1px solid #1a1a1a;
    min-height: 100vh;
}
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}
.project-card {
    border: 1px solid #1a1a1a;
    padding: 1.5rem;
    background: #050505;
}
.project-img-placeholder {
    width: 100%;
    height: 200px;
    background: #111;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
}

/* CONTACT SECTION */
.contact-section {
    padding: 8rem 0;
    text-align: center;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #1a1a1a;
}
.email-link {
    font-size: 3rem;
    font-family: 'Playfair Display', serif;
    color: #fff;
    text-decoration: none;
    margin-top: 2rem;
    display: inline-block;
}

/* Footer */
.footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #666;
    border-top: 1px solid #1a1a1a;
}

.footer-links {
    display: flex;
    gap: 2rem;
}

.footer-links a {
    color: #ccc;
    text-decoration: none;
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
    .portfolio-wrapper {
        padding: 0 1.5rem;
        overflow-x: hidden; 
    }

    .navbar {
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem 0;
    }
    
    .nav-links {
        gap: 1rem;
        font-size: 0.8rem;
        padding: 0;
    }

    .logo {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: 150px;
    }

    .wip {
        font-family: 'Playfair Display', serif;
        font-size: 15px;
        font-weight: bold;
        position:absolute;
        top: 60px;
    }

    .cta-talk {
        position: absolute;
        right: 50px;
        bottom: 70px;
        background: white;
        color: black;
        border: none;
        padding: 0.2rem 1rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: bold;
        cursor: pointer;
        scale: 1;
    }

    .hero {
        flex-direction: column;
        text-align: center;
        padding: 150px 0;
        gap: 2rem;
    }

    .hero-content {
        order: 2;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-title {
        font-size: 2.2rem !important; 
        line-height: 1.2;
        white-space: normal; 
        width: 100%;
    }

    .hero-image-container {
        order: 1;
        width: 100%;
        justify-content: center;
    }

    .image-overlay {
        width: 100% !important; 
        max-width: 300px;        
        height: auto;
        aspect-ratio: 1 / 1;    
    }

    .action-buttons {
        flex-direction: column;
        width: 100%;
    }
    
    .btn-primary, .btn-secondary {
        width: 100%; 
    }

    .footer {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        padding: 2rem 0;
    }

    .footer-links {
        justify-content: center;
    }

    .status-tag {
        bottom: -5px !important; 
        right: 30px !important;  
        padding: 6px 12px !important;
        font-size: 0.7rem !important;
        z-index: 20;
    }

    .image-overlay {
        width: 280px !important; 
        height: 280px !important;
        margin: 0 auto; 
    }

    .about-container {
        flex-direction: column;
    }

    .about-image-wrapper {
        order: -1; 
        height: 400px;
        width: 100%;
    }

    .section-title {
        font-size: 2.5rem;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }
    .tech-item {
        width: 100%;
        height: 100px;
    }

    /* CONTACT MEDIA */
    .email-link {
        font-size: 1.5rem;
        font-family: 'Playfair Display', serif;
        color: #fff;
        text-decoration: none;
        margin-top: 2rem;
        display: inline-block;
    }

    .dialog-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }
}
</style>
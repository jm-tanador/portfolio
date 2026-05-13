<template>
    <div class="portfolio-wrapper">
        <!-- Navigation -->
        <nav class="navbar">
            <div class="logo">Developer X.</div>
            <ul class="nav-links">
                <li class="active">Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <button class="cta-talk">LET'S TALK</button>
        </nav>

        <!-- Main Content -->
        <main>
            <!-- MAIN DASHBOARD -->
            <section  class="hero">
                <div class="hero-content">
                    <span class="greeting">HI, THERE!</span>
                    <h1 class="main-title">
                        {{ displayedText }}<span class="cursor">|</span>
                    </h1>
                    <!-- <p class="description">
                        Passionate full‑stack web developer skilled in both front‑end and 
                        back‑end systems. Dedicated to building clean, efficient, and scalable 
                        user experiences.
                    </p> -->

                    <p class="description">
                        Work > Sleep.
                    </p>

                    <!-- Icon Buttons -->
                    <div class="social-icons">
                        <button class="icon-btn"><span>🔗</span></button>
                        <button class="icon-btn"><span>&lt;/&gt;</span></button>
                        <button class="icon-btn"><span>share</span></button>
                        <button class="icon-btn"><span>📸</span></button>
                    </div>

                    <!-- Action Buttons -->
                    <div class="action-buttons">
                        <button class="btn-primary">VIEW WORK</button>
                        <button class="btn-secondary">DOWNLOAD RESUME</button>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="hero-image-container">
                    <div class="image-overlay">
                    <!-- Ensure you are using the new .png file -->
                    <img src="/src/assets/img-profile.png" alt="JM Tanador" class="profile-img" />
                    <div class="status-tag">
                        > status: available_for_hire
                    </div>
                    </div>
                </div>
            </section>

            <!-- ABOUT SECTION -->
            <section id="about" class="about-section">
                <div class="about-container">
                    <!-- Left Side: Full Body Image -->
                    <div class="about-image-wrapper">
                        <img src="/src/assets/img-fullbody.png" alt="JM Tanador Full Body" class="about-full-img" />
                    </div>
                    <!-- Right Side: Content -->
                    <div class="about-text-content">
                        <h2 class="section-title">ABOUT ME</h2>
                        <span class="about-subtitle">HI, I'M A PASSIONATE DEVELOPER.</span>
                        <p class="about-description">
                            With two years of professional experience as a Full Stack Web Developer in the private sector, 
                            I focus on creating scalable, data‑driven applications that deliver both performance and usability. 
                            I bring a strong foundation in core web development principles and apply them to build responsive, 
                            user‑friendly solutions backed by efficient, secure systems.

                            Beyond development, I manage the full lifecycle of a project from initial build to deployment and 
                            long‑term maintenance. I ensure systems are properly configured, tested, and deployed into production 
                            environments, while continuously monitoring performance and reliability.
                        </p>

                        <div class="tech-stack">
                            <span class="tech-stack-title">TECH STACK</span>
                            <div class="tech-grid">
                                <div class="tech-item" v-for="(item, index) in techStack" :key="index">
                                    <!-- Replace text with MDI icon -->
                                    <i class="mdi" :class="item.icon" :style="{ color: item.color }"></i>
                                    <span class="label">{{ item.title }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            <!-- PROJECTS SECTION -->
            <section>

            </section>

            <!-- CONTACT SECTION -->
            <section>

            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="copyright">
                Copyright © 2026 — Made by JM Tanador
            </div>
            <div class="footer-links">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'PortfolioHome',
    data() {
        return {
            titles: ["I'm JM Tanador", "I'm a Fullstack Web Developer", "I'm a Creator"],
            displayedText: "",
            titleIndex: 0,
            charIndex: 0,
            isDeleting: false,
            typeSpeed: 150,
            techStack: [
                { title: 'HTML', icon: 'mdi-language-html5', color: '#E34F26' },
                { title: 'Javascript', icon: 'mdi-language-javascript', color: '#F7DF1E' },
                { title: 'CSS', icon: 'mdi-language-css3', color: '#1572B6' },
                { title: 'PHP', icon: 'mdi-language-php', color: '#777BB4' },
                { title: 'Vue.js', icon: 'mdi-vuejs', color: '#4FC08D' },
                { title: 'Laravel', icon: 'mdi-laravel', color: '#FF2D20' }, // MDI has Laravel!
                { title: 'MySQL', icon: 'mdi-database', color: '#4479A1' },
                { title: 'Git', icon: 'mdi-git', color: '#F05032' },
            ]
        };
    },
    methods: {
        handleTyping() {
            const currentFullText = this.titles[this.titleIndex];
            
            if (this.isDeleting) {
                // Remove a character
                this.displayedText = currentFullText.substring(0, this.charIndex - 1);
                this.charIndex--;
                this.typeSpeed = 50; // Faster when deleting
            } 
            else {
                // Add a character
                this.displayedText = currentFullText.substring(0, this.charIndex + 1);
                this.charIndex++;
                this.typeSpeed = 150;
            }

            // Logic for switching states
            if (!this.isDeleting && this.charIndex === currentFullText.length) {
                // Finished typing, wait then start deleting
                this.isDeleting = true;
                this.typeSpeed = 2000; // Pause at the end of the word
            } 
            else if (this.isDeleting && this.charIndex === 0) {
                // Finished deleting, move to next title
                this.isDeleting = false;
                this.titleIndex = (this.titleIndex + 1) % this.titles.length;
                this.typeSpeed = 500;
            }

            setTimeout(this.handleTyping, this.typeSpeed);
        }
    },
    mounted() {
        this.handleTyping();
    }
};
</script>

<style scoped>
/* Importing Google Fonts to match the look */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=JetBrains+Mono&family=Playfair+Display:wght@700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css');

.portfolio-wrapper {
    min-height: 100vh;
    background-color: #010101;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    
    /* Grid Background Effect */
    background-image: 
        linear-gradient(to right, #1a1a1a 1px, transparent 1px),
        linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
    background-size: 50px 50px;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    border-bottom: 1px solid #1a1a1a;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
}

.nav-links li {
    cursor: pointer;
    color: #888;
    transition: color 0.3s;
}

.nav-links li.active, .nav-links li:hover {
    color: #fff;
    text-decoration: underline;
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

/* Hero Section */
.hero {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 4rem 0;
}

.hero-content {
    max-width: 800px; /* Increased from 500px */
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
    
    /* REMOVE THIS: width: 700px; */
    
    /* ADD THESE: */
    width: 100%;          /* Take full width of the parent */
    /* text-align: center;   Center the text inside the box */
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
    min-height: 1.2em; /* Prevents layout jump before text starts typing */
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
    /* REMOVE background: #111; so the grid shows through */
    background: transparent; 
    display: flex;
    align-items: flex-end; /* Keeps you at the bottom of the container */
}

.profile-img {
    width: 100%;
    height: 100%;
    /* Change to cover to ensure the image edges are pushed 
        beyond the visible fade area */
    object-fit: cover; 
    
    /* filter: grayscale(100%) contrast(95%); */

    /* NEW MASK: Fades all edges (Top, Bottom, Left, Right) */
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

/* Ensure the status tag still looks good */
.status-tag {
  position: absolute;
  bottom: 20px;
  right: 0;
  background: rgba(20, 20, 20, 0.8); /* Slightly darker for readability */
  backdrop-filter: blur(5px); /* Makes the grid look blurry behind the tag */
  padding: 10px 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  border-left: 2px solid #555;
  z-index: 10;
}

/* About Section Layout */
.about-section {
    padding: 8rem 0;
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
    font-size: 1 rem;
    max-width: 600px;
    margin-bottom: 3rem;
}

/* Tech Stack Grid */
.tech-stack {
    margin-top: 3rem;
}

.tech-stack-title {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: #666;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
}

.tech-grid {
    display: grid;
    /* This creates 4 columns. On 7 items, the bottom row will have 3. */
    grid-template-columns: repeat(4, 110px); 
    gap: 15px;
}

/* Target the icon specifically */
.tech-item i.mdi {
    font-size: 2.5rem; /* Large and clear */
    margin-bottom: 10px;
    transition: transform 0.3s ease;
}

/* Add a hover effect to the icon */
.tech-item:hover i.mdi {
    transform: scale(1.2); /* Slight pop on hover */
}

/* Keep your existing label style */
.label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: #555;
    text-transform: uppercase;
}

/* Optional: If you want the icon to be gray by default and colored on hover */
.tech-item i.mdi {
    color: #444 !important; /* Overrides the inline style color */
}

.tech-item:hover i.mdi {
    color: inherit !important; /* Returns to the color defined in your data */
}

.tech-icon-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: bold;
    color: #eee;
    margin-bottom: 8px;
}



/* About Image (Full Body Zoom Out) */
.about-image-wrapper {
    flex: 1;
    height: 800px; /* Taller container for full body look */
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.about-full-img {
    width: 100%; /* Changed from 130% to avoid edge clipping */
    height: 100%;
    object-fit: contain;
    
    /* We increase the transition area from 5% to 50% for a "smoke" effect */
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
  /* 1. Reduce the huge side padding so content has room to breathe */
  .portfolio-wrapper {
    padding: 0 1.5rem;
    overflow-x: hidden; /* Safety net to prevent horizontal scroll */
  }

  /* 2. Fix the Navbar squashing */
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

  /* 3. Stack the content and image vertically */
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem 0;
    gap: 2rem;
  }

  .hero-content {
    order: 2; /* Text goes below the image */
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* 4. Fix Title wrapping and size */
  .main-title {
    font-size: 2.2rem !important; /* Smaller for mobile */
    line-height: 1.2;
    white-space: normal; /* Allow it to wrap naturally */
    width: 100%;
  }

  /* 5. CRITICAL FIX: The Image Width */
  .hero-image-container {
    order: 1;
    width: 100%;
    justify-content: center;
  }

  .image-overlay {
    width: 100% !important; /* Forces it to fit the phone screen */
    max-width: 300px;        /* Limits size so it doesn't get huge */
    height: auto;
    aspect-ratio: 1 / 1;    /* Keeps it square */
  }

  /* .profile-img {
    width: 100%;
    height: auto;
  } */

  /* 6. Buttons and Icons */
  .action-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%; /* Full width buttons are easier to tap on mobile */
  }

  /* 7. Footer Fix */
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
    /* 1. Reduce the distance from the edges so it stays in the corner */
    bottom: -5px !important; 
    right: 30px !important;  /* Slight negative value makes it pop like the original design */
    
    /* 2. Shrink the tag itself so it doesn't cover too much of the image */
    padding: 6px 12px !important;
    font-size: 0.7rem !important;
    
    /* 3. Ensure it stays on top of the image */
    z-index: 20;
  }

  .image-overlay {
    /* Ensure the container is exactly the right size for the image */
    width: 280px !important; 
    height: 280px !important;
    margin: 0 auto; /* Keep it centered */
  }

  .about-container {
        flex-direction: column;
    }

    .about-image-wrapper {
        order: -1; /* Image first on mobile */
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
}
</style>
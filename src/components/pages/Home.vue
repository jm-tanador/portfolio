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
        <main class="hero">
            <div class="hero-content">
                <span class="greeting">HI, THERE!</span>
                <h1 class="main-title">
                    {{ displayedText }}<span class="cursor">|</span>
                </h1>
                <p class="description">
                    Passionate full‑stack web developer skilled in both front‑end and 
                    back‑end systems. Dedicated to building clean, efficient, and scalable 
                    user experiences.
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

.portfolio-wrapper {
  min-height: 100vh;
  background-color: #0a0a0a;
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
  object-fit: contain;
  /* This filter keeps the cool black and white look */
  filter: grayscale(100%) contrast(110%);
  
  /* OPTIONAL: Add a subtle glow/shadow so you don't blend into the pure black */
  /* drop-shadow: 0 0 20px rgba(255, 255, 255, 0.05); */
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
  .hero {
    flex-direction: column;
    text-align: center; /* This helps center general text */
    align-items: center; /* This centers the flex children */
  }

  .hero-content {
    order: 2;
    max-width: 100%;    /* Allow it to use full screen width */
    display: flex;
    flex-direction: column;
    align-items: center; /* Forces buttons and text to center */
    text-align: center;
  }
  
  .main-title {
    font-size: 3rem;    /* Shrink font size for mobile so it doesn't wrap weirdly */
  }
}
</style>
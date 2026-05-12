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

  .profile-img {
    width: 100%;
    height: auto;
  }

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
    right: -5px !important;  /* Slight negative value makes it pop like the original design */
    
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
}
</style>
<template>
  <div class="homepage">
    <section class="hero-section">
      <div class="hero-container">
        <!-- Left Content -->
        <div class="hero-left">
          <h1 class="hero-title">
            Fueled<br>
            By<br>
            Curiosity.
          </h1>
          <p class="hero-description">
            Hi, I am Shaaf Yousaf - a senior in Computer Science (Software Engineering Stream) at the University Of Toronto.
          </p>
          <div class="hero-buttons">
            <a 
              href="https://drive.google.com/file/d/1_H4GS3Ufw6UOnEJhch0OapYTXMUZFIor/view" 
              class="btn btn-cv"
              target="_blank" 
              rel="noopener noreferrer"
            >
              CV
            </a>
            <a 
              href="https://www.linkedin.com/in/shaaf-yousaf/" 
              class="btn btn-linkedin"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>

        <!-- Right Content -->
        <div class="hero-right">
          <div class="hero-image-container">
            <div class="hero-image-placeholder">
              <!-- Placeholder for image/video -->
            </div>
          </div>
          <div class="hero-badges">
            <span class="badge">Junior Software Developer @ UTS (25-26)</span>
            <span class="badge">Building IDRAK</span>
            <span class="badge">2 Hackathons Won</span>
            <span class="badge">Latest Published Software w/ +300 Install</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Shaaf Yousaf - Portfolio',
  description: 'Full-Stack Developer, Digital Artist, and Filmmaker'
})
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  background-color: #000;
}

.hero-section {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-container {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Left Content */
.hero-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin: 0;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid #fff;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn:hover {
  background-color: #000;
  color: #fff;
  transform: translateY(-2px);
}

.btn-cv {
  border-color: #fff;
  background-color: #fff;
  color: #000;
}

.btn-linkedin {
  border-color: #fff;
  background-color: #000;
  color: #fff;
}

.btn-linkedin:hover {
  background-color: #fff;
  color: #000;
}

/* Right Content */
.hero-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-image-container {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
}

.hero-image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #808080;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.badge {
  padding: 0.75rem 1.5rem;
  background-color: rgba(128, 128, 128, 0.5);
  color: #fff;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }
  
  .hero-description {
    max-width: 100%;
  }
  
  .hero-badges {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
  
  .badge {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }
}
</style>

<script setup lang="ts">
import { Motion } from 'motion-v'

const backgroundImage = '/images/_DSC4379.JPG'
const overlayImage = '/resources/blackSideOverlayGradient.png'
</script>

<template>
  <div class="hero-section">
    <!-- Background Image with Overlay -->
    <div class="hero-background">
      <img 
        :src="backgroundImage" 
        alt="Background" 
        class="background-image"
      />
      <img 
        :src="overlayImage" 
        alt="Overlay" 
        class="gradient-overlay"
      />
    </div>

    <!-- Hero Content -->
    <div class="hero-content">
      <div class="hero-text-container">
        <Motion
          tag="h1"
          class="hero-title"
          :initial="{ opacity: 0, filter: 'blur(10px)' }"
          :animate="{ opacity: 1, filter: 'blur(0px)' }"
          :transition="{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }"
        >
          <span class="title-line">Fueled</span>
          <span class="title-line">By</span>
          <span class="title-line">Curiosity.</span>
        </Motion>

        <Motion
          tag="p"
          class="hero-description"
          :initial="{ opacity: 0, filter: 'blur(8px)' }"
          :animate="{ opacity: 1, filter: 'blur(0px)' }"
          :transition="{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }"
        >
          Hi, I am Shaaf Yousaf - a senior in Computer Science 
          (Software Engineering Stream) at the University Of Toronto.
        </Motion>
<Motion
        class="hero-tags"
        :initial="{ opacity: 0, filter: 'blur(8px)' }"
        :animate="{ opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }"
      >
        <div class="tag">Junior Software Developer @ UTS (2025-2026)</div>
        <div class="tag">2 Hackathons Winner</div>
        <div class="tag">Building IDRAK</div>
        <div class="tag">Latest Published Software w/ +300 Install</div>
      </Motion>
        <Motion
          class="hero-buttons"
          :initial="{ opacity: 0, filter: 'blur(6px)' }"
          :animate="{ opacity: 1, filter: 'blur(0px)' }"
          :transition="{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }"
        >
          <a href="#cv" class="btn btn-white">CV</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="btn btn-white">Linkedin</a>
        </Motion>
      </div>

      <!-- Bottom Tags -->
      
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-text-container {
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 10vh; /* Visual balance */
}

.hero-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  color: var(--color-white);
  line-height: 0.9;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.title-line {
  font-size: 5rem; 
  display: block;
}

.hero-description {
  font-family: 'Nexa', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--color-white);
  margin-bottom: 1rem;
  max-width: 800px;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  backdrop-filter: blur(10px);
}

.btn-white {
    background-color: #ffffff2e;
    color: white;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-tags {
  display: flex;
  gap: 1rem;
  margin-top: auto; /* Push to bottom */
  margin-bottom: 3rem;
  flex-wrap: wrap;
  max-width: 700px;
}

.tag {
    background-color: #ffffff29;
    color: #ffffff;
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    font-family: 'Nexa', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    white-space: nowrap;
    height: 1.8rem;
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);
}

@media (max-width: 1024px) {
  .hero-content {
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .background-image {
    object-position: right center;
  }

  .gradient-overlay {
    transform: rotate(90deg);
    width: 100%;
    height: 100%;
  }

  .hero-title {
    line-height: 1;
  }
  
  .title-line {
    font-size: clamp(3rem, 12vw, 5rem);
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .btn {
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;
  }
  
  .hero-tags {
    justify-content: center; /* Center tags on mobile if needed */
  }
}
</style>

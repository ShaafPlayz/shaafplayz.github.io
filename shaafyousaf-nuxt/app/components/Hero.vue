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
          <a href="#cv" class="btn btn-white">
            <Icon name="heroicons:document-text" class="btn-icon" />
            CV
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="btn btn-white">
            <Icon name="mdi:linkedin" class="btn-icon" />
            LinkedIn
          </a>
          <a href="mailto:shaaf.yousaf@mail.utoronto.ca" class="btn btn-white">
            <Icon name="heroicons:envelope" class="btn-icon" />
            Email
          </a>
        </Motion>
      </div>

      <!-- Scroll Down Arrow -->
      <Motion
        class="scroll-indicator"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ 
          opacity: [0, 1, 1, 0],
          y: [0, 10, 10, 20]
        }"
        :transition="{ 
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut'
        }"
      >
        <Icon name="heroicons:chevron-down" class="arrow-icon" />
      </Motion>

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
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 10px;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  backdrop-filter: blur(10px);
  white-space: nowrap;
  transform: none !important;
  border: none !important;
  box-shadow: none !important;
  overflow: visible !important;
}

.btn::before,
.btn::after {
  display: none !important;
  content: none !important;
}

.btn-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.btn-white {
    background-color: #ffffff2e;
    color: white;
    border: none !important;
    box-shadow: none !important;
}

.btn-white::before,
.btn-white::after {
  display: none !important;
  content: none !important;
}

.btn-white:hover {
  background-color: #ffffff4a;
  border: none !important;
  box-shadow: none !important;
  transform: none !important;
}

.btn-white:hover::before,
.btn-white:hover::after {
  display: none !important;
  content: none !important;
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

.scroll-indicator {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.arrow-icon {
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 1024px) {
  .hero-content {
    padding: 0 2rem;
  }

  .hero-title {
    gap: 1rem;
  }

  .title-line {
    font-size: clamp(3.5rem, 10vw, 5rem);
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 100dvh; /* Use dynamic viewport height for mobile */
  }

  .background-image {
    object-position: 60% 0;
  }

  .gradient-overlay {
    transform: rotate(180deg);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-content {
    padding: 0 1.5rem;
    justify-content: center;
    padding-top: 5rem;
  }

  .hero-text-container {
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 2rem;
  }

  .hero-title {
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1rem;
    line-height: 0.95;
  }
  
  .title-line {
    font-size: clamp(2.5rem, 15vw, 4rem);
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  .hero-buttons {
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .btn {
    font-size: 0.9rem;
    padding: 0.6rem 1.25rem;
  }

  .btn-icon {
    width: 16px;
    height: 16px;
  }
  
  .hero-tags {
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 0.75rem;
    max-width: 100%;
  }

  .tag {
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
    height: auto;
    min-height: 1.6rem;
  }

  .scroll-indicator {
    bottom: 4rem;
  }

  .arrow-icon {
    width: 28px;
    height: 28px;
  }
}
</style>

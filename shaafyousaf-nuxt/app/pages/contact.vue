<script setup lang="ts">
import { Motion } from 'motion-v'

const contactMethods = [
  {
    type: 'Email',
    value: 'shaaf.yousaf@mail.utoronto.ca',
    link: 'mailto:shaaf.yousaf@mail.utoronto.ca',
    icon: 'heroicons:envelope'
  },
  {
    type: 'GitHub',
    value: 'github.com/shaafyousaf',
    link: 'https://github.com/shaafyousaf',
    icon: 'mdi:github'
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/shaafyousaf',
    link: 'https://linkedin.com/in/shaafyousaf',
    icon: 'mdi:linkedin'
  },
  {
    type: 'Download SWE CV',
    value: '',
    link: 'https://drive.google.com/file/d/1_H4GS3Ufw6UOnEJhch0OapYTXMUZFIor/view',
    icon: 'heroicons:arrow-down-on-square'
  }  ,
  {
    type: 'Download Hardware CV',
    value: '',
    link: 'https://drive.google.com/file/d/1k6myJd4Gz-WPVKs8sykdEvoOffLwWt8G/view?usp=sharing',
    icon: 'heroicons:arrow-down-on-square'
  }
]

const socialLinks = [
  {
    name: 'Instagram',
    username: '@shaafyousaf',
    link: 'https://www.instagram.com/shaafyousaf/',
    icon: 'mdi:instagram'
  },
  {
    name: 'YouTube',
    username: '@ShaafStudio',
    link: 'https://www.youtube.com/@ShaafStudio',
    icon: 'mdi:youtube'
  },
  {
    name: 'DevPost',
    username: 'ShaafDev',
    link: 'https://devpost.com/ShaafDev',
    icon: 'simple-icons:devpost'
  }
]
</script>

<template>
  <div class="contact-page">
    <!-- Grid Background -->
    <div class="grid-background"></div>
    <div class="gradient-overlay"></div>

    <Motion
      :initial="{ opacity: 0, filter: 'blur(10px)', y: 30 }"
      :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
      :transition="{ duration: 0.7, delay: 0.1 }"
      class="contact-container"
    >
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)' }"
        :animate="{ opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 0.6, delay: 0.2 }"
      >
        <h1 class="page-title">Let’s Work Together</h1>
        <p class="page-description">
          If you’re working on something interesting, hiring, or just want to talk tech — I’d love to hear from you.
        </p>
        <p class="hero-info">
          Based in Toronto, ON • Available for full-time Coop/Research opportunities starting May 2026
        </p>
      </Motion>

      <!-- Contact Methods Section -->
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 20 }"
        :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.6, delay: 0.3 }"
        class="contact-section"
      >
        <div class="contact-methods">
          <Motion
            v-for="(method, index) in contactMethods"
            :key="method.type"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.4, delay: 0.4 + index * 0.1 }"
            class="contact-item"
          >
            <a :href="method.link" target="_blank" rel="noopener noreferrer" class="contact-link">
              <Icon :name="method.icon" class="contact-icon" />
              <div class="contact-info">
                <span class="contact-type">{{ method.type }}</span>
                <span class="contact-value">{{ method.value }}</span>
              </div>
            </a>
          </Motion>
        </div>
      </Motion>

      <!-- Social Links Section -->
      <!-- <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 20 }"
        :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.6, delay: 0.5 }"
        class="social-section"
      >
        <h2 class="section-title">Social</h2>
        <div class="social-grid">
          <Motion
            v-for="(social, index) in socialLinks"
            :key="social.name"
            :initial="{ opacity: 0, scale: 0.95 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.4, delay: 0.6 + index * 0.08 }"
            class="social-item"
          >
            <a :href="social.link" target="_blank" rel="noopener noreferrer" class="social-link">
              <Icon :name="social.icon" class="social-icon" />
              <div class="social-info">
                <span class="social-name">{{ social.name }}</span>
                <span class="social-username">{{ social.username }}</span>
              </div>
            </a>
          </Motion>
        </div>
      </Motion> -->
    </Motion>
  </div>
</template>

<style scoped>
.contact-page {
  position: relative;
  width: 100%;
  background: var(--color-black);
  padding: 6rem 0 3rem;
  overflow: hidden;
}

/* Grid Background */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 
    100px 100px,
    100px 100px;
  z-index: 0;
  opacity: 0.5;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
}

.contact-container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  padding-top: 20px;
}

.page-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--color-white);
  margin-bottom: 0.5rem;
  text-align: left;
  letter-spacing: -1.5px;
  line-height: 1.2;
}

.page-description {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  max-width: 700px;
  line-height: 1.5;
  text-align: left;
}

.hero-info {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: #D4AF37;
  margin-bottom: 2.5rem;
  max-width: 700px;
  line-height: 1.5;
  text-align: left;
}

.contact-section {
  margin-bottom: 2.5rem;
}

.social-section {
  margin-bottom: 2rem;
}

.section-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  color: #D4AF37;
  margin-bottom: 1.5rem;
  text-align: left;
  width: 100%;
  letter-spacing: 0.05em;
  text-transform: unset;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.contact-item {
  width: 100%;
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 2.5rem 2rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  height: 100%;
  min-height: 180px;
}

.contact-link:hover {
  border-color: #D4AF37;
  background: rgba(212, 175, 55, 0.05);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.2);
}

.contact-icon {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.contact-link:hover .contact-icon {
  color: #D4AF37;
  transform: scale(1.1);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  width: 100%;
}

.contact-type {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.contact-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-white);
  transition: color 0.3s ease;
  word-break: break-word;
  line-height: 1.4;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
}

.social-item {
  width: 100%;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.social-link:hover {
  border-color: #D4AF37;
  background: rgba(212, 175, 55, 0.03);
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.35rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease;
  flex-shrink: 0;
}

.social-link:hover .social-icon {
  color: #D4AF37;
}

.social-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.social-name {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.95rem;
  color: var(--color-white);
}

.social-username {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive Design */
@media (max-width: 968px) {
  .contact-page {
    padding: 5rem 0 3rem;
  }

  .contact-container {
    padding: 0 2rem;
    padding-top: 90px;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .contact-section {
    margin-bottom: 2rem;
  }
  
  .contact-methods {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  
  .contact-link {
    padding: 2rem 1.5rem;
    min-height: 160px;
  }

  .social-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}

@media (max-width: 640px) {
  .contact-page {
    padding: 4rem 0 2.5rem;
  }

  .contact-container {
    padding: 0 1.5rem;
    padding-top: 80px;
  }

  .page-title {
    font-size: 1.75rem;
  }

  .page-description {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-link {
    padding: 2rem 1.25rem;
    min-height: 150px;
    gap: 1rem;
  }
  
  .contact-icon {
    font-size: 2rem;
  }

  .contact-link:hover {
    padding-left: 1.25rem;
  }

  .contact-value {
    font-size: 0.9rem;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }

  .additional-info {
    margin-top: 2rem;
  }

  .info-text {
    font-size: 0.85rem;
  }
}
</style>

<script setup lang="ts">
import { Motion } from 'motion-v'

// Emit for click events
const emit = defineEmits<{
  (e: 'click', job: any): void
}>()

// Featured internship data
const featuredJob = {
  position: 'Junior Software Developer',
  company: 'University of Toronto Schools',
  location: 'Toronto, ON',
  date: 'Sep 2025 - Apr 2026',
  current: true,
  image: '/images/open-house-blog-thumbnail.jpg',
  type: 'SWE Internships',
  duration: '8 months',
  employmentType: 'Full-Time',
  description: 'Leading full-stack development initiatives across multiple projects. Architecting scalable web applications using modern frameworks and implementing CI/CD pipelines. Collaborating with cross-functional teams to deliver high-quality software solutions that enhance user experience and drive operational efficiency.',
  responsibilities: [
    'Architected and deployed full-stack web applications using Vue.js, Nuxt, and Node.js, serving 2000+ students and faculty',
    'Implemented automated CI/CD pipelines with GitHub Actions, reducing deployment time by 60%',
    'Collaborated with design team to create responsive, accessible interfaces following WCAG 2.1 standards',
    'Optimized database queries and API endpoints, improving response times by 40%',
    'Mentored 3 junior developers on best practices and modern development workflows'
  ],
  technologies: ['.NET', 'C#', 'Blazor Framework', 'GraphQL (Hot Chocolate)', 'SQL Server', 'SSMS (SQL Server Management Studio)', 'LinQPad', 'Azure DevOps', 'REST APIs'],
  achievements: [],
  link: 'https://github.com/ShaafPlayz'
}

const overlayImage = '/resources/blackSideOverlayGradient.png'

const handleClick = () => {
  emit('click', featuredJob)
}
</script>

<template>
  <Motion
    :initial="{ opacity: 0, filter: 'blur(8px)', scale: 0.98 }"
    :animate="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
    :transition="{ duration: 0.5, delay: 0.1 }"
    class="featured-internship"
    @click="handleClick"
  >
    <!-- Background Image -->
    <div class="featured-background">
      <img 
        :src="featuredJob.image" 
        alt="Background" 
        class="background-image"
      />
      <img 
        :src="overlayImage" 
        alt="Overlay" 
        class="gradient-overlay"
      />
    </div>

    <!-- Content -->
    <div class="featured-content">
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 10 }"
        :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
      >
        <h2 class="featured-position">{{ featuredJob.position }}</h2>
      </Motion>
      
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 10 }"
        :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.5, delay: 0.25 }"
      >
        <p class="featured-company">{{ featuredJob.company }}</p>
      </Motion>

      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 10 }"
        :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
        class="featured-meta"
      >
        <span class="featured-date">{{ featuredJob.date }}</span>
      </Motion>
    </div>
  </Motion>
</template>

<style scoped>
.featured-internship {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  margin-bottom: 3rem;
}

.featured-internship:hover {
  transform: scale(1.01);
}

.featured-background {
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
  object-position: 0 100%;
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

.featured-content {
  position: relative;
  z-index: 10;
  height: 100%;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
}

.featured-position {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.5px;
  margin-bottom: 0;
  text-transform: none;
}

.featured-company {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 0;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.featured-date {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: #cccccc;
}

.featured-badge {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #000000;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .featured-internship {
    height: 240px;
    margin-bottom: 2.5rem;
  }

  .featured-content {
    padding: 1.5rem;
  }

  .featured-position {
    font-size: 1.8rem;
  }

  .featured-company {
    font-size: 1rem;
  }

  .featured-date {
    font-size: 0.9rem;
  }

  .featured-badge {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
  }
}

@media (max-width: 480px) {
  .featured-internship {
    height: 200px;
  }

  .featured-position {
    font-size: 1.5rem;
  }

  .featured-company {
    font-size: 0.95rem;
  }
}
</style>

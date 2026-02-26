<script setup lang="ts">
import { Motion } from 'motion-v'

const guiProjects = [
  {
    title: 'GLOW',
    subtitle: 'Water Temperature Observation MVC Application',
    category: 'Render Deployed',
    image: '/resources/GLOW.png',
    tech: ['JavaScript', 'Next.js Frontend', 'Express Backend', 'MongoDB', 'GitHub Actions', 'Docker', 'Render'],
    buttons: [
      { label: 'Live Demo', url: 'https://glow-frontend-v4-0-0.onrender.com/' }
    ]
  },
  {
    title: 'Planetze',
    subtitle: 'Track and Reduce Your Carbon Footprint',
    category: 'Android App',
    image: '/images/pla2.jpeg',
    tech: ['Java', 'Android Studio'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/KrishnaManamohan/B07FinalProject' }
    ]
  },
  {
    title: 'Zarab Collections',
    subtitle: 'A online Clothing Brand in Pakistan',
    category: 'VPS Deployed',
    image: '/resources/Zarab.png',
    tech: ['Docker', 'Digital Ocean\'s (Droplet)', 'Next.js', 'SupaBase', 'PostgreSQL', 'GitHub Actions', 'TypeScript'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/farah-faiza' }
    ]
  },
  {
    title: 'Parsea',
    subtitle: 'A Tool That Reads My Inbox And Saves Me Time',
    category: 'Windows/MacOS App',
    image: '/resources/showcase.gif',
    tech: ['Electron', 'Cohere LLM', 'IMAP Protocol', 'JavaScript'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/Parsea.git' }
    ]
  }
]

const cliProjects = [
  {
    title: 'Lost City of Z',
    subtitle: 'Rediscovering Ancient Civilizations Across Earth',
    category: 'OpenAI to Z Challenge',
    image: '/resources/openaitoz.png',
    tech: ['Jupyter Notebook', 'OpenAI LLMs', 'Google Earth Engine', 'Python'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/OpenAI-to-Z-challenge.git' }
    ]
  },
  {
    title: 'Halo Pixel Edition',
    subtitle: 'A Classic Reimagined in MIPS Assembly',
    category: 'RICS MIPS GAME',
    image: '/images/gffe.png',
    tech: ['Assembly', 'MARS MIPS Simulator'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/Halo-Pixel-Edition' }
    ]
  },
  {
    title: 'Hawkeye',
    subtitle: 'Advanced UNIX System Monitoring',
    category: 'Command Line Tool',
    image: '/images/hawkeye.png',
    tech: ['C', 'UNIX'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/System-Monitoring-Tool-Unix' }
    ]
  }
]

const emit = defineEmits<{
  (e: 'item-click', item: any): void
}>()
</script>

<template>
  <div class="projects-section">
    <!-- All Projects in One Grid -->
    <div class="unified-grid">
      <!-- GUI Projects -->
      <Motion
        v-for="(project, index) in guiProjects"
        :key="'gui-' + index"
        :initial="{ opacity: 0, y: 15 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3, delay: 0.05 + index * 0.08 }"
        class="project-card"
        @click="emit('item-click', project)"
      >
        <div class="card-image">
          <img :src="project.image" :alt="project.title" />
          <div class="category-badge gui">GUI</div>
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-subtitle">{{ project.subtitle }}</p>
          <div class="tech-preview">
            <span v-for="(tech, i) in project.tech.slice(0, 2)" :key="i" class="tech-tag">{{ tech }}</span>
            <span v-if="project.tech.length > 2" class="more-tag">+{{ project.tech.length - 2 }}</span>
          </div>
        </div>
      </Motion>

      <!-- CLI Projects -->
      <Motion
        v-for="(project, index) in cliProjects"
        :key="'cli-' + index"
        :initial="{ opacity: 0, y: 15 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.3, delay: 0.37 + index * 0.08 }"
        class="project-card"
        @click="emit('item-click', project)"
      >
        <div class="card-image">
          <img :src="project.image" :alt="project.title" />
          <div class="category-badge cli">CLI/Retro</div>
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-subtitle">{{ project.subtitle }}</p>
          <div class="tech-preview">
            <span v-for="(tech, i) in project.tech.slice(0, 2)" :key="i" class="tech-tag">{{ tech }}</span>
            <span v-if="project.tech.length > 2" class="more-tag">+{{ project.tech.length - 2 }}</span>
          </div>
        </div>
      </Motion>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  padding: 0;
}

.section-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #000000;
  margin-bottom: 1.5rem;
  letter-spacing: -0.3px;
}

.projects-grid {
  margin-bottom: 3rem;
}

.unified-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.card-image {
  width: 100%;
  height: 140px;
  overflow: hidden;
  position: relative;
  background: #f8f8f8;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.category-badge.gui {
  background: #000000;
}

.category-badge.cli {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #000000;
}

.card-content {
  padding: 0.875rem;
}

.card-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #000000;
  margin-bottom: 0.3rem;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.6rem;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.tech-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tech-tag {
  background: #f5f5f5;
  color: #333333;
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.68rem;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

.more-tag {
  background: #e8e8e8;
  color: #333333;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.68rem;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .projects-grid {
    margin-bottom: 2.5rem;
  }

  .unified-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.875rem;
  }

  .card-image {
    height: 120px;
  }
}
</style>

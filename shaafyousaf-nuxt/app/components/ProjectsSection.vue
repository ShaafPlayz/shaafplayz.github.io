<script setup lang="ts">
import { Motion } from 'motion-v'

const guiProjects = [
  {
    title: 'GLOW',
    subtitle: 'Water Temperature Observation MVC Application',
    category: 'Production Web Application',
    badge: 'GUI',
    badgeClass: 'gui',
    image: '/resources/GLOW.png',
    description: 'A production-grade MVC web application for observing and tracking water temperature data. Built with a Next.js frontend and an Express/MongoDB backend, with automated testing in Jest and a full CI/CD pipeline using GitHub Actions and Docker, deployed on Render.',
    tech: ['JavaScript', 'Next.js', 'Express Backend', 'MongoDB', 'Jest', 'GitHub Actions', 'Docker', 'Render'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/UTSC-CSCC01-Software-Engineering-I/GLOW-WebApp.git' }
    ]
  },
  {
    title: 'Planetze',
    subtitle: 'Track and Reduce Your Carbon Footprint',
    category: 'Android App',
    badge: 'GUI',
    badgeClass: 'gui',
    image: '/images/planetzeandroidstudiosc.png',
    description: 'An Android application that helps users measure, track, and reduce their carbon footprint. Developed in Java with Android Studio, with unit testing in JUnit, a recorded demo, and full project documentation.',
    tech: ['Java', 'Android Studio', 'JUnit'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/KrishnaManamohan/B07FinalProject' },
      { label: 'Demo Video', url: 'https://www.youtube.com/watch?v=kPucqKiZSr8' },
      { label: 'Documentation', url: 'https://docs.google.com/document/d/1E8K7M2KeTI2QX76r0JHJFt2Dfh2fHfJYNujhZVbhaYI/edit?tab=t.0#heading=h.wkfbqc178vg8' }
    ]
  },
  {
    title: 'Zarab Collections',
    subtitle: 'An Online Clothing Brand in Pakistan',
    category: 'Production Web Application',
    badge: 'GUI',
    badgeClass: 'gui',
    image: '/resources/Zarab.png',
    description: 'A live e-commerce platform for a clothing brand based in Pakistan. Built with TypeScript and Next.js on top of Supabase and PostgreSQL, containerized with Docker, and deployed to a DigitalOcean Droplet with CI/CD through GitHub Actions.',
    tech: ['TypeScript', 'Next.js', 'SupaBase', 'PostgreSQL', 'GitHub Actions', 'Docker', 'Digital Ocean\'s (Droplet)'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/farah-faiza' }
    ]
  },
  {
    title: 'Parsea',
    subtitle: 'A Tool That Reads My Inbox And Saves Me Time',
    category: 'Windows/MacOS App',
    badge: 'GUI',
    badgeClass: 'gui',
    image: '/resources/showcase.gif',
    description: 'A cross-platform desktop app that connects to an email inbox over IMAP and uses the Cohere LLM to parse, summarize, and surface what matters. Built with Electron for Windows and macOS.',
    tech: ['JavaScript', 'Electron', 'Cohere LLM', 'IMAP Protocol'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/Parsea.git' }
    ]
  }
]

const backendProjects = [
  {
    title: 'Server Observer Utility',
    subtitle: 'Server Monitoring & Alerting Tool',
    category: 'API',
    badge: 'Backend',
    badgeClass: 'backend',
    image: '/homelab/sou.png',
    description: 'A server monitoring and alerting API built with C# and ASP.NET Core. Containerized with Docker and continuously built and deployed with GitHub Actions and a self-hosted runner.',
    tech: ['C#', 'ASP.NET Core', 'Docker', 'Github Actions & Runner'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/shaafyousaf/Server-Observer-Utility' }
    ]
  }
]

const cliProjects = [
  {
    title: 'Lost City of Z',
    subtitle: 'Rediscovering Ancient Civilizations Across Earth',
    category: 'OpenAI to Z Challenge',
    badge: 'CLI/Retro',
    badgeClass: 'cli',
    image: '/resources/openaitoz.png',
    description: 'A research project for the OpenAI to Z Challenge that combines OpenAI LLMs with Google Earth Engine satellite data to search for traces of ancient civilizations. Built in Python using Jupyter Notebooks.',
    tech: ['Python', 'Jupyter Notebook', 'OpenAI LLMs', 'Google Earth Engine'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/OpenAI-to-Z-challenge.git' }
    ]
  },
  {
    title: 'Halo Pixel Edition',
    subtitle: 'A Classic Reimagined in MIPS Assembly',
    category: 'RICS MIPS GAME',
    badge: 'CLI/Retro',
    badgeClass: 'cli',
    image: '/images/gffe.png',
    description: 'A pixel-art reimagining of Halo written entirely in MIPS assembly and run on the MARS MIPS simulator — handling rendering, input, and game logic at the instruction level.',
    tech: ['Assembly', 'MARS MIPS Simulator'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/Halo-Pixel-Edition' }
    ]
  },
  {
    title: 'Hawkeye',
    subtitle: 'Advanced UNIX System Monitoring',
    category: 'Command Line Tool',
    badge: 'CLI/Retro',
    badgeClass: 'cli',
    image: '/images/hawkeye.png',
    description: 'A command-line system monitoring tool for UNIX written in C, reporting live system metrics directly in the terminal.',
    tech: ['C', 'UNIX'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/System-Monitoring-Tool-Unix' }
    ]
  }
]

const allProjects = [...backendProjects, ...guiProjects, ...cliProjects]

const emit = defineEmits<{
  (e: 'item-click', item: any): void
}>()
</script>

<template>
  <div class="projects-section">
    <div class="projects-list">
      <Motion
        v-for="(project, index) in allProjects"
        :key="project.title"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.35, delay: 0.05 + index * 0.06 }"
        class="project-row"
        @click="emit('item-click', project)"
      >
        <div class="row-image">
          <img :src="project.image" :alt="project.title" loading="lazy" />
          <div class="image-fade"></div>
        </div>

        <div class="row-content">
          <div class="row-meta">
            <span :class="['category-badge', project.badgeClass]">{{ project.badge }}</span>
            <span class="category-label">{{ project.category }}</span>
          </div>

          <h3 class="row-title">{{ project.title }}</h3>
          <p class="row-subtitle">{{ project.subtitle }}</p>
          <p class="row-description">{{ project.description }}</p>

          <div class="tech-list">
            <span v-for="(tech, i) in project.tech" :key="i" class="tech-tag">{{ tech }}</span>
          </div>

          <div class="row-actions">
            <a
              v-for="(btn, i) in project.buttons"
              :key="i"
              :href="btn.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="['action-link', { primary: i === 0 }]"
              @click.stop
            >
              {{ btn.label }}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
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

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Full-width horizontal row — dark theme */
.project-row {
  position: relative;
  display: grid;
  grid-template-columns: minmax(280px, 380px) 1fr;
  background: linear-gradient(145deg, #161616 0%, #0d0d0d 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Subtle gold glow sweep on hover */
.project-row::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(600px circle at 0% 0%, rgba(255, 215, 0, 0.06), transparent 45%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.project-row:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
  border-color: rgba(255, 255, 255, 0.18);
}

.project-row:hover::after {
  opacity: 1;
}

.row-image {
  position: relative;
  background: #0a0a0a;
  overflow: hidden;
  min-height: 240px;
}

.row-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Fade image into the dark card */
.image-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 60%, rgba(13, 13, 13, 0.9) 100%);
  pointer-events: none;
}

.project-row:hover .row-image img {
  transform: scale(1.04);
}

.row-content {
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  position: relative;
  z-index: 1;
}

.row-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.category-badge {
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.3px;
  color: #ffffff;
}

.category-badge.gui {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.category-badge.cli {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #000000;
}

.category-badge.backend {
  background: linear-gradient(135deg, #5bffc0, #66adff);
  color: #000000;
}

.category-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.row-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.row-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: rgba(255, 215, 0, 0.85);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.row-description {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
  margin-bottom: 1rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.72rem;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.25s ease;
}

.project-row:hover .tech-tag {
  border-color: rgba(255, 255, 255, 0.18);
}

.row-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
}

.action-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1.1rem;
  border-radius: 50px;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  transition: all 0.25s ease;
}

.action-link:hover {
  border-color: rgba(255, 255, 255, 0.6);
  color: #ffffff;
}

.action-link.primary {
  background: #ffd700;
  border-color: #ffd700;
  color: #000000;
}

.action-link.primary:hover {
  background: #ffe44d;
  border-color: #ffe44d;
}

@media (max-width: 968px) {
  .project-row {
    grid-template-columns: minmax(220px, 300px) 1fr;
  }

  .row-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .projects-list {
    gap: 1.25rem;
  }

  /* Stack image on top of content on mobile */
  .project-row {
    grid-template-columns: 1fr;
  }

  .row-image {
    min-height: 0;
    height: 200px;
  }

  .row-image img {
    position: absolute;
  }

  /* Fade downward when image sits above content */
  .image-fade {
    background: linear-gradient(180deg, transparent 60%, rgba(13, 13, 13, 0.9) 100%);
  }

  .row-content {
    padding: 1.25rem 1.25rem 1.5rem;
  }

  .row-title {
    font-size: 1.3rem;
  }

  .row-description {
    font-size: 0.85rem;
  }
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Motion } from 'motion-v'

const guiProjects = [
  {
    title: 'My Ugly Links',
    subtitle: 'A Home for Every Ugly URL You Can\'t Remember',
    category: 'Chrome Extension',
    badge: 'GUI',
    badgeClass: 'gui',
    date: '2026-06-29',
    image: '/images/my_ugly_links.png',
    description: 'A Chrome extension for saving and instantly launching the ugly links you can never remember — localhost ports, internal IPs, and long institutional URLs. Save any link from the toolbar, search and filter as you type, and launch it back with one click.',
    tech: ['JavaScript', 'Chrome Extension (Manifest V3)', 'HTML/CSS'],
    buttons: [
      { label: 'Chrome Web Store', url: 'https://chromewebstore.google.com/detail/my-ugly-links/aohjhgogkcbgkdkpljpgeimpmdcdedhn' }
    ]
  },
  {
    title: 'GLOW',
    subtitle: 'Water Temperature Observation MVC Application',
    category: 'Production Web Application',
    badge: 'GUI',
    badgeClass: 'gui',
    date: '2025-05-17',
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
    date: '2024-11-05',
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
    date: '2025-06-21',
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
    date: '2025-06-16',
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
    date: '2026-02-17',
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
    title: 'Halo Pixel Edition',
    subtitle: 'A Classic Reimagined in MIPS Assembly',
    category: 'RICS MIPS GAME',
    badge: 'CLI/Retro',
    badgeClass: 'cli',
    date: '2025-03-15',
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
    date: '2025-02-08',
    image: '/images/hawkeye.png',
    description: 'A command-line system monitoring tool for UNIX written in C, reporting live system metrics directly in the terminal.',
    tech: ['C', 'UNIX'],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/ShaafPlayz/System-Monitoring-Tool-Unix' }
    ]
  }
]

const allProjects = [...backendProjects, ...guiProjects, ...cliProjects]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'gui', label: 'GUI' },
  { id: 'backend', label: 'Backend' },
  { id: 'cli', label: 'CLI/Retro' }
]

const sortOptions = [
  { id: 'newest', label: 'Newest First' },
  { id: 'oldest', label: 'Oldest First' }
]

const activeCategory = ref('all')
const sortOrder = ref<'newest' | 'oldest'>('newest')

const filteredProjects = computed(() => {
  const filtered = activeCategory.value === 'all'
    ? [...allProjects]
    : allProjects.filter(p => p.badgeClass === activeCategory.value)

  return filtered.sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime()
    return sortOrder.value === 'newest' ? -diff : diff
  })
})

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const emit = defineEmits<{
  (e: 'item-click', item: any): void
}>()
</script>

<template>
  <div class="projects-section">
    <div class="filter-bar">
      <div class="filter-group">
        <button
          v-for="cat in categories"
          :key="cat.id"
          :class="['filter-pill', { active: activeCategory === cat.id }]"
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="sort-group">
        <button
          v-for="opt in sortOptions"
          :key="opt.id"
          :class="['sort-pill', { active: sortOrder === opt.id }]"
          @click="sortOrder = opt.id as 'newest' | 'oldest'"
        >
          {{ opt.label }}
        </button>
      </div>
    </div>

    <div class="projects-list">
      <Motion
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        :initial="{ opacity: 1, y: 20 }"
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
            <span class="date-label">{{ formatDate(project.date) }}</span>
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
  padding-bottom: 5rem;
}

/* Filter / Sort Bar */
.filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.filter-group,
.sort-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-pill,
.sort-pill {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  color: #555555;
  background: #f2f2f2;
  border: 1.5px solid transparent;
  border-radius: 50px;
  padding: 0.45rem 1rem;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
}

.filter-pill:hover,
.sort-pill:hover {
  background: #e8e8e8;
  color: #000000;
}

.filter-pill.active {
  background: #000000;
  color: #ffffff;
}

.sort-pill.active {
  background: #5c5c5c;
  color: #ffffff;
}

.sort-group {
  position: relative;
  padding-left: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* Stacked card — dark theme */
.project-row {
  position: relative;
  display: flex;
  flex-direction: column;
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
  height: 190px;
  flex-shrink: 0;
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
  background: linear-gradient(180deg, transparent 55%, rgba(13, 13, 13, 0.9) 100%);
  pointer-events: none;
}

.project-row:hover .row-image img {
  transform: scale(1.04);
}

.row-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  flex: 1;
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
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.category-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.date-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.3);
  margin-left: auto;
}

.row-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.row-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  color: rgba(255, 215, 0, 0.85);
  margin-bottom: 0.65rem;
  line-height: 1.4;
}

.row-description {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

@media (max-width: 900px) {
  .projects-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .filter-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .sort-group {
    padding-left: 0;
    border-left: none;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .date-label {
    margin-left: 0;
    width: 100%;
  }

  .projects-list {
    gap: 1.25rem;
  }

  .row-image {
    height: 180px;
  }

  .row-content {
    padding: 1.25rem 1.25rem 1.5rem;
  }

  .row-title {
    font-size: 1.2rem;
  }

  .row-description {
    font-size: 0.85rem;
  }
}
</style>

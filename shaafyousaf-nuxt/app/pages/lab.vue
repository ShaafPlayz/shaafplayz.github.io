<template>
  <div class="lab-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Shaaf's Lab</h1>
        <p class="page-subtitle">
          Where ideas become reality through code and innovation
        </p>
      </header>

      <!-- Hackathon Wins -->
      <section class="section">
        <h2 class="section-title">Hackathon Wins</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in hackathonProjects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </section>

      <!-- Published Software -->
      <section class="section">
        <h2 class="section-title">Published Software</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in publishedProjects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </section>

      <!-- GUI Projects -->
      <section class="section">
        <h2 class="section-title">GUI Applications</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in guiProjects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </section>

      <!-- Command Line / Retro Projects -->
      <section class="section">
        <h2 class="section-title">CommandLine & Retro Projects</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in cliProjects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Lab - Shaaf Yousaf',
  description: 'Explore my projects, hackathon wins, and software experiments',
})

const hackathonProjects = [
  {
    title: 'imagEHR',
    description: 'AI-Powered Clinical Data Extraction & CDISC Mapping - Google & HBSU Best Healthcare AI Hack Winner',
    image: '/images/imagEHR logo.png',
    link: 'https://devpost.com/software/imagehr',
    tags: ['Python', 'Flask', 'Cohere LLM', 'YOLOv5'],
  },
  {
    title: 'idrak',
    description: 'Real-time assistant for context-aware visual tasks - 1st Place Overall Winner at DaVinci Competition 2026',
    link: 'https://devpost.com/software/idrak',
    tags: ['Python', 'TypeScript', 'Vue', 'FastAPI', 'OpenCV', 'Anthropic'],
  },
]

const publishedProjects = [
  {
    title: 'Slowed Enhanced',
    description: 'A Google Chrome Extension for Advanced Audio Controls',
    image: '/resources/PortfolioPromo.png',
    link: 'https://chromewebstore.google.com/detail/mbknnccopgggeedhnloodppflepboggp',
    tags: ['.NET C#', 'Blazor', 'MudBlazor', 'JavaScript'],
  },
]

const guiProjects = [
  {
    title: 'GLOW',
    description: 'Water Temperature Observation MVC Application',
    image: '/resources/GLOW.png',
    link: 'https://glow-frontend-v4-0-0.onrender.com',
    tags: ['JavaScript', 'Next.js', 'Express', 'MongoDB', 'Docker'],
  },
  {
    title: 'Planetze',
    description: 'Track and Reduce Your Carbon Footprint',
    image: '/images/pla2.jpeg',
    link: 'https://github.com/KrishnaManamohan/B07FinalProject',
    tags: ['Java', 'Android Studio'],
  },
  {
    title: 'Zarab Collections',
    description: 'Online Clothing Brand in Pakistan',
    image: '/resources/Zarab.png',
    link: 'https://github.com/ShaafPlayz/farah-faiza',
    tags: ['Docker', 'Next.js', 'SupaBase', 'PostgreSQL', 'TypeScript'],
  },
  {
    title: 'Parsea',
    description: 'A Tool That Reads My Inbox And Saves Me Time',
    image: '/resources/showcase.gif',
    link: 'https://github.com/ShaafPlayz/Parsea.git',
    tags: ['Electron', 'Cohere LLM', 'IMAP', 'JavaScript'],
  },
]

const cliProjects = [
  {
    title: 'Lost City of Z',
    description: 'Rediscovering Ancient Civilizations Across Earth',
    image: '/resources/openaitoz.png',
    link: 'https://github.com/ShaafPlayz/OpenAI-to-Z-challenge.git',
    tags: ['Jupyter', 'OpenAI', 'Google Earth Engine', 'Python'],
  },
  {
    title: 'Halo Pixel Edition',
    description: 'A Classic Reimagined in MIPS Assembly',
    image: '/images/gffe.png',
    link: 'https://github.com/ShaafPlayz/Halo-Pixel-Edition',
    tags: ['Assembly', 'MARS MIPS'],
  },
  {
    title: 'Hawkeye',
    description: 'Advanced UNIX System Monitoring',
    image: '/images/hawkeye.png',
    link: 'https://github.com/ShaafPlayz/System-Monitoring-Tool-Unix',
    tags: ['C', 'UNIX'],
  },
]
</script>

<style scoped>
.lab-page {
  min-height: 100vh;
  padding: var(--spacing-xl) 0;
}

.page-header {
  text-align: center;
  padding: var(--spacing-xl) 0;
  margin-bottom: var(--spacing-lg);
}

.page-title {
  font-size: clamp(var(--font-size-4xl), 8vw, var(--font-size-5xl));
  font-weight: 900;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, var(--color-white), var(--color-gold));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: var(--spacing-xl);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

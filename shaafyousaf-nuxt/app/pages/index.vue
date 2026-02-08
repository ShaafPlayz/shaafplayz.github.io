<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero-section container">
      <div class="hero-content">
        <h2 class="hero-subtitle">WELCOME TO</h2>
        <h1 class="hero-title">SHAAF'S PORTFOLIO</h1>
        <p class="hero-description">Engineering ideas through code, design, and film...</p>
      </div>
    </section>

    <!-- Bento Grid Section -->
    <section class="bento-section container">
      <div class="bento-grid">
        <!-- Profile Card -->
        <BentoCard
          title="Shaaf Yousaf"
          description="3rd Year Undergrad at University of Toronto. Full-Stack Developer, Digital Artist, and Filmmaker."
          :image="'/resources/pic.png'"
          size="large"
          badge="About Me"
          badge-icon="mdi:account"
          :stats="[
            { value: '3+', label: 'Years Developing' },
            { value: '11+', label: 'Years Digital Artist' }
          ]"
        />

        <!-- Current Work -->
        <BentoCard
          title="Software Developer"
          description="Building powerful web applications with .NET Blazor, GraphQL, and Entity Framework at UTS"
          size="medium"
          badge="Current Role"
          badge-icon="mdi:briefcase"
          link="/dev"
        />

        <!-- Published Software -->
        <BentoCard
          title="Slowed Enhanced"
          description="A Chrome Extension for Advanced Audio Controls - Published on Chrome Web Store"
          :image="'/resources/PortfolioPromo.png'"
          size="wide"
          badge="Published"
          badge-icon="mdi:google-chrome"
          link="https://chromewebstore.google.com/detail/mbknnccopgggeedhnloodppflepboggp"
          :tags="['.NET C#', 'Blazor', 'JavaScript']"
        />

        <!-- Hackathon Wins -->
        <BentoCard
          title="Hackathon Winner"
          description="🏆 1st Place - DaVinci Competition 2026 | 🏆 Best Healthcare AI - GenAI Genesis 2025"
          size="medium"
          badge="Achievements"
          badge-icon="mdi:trophy"
          link="/lab"
        />

        <!-- Design Portfolio -->
        <BentoCard
          title="Creative Studio"
          description="11+ years of digital artistry, filmmaking, and visual storytelling"
          size="medium"
          badge="Design"
          badge-icon="mdi:palette"
          link="/studio"
        />

        <!-- Quick Links -->
        <BentoCard
          title="Connect"
          description="Find me on GitHub, LinkedIn, and other platforms"
          size="small"
          badge="Social"
          badge-icon="mdi:link-variant"
        />

        <!-- Tech Stack -->
        <BentoCard
          title="Tech Stack"
          description="Specialized in .NET, Nuxt, Python, and modern web technologies"
          size="wide"
          badge="Skills"
          badge-icon="mdi:code-tags"
          :tags="['.NET', 'Blazor', 'Nuxt', 'Python', 'TypeScript', 'Docker', 'Azure']"
        />
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="featured-section container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="featured-grid">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          v-bind="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Shaaf Yousaf - Portfolio',
  description: 'Engineering ideas through code, design, and film. Full-stack developer, digital artist, and filmmaker.',
  ogImage: '/resources/logo.png',
})

const featuredProjects = [
  {
    title: 'GLOW',
    description: 'Water Temperature Observation MVC Application',
    image: '/resources/GLOW.png',
    link: 'https://glow-frontend-v4-0-0.onrender.com',
    tags: ['Next.js', 'Express', 'MongoDB', 'Docker'],
  },
  {
    title: 'imagEHR',
    description: 'AI-Powered Clinical Data Extraction & CDISC Mapping',
    image: '/images/imagEHR logo.png',
    link: 'https://devpost.com/software/imagehr',
    tags: ['Python', 'Flask', 'Cohere LLM', 'YOLOv5'],
  },
  {
    title: 'Zarab Collections',
    description: 'Online Clothing Brand in Pakistan',
    image: '/resources/Zarab.png',
    link: 'https://github.com/ShaafPlayz/farah-faiza',
    tags: ['Next.js', 'PostgreSQL', 'Docker', 'SupaBase'],
  },
]
</script>

<style scoped>
.homepage {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-xl) var(--container-padding);
}

.hero-content {
  max-width: 900px;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  font-weight: 300;
  color: var(--text-secondary);
  margin-bottom: 0;
  letter-spacing: 0.2em;
}

.hero-title {
  font-size: clamp(var(--font-size-4xl), 8vw, var(--font-size-5xl));
  font-weight: 900;
  margin: 0.5rem 0 1.5rem;
  background: linear-gradient(135deg, var(--color-white), var(--color-gold));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Bento Grid */
.bento-section {
  padding: var(--spacing-xl) var(--container-padding);
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  grid-auto-rows: 250px;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Featured Section */
.featured-section {
  padding: var(--spacing-xl) var(--container-padding);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }
  
  .hero-section {
    min-height: 50vh;
    padding: var(--spacing-lg) var(--container-padding);
  }
}
</style>

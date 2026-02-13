<template>
  <div class="homepage">
    <SplashScreen />
    <VideoBackground />
    <HeroSection />
    <AboutSection />
    <PublishedSoftware />
    <HackathonWins />
    
    <!-- GUI Projects -->
    <ProjectsSection 
      title="GUI Projects"
      :projects="guiProjects"
    />
    
    <!-- CommandLine/Retro Projects -->
    <ProjectsSection 
      title="CommandLine/Retro Projects"
      :projects="retroProjects"
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Shaaf Yousaf - Portfolio',
  description: 'Full-Stack Developer, Digital Artist, and Filmmaker'
})

const guiProjects = [
  {
    title: 'GLOW',
    subtitle: 'Water Temperature Observation MVC Application',
    category: 'Render Deployed',
    categoryIcon: 'fas fa-cloud',
    image: '/resources/GLOW.png',
    link: 'https://glow-frontend-v4-0-0.onrender.com/',
    bold: true,
    techStack: ['JavaScript', 'Next.js Frontend', 'Express Backend', 'MongoDB', 'GitHub Actions', 'Docker', 'Render']
  },
  {
    title: 'Planetze',
    subtitle: 'Track and Reduce Your Carbon Footprint',
    category: 'Android App',
    categoryIcon: 'fab fa-android',
    image: '/images/pla2.jpeg',
    link: 'https://github.com/KrishnaManamohan/B07FinalProject',
    techStack: ['Java', 'Android Studio']
  },
  {
    title: 'Zarab Collections',
    subtitle: 'A online Clothing Brand in Pakistan',
    category: 'VPS Deployed',
    categoryIcon: 'fas fa-server',
    image: '/resources/Zarab.png',
    link: 'https://github.com/ShaafPlayz/farah-faiza',
    bold: true,
    techStack: ['Docker', "Digital Ocean's (Droplet)", 'Next.js', 'SupaBase', 'PostgreSQL', 'GitHub Actions', 'TypeScript']
  },
  {
    title: 'Parsea',
    subtitle: 'A Tool That Reads My Inbox And Saves Me Time',
    category: 'Windows/MacOS App',
    categoryIcon: 'fas fa-desktop',
    image: '/resources/showcase.gif',
    link: 'https://github.com/ShaafPlayz/Parsea.git',
    bold: true,
    techStack: ['Electron', 'Cohere LLM', 'IMAP Protocol', 'JavaScript']
  }
]

const retroProjects = [
  {
    title: 'Lost City of Z',
    subtitle: 'Rediscovering Ancient Civilizations Across Earth',
    category: 'OpenAI to Z Challenge',
    categoryIcon: 'fas fa-robot',
    image: '/resources/openaitoz.png',
    link: 'https://github.com/ShaafPlayz/OpenAI-to-Z-challenge.git',
    bold: true,
    techStack: ['Jupyter Notebook', 'OpenAI LLMs', 'Google Earth Engine', 'Python']
  },
  {
    title: 'Halo Pixel Edition',
    subtitle: 'A Classic Reimagined in MIPS Assembly',
    category: 'RICS MIPS GAME',
    categoryIcon: 'fas fa-gamepad',
    image: '/images/gffe.png',
    link: 'https://github.com/ShaafPlayz/Halo-Pixel-Edition',
    techStack: ['Assembly', 'MARS MIPS Simulator']
  },
  {
    title: 'Hawkeye',
    subtitle: 'Advanced UNIX System Monitoring',
    category: 'Command Line Tool',
    categoryIcon: 'fas fa-terminal',
    image: '/images/hawkeye.png',
    link: 'https://github.com/ShaafPlayz/System-Monitoring-Tool-Unix',
    techStack: ['C', 'UNIX']
  }
]
</script>

<style scoped>
.homepage {
  position: relative;
  overflow-x: hidden;
}
</style>


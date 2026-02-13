<template>
  <section class="projects">
    <h2>{{ title }}</h2>
    <div class="projects-grid">
      <a 
        v-for="project in projects" 
        :key="project.title"
        :href="project.link" 
        class="project-card" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div class="project-image">
          <NuxtImg :src="project.image" :alt="project.title" />
        </div>
        <div class="project-title" :style="project.bold ? 'font-weight: 900' : ''">
          {{ project.title }}
        </div>
        <div class="project-subtitle">{{ project.subtitle }}</div>
        <div class="project-category">
          <i :class="project.categoryIcon"></i> {{ project.category }}
        </div>
        <div class="tech-stack">
          <span 
            v-for="tech in project.techStack" 
            :key="tech" 
            class="tech-item"
          >
            {{ tech }}
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  subtitle: string
  category: string
  categoryIcon: string
  image: string
  link: string
  techStack: string[]
  bold?: boolean
}

interface Props {
  title: string
  projects: Project[]
}

defineProps<Props>()
</script>

<style scoped>
.projects {
  padding: 5rem 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 900;
}

.projects-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  padding: 0 20px;
}

.project-card {
  background: rgba(0, 0, 0, 0.681);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  margin: 1rem;
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0;
}

.project-card:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  background-color: rgb(0, 0, 0);
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-title {
  padding: 1rem 1rem 0rem 1rem;
  color: white;
  font-size: 1.7rem;
  font-weight: 900;
  text-align: center;
}

.project-subtitle {
  padding: 0.2rem 1rem 1rem 1rem;
  color: white;
  font-size: 1.0rem;
  font-weight: 300;
  text-align: center;
}

.project-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: black;
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem 1rem 1rem 1rem;
  justify-content: center;
}

.tech-item {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  color: #ffffff;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .projects h2 {
    font-size: 2rem;
  }
}
</style>

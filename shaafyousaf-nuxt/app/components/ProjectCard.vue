<template>
  <a 
    :href="link" 
    class="project-card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div v-if="image" class="project-image">
      <NuxtImg 
        :src="image" 
        :alt="title"
        class="card-image"
        loading="lazy"
      />
      <div class="image-overlay"></div>
    </div>
    
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      
      <div v-if="tags" class="project-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      
      <div class="project-link">
        <span>View Project</span>
        <Icon name="mdi:arrow-right" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image?: string
  link: string
  tags?: string[]
}

defineProps<Props>()
</script>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
  cursor: pointer;
  height: 400px;
}

.project-card:hover {
  border-color: var(--color-gold);
  box-shadow: var(--shadow-gold);
  transform: translateY(-8px);
}

.project-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .card-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.project-content {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.project-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  color: var(--color-gold);
  font-weight: 500;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-gold);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: gap var(--transition-base);
}

.project-card:hover .project-link {
  gap: 1rem;
}
</style>

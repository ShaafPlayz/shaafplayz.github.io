<template>
  <div 
    :class="['bento-card', sizeClass, { 'has-image': hasImage }]"
    @click="handleClick"
  >
    <div v-if="hasImage" class="bento-image">
      <NuxtImg 
        :src="image" 
        :alt="title"
        class="card-image"
        loading="lazy"
      />
      <div class="image-overlay"></div>
    </div>
    
    <div class="bento-content">
      <div v-if="badge" class="bento-badge">
        <Icon v-if="badgeIcon" :name="badgeIcon" />
        <span>{{ badge }}</span>
      </div>
      
      <h3 class="bento-title">{{ title }}</h3>
      
      <p v-if="description" class="bento-description">{{ description }}</p>
      
      <div v-if="stats" class="bento-stats">
        <div v-for="(stat, index) in stats" :key="index" class="stat-item">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
      
      <div v-if="tags" class="bento-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      
      <div v-if="link" class="bento-link">
        <span>{{ linkText || 'Learn More' }}</span>
        <Icon name="mdi:arrow-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

interface Props {
  title: string
  description?: string
  image?: string
  badge?: string
  badgeIcon?: string
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall'
  link?: string
  linkText?: string
  tags?: string[]
  stats?: Stat[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const hasImage = computed(() => !!props.image)

const sizeClass = computed(() => {
  return `bento-${props.size}`
})

const handleClick = () => {
  if (props.link) {
    if (props.link.startsWith('http')) {
      window.open(props.link, '_blank', 'noopener,noreferrer')
    } else {
      navigateTo(props.link)
    }
  }
}
</script>

<style scoped>
.bento-card {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  overflow: hidden;
  transition: all var(--transition-base);
  cursor: default;
  display: flex;
  flex-direction: column;
}

.bento-card.has-image {
  cursor: pointer;
}

.bento-card:hover {
  border-color: var(--color-gold);
  box-shadow: var(--shadow-gold);
  transform: translateY(-4px);
}

/* Size Variants */
.bento-small {
  grid-column: span 1;
  grid-row: span 1;
}

.bento-medium {
  grid-column: span 1;
  grid-row: span 2;
}

.bento-large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-wide {
  grid-column: span 2;
  grid-row: span 1;
}

.bento-tall {
  grid-column: span 1;
  grid-row: span 3;
}

/* Image Styles */
.bento-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

/* Content */
.bento-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.bento-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.bento-title {
  font-size: clamp(var(--font-size-xl), 3vw, var(--font-size-3xl));
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
}

.bento-description {
  color: var(--text-secondary);
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin: 0;
}

.bento-stats {
  display: flex;
  gap: 2rem;
  margin-top: auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-gold);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.bento-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: var(--border-thin);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
}

.bento-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  color: var(--color-gold);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: gap var(--transition-base);
}

.bento-card:hover .bento-link {
  gap: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .bento-large,
  .bento-wide,
  .bento-tall {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>

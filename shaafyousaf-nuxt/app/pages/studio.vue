<template>
  <div class="studio-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Creative Studio</h1>
        <p class="page-subtitle">
          11+ years of digital artistry, filmmaking, and visual storytelling
        </p>
      </header>

      <!-- Design Work Grid (Masonry-style) -->
      <section class="section">
        <h2 class="section-title">Featured Work</h2>
        <div class="masonry-grid">
          <div 
            v-for="(item, index) in designWork" 
            :key="index"
            class="masonry-item"
            :class="`masonry-${item.size}`"
          >
            <NuxtImg 
              :src="item.image" 
              :alt="item.title"
              class="masonry-image"
              loading="lazy"
            />
            <div class="masonry-overlay">
              <h3 class="masonry-title">{{ item.title }}</h3>
              <p class="masonry-description">{{ item.description }}</p>
              <span v-if="item.category" class="masonry-category">{{ item.category }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Design Portfolio Link -->
      <section class="section cta-section">
        <div class="cta-card">
          <Icon name="mdi:palette" size="48" class="cta-icon" />
          <h2>Full Design Portfolio</h2>
          <p>View my complete collection of design work, motion graphics, and visual effects</p>
          <a 
            href="https://drive.google.com/file/d/1fex-y7cQ5nDl3tTRKRzx0cr0foUuy36K/view" 
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
            <Icon name="mdi:arrow-right" />
          </a>
        </div>
      </section>

      <!-- YouTube Channel -->
      <section class="section">
        <h2 class="section-title">Filmmaking & Content Creation</h2>
        <div class="video-showcase">
          <div class="video-card">
            <Icon name="mdi:youtube" size="64" class="youtube-icon" />
            <h3>Shaaf Studio</h3>
            <p>Check out my YouTube channel for video essays, short films, and creative experiments</p>
            <a 
              href="https://www.youtube.com/@ShaafStudio" 
              class="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Channel
              <Icon name="mdi:arrow-right" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Creative Studio - Shaaf Yousaf',
  description: '11+ years of digital artistry, filmmaking, and visual storytelling',
})

// Placeholder design work - Replace with actual images
const designWork = [
  {
    title: 'Motion Graphics',
    description: 'Dynamic animations and visual effects',
    category: 'Animation',
    image: '/resources/logo.png',
    size: 'large',
  },
  {
    title: 'UI/UX Design',
    description: 'User interface and experience design',
    category: 'Design',
    image: '/resources/pic.png',
    size: 'medium',
  },
  {
    title: 'Brand Identity',
    description: 'Logo design and brand development',
    category: 'Branding',
    image: '/resources/GLOW.png',
    size: 'small',
  },
  {
    title: 'Film Production',
    description: 'Short films and video content',
    category: 'Video',
    image: '/resources/Zarab.png',
    size: 'wide',
  },
  {
    title: 'Digital Art',
    description: 'Illustrations and digital paintings',
    category: 'Art',
    image: '/resources/PortfolioPromo.png',
    size: 'medium',
  },
]
</script>

<style scoped>
.studio-page {
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

/* Masonry Grid */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.masonry-item {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition-base);
}

.masonry-item:hover {
  transform: translateY(-4px);
}

.masonry-small {
  grid-row: span 1;
}

.masonry-medium {
  grid-row: span 2;
}

.masonry-large {
  grid-column: span 2;
  grid-row: span 2;
}

.masonry-wide {
  grid-column: span 2;
  grid-row: span 1;
}

.masonry-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.masonry-item:hover .masonry-image {
  transform: scale(1.1);
}

.masonry-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing-md);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.masonry-item:hover .masonry-overlay {
  opacity: 1;
}

.masonry-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.masonry-description {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin: 0 0 0.5rem;
}

.masonry-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid var(--color-gold);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* CTA Section */
.cta-section {
  padding: var(--spacing-xl) 0;
}

.cta-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  max-width: 700px;
  margin: 0 auto;
}

.cta-icon {
  color: var(--color-gold);
  margin-bottom: var(--spacing-md);
}

.cta-card h2 {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-sm);
}

.cta-card p {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

/* Video Showcase */
.video-showcase {
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-md);
}

.video-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  max-width: 600px;
}

.youtube-icon {
  color: #FF0000;
  margin-bottom: var(--spacing-md);
}

.video-card h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
}

.video-card p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

@media (max-width: 768px) {
  .masonry-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
  
  .masonry-large,
  .masonry-wide {
    grid-column: span 1;
  }
}
</style>

<script setup lang="ts">
import { Motion } from 'motion-v'

const hackathons = [
  {
    event: 'GenAI Genesis 2025 (Toronto)',
    title: 'imagEHR',
    subtitle: 'AI-Powered Clinical Data Extraction & CDISC Mapping',
    description: 'Automates the extraction of EHR (text) and X-ray (image) data, then maps it to CDISC-compliant SDTM formats for streamlined research, clinical trials, and regulatory use.',
    prize: 'Google & HBSU Best Healthcare AI Hack',
    tech: ['Python', 'Flask', 'Cohere LLM', 'YOLOv5', 'JavaScript'],
    buttons: [
      { label: 'DevPost', url: 'https://devpost.com/software/imagehr' }
    ],
    image: '/images/sample.gif'
  },
  {
    event: 'DaVinci Competition 2026 (Toronto)',
    title: 'idrak',
    subtitle: 'Early MVP for a Real-time assistant for context-aware visual tasks.',
    description: 'A camera-based assistant engine that builds temporal context from live video, enabling real-time visual guidance, safety warnings, and step-by-step assistance for hands-on tasks.',
    prize: '1st Place Overall Winner',
    tech: ['Python', 'TypeScript', 'Vue', 'FastAPI', 'OpenCV', 'Anthropic', 'Whisper'],
    buttons: [
      { label: 'DevPost', url: 'https://devpost.com/software/idrak' }
    ],
    image: '/images/BannerLinkedin.png'
  }
]

const emit = defineEmits<{
  (e: 'item-click', item: any): void
}>()
</script>

<template>
  <div class="published-hackathons-section">
    <!-- Published Software Section -->
    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3, delay: 0.1 }"
    >
      <h2 class="section-title">Published Software</h2>
      <div class="featured-project-wrapper">
        <FeaturedProject @click="emit('item-click', $event)" />
      </div>
    </Motion>

    <!-- Hackathon Wins Section -->
    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3, delay: 0.2 }"
    >
      <h2 class="section-title">Hackathon Wins</h2>
      <div class="hackathons-grid">
        <Motion
          v-for="(hack, index) in hackathons"
          :key="'hack-' + index"
          :initial="{ opacity: 0, y: 15 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.3, delay: 0.25 + index * 0.1 }"
          class="hackathon-card"
          @click="emit('item-click', hack)"
        >
          <div class="prize-header">
            <Icon name="heroicons:trophy-20-solid" class="trophy-icon" />
            <span class="prize-text">{{ hack.prize }}</span>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ hack.title }}</h3>
            <p class="event-name">{{ hack.event }}</p>
            <p class="card-subtitle">{{ hack.subtitle }}</p>
            <div class="tech-preview">
              <span v-for="(tech, i) in hack.tech.slice(0, 3)" :key="i" class="tech-tag">{{ tech }}</span>
              <span v-if="hack.tech.length > 3" class="more-tag">+{{ hack.tech.length - 3 }}</span>
            </div>
          </div>
        </Motion>
      </div>
    </Motion>
  </div>
</template>

<style scoped>
.published-hackathons-section {
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

.section-title:not(:first-child) {
  margin-top: 4rem;
}

/* Featured Project Wrapper - Border radius applied here */
.featured-project-wrapper {
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 3rem;
}

/* Hackathon Styles */
.hackathons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}

.hackathon-card {
  background: #ffffff;
  border: 2px solid #ffd700;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.hackathon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.2);
  border-color: #ff8c00;
}

.prize-header {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.trophy-icon {
  width: 18px;
  height: 18px;
  color: #000000;
  flex-shrink: 0;
}

.prize-text {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  color: #000000;
  letter-spacing: -0.2px;
}

.card-content {
  padding: 0.875rem;
}

.card-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #000000;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.card-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.6rem;
  line-height: 1.4;
}

.event-name {
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  color: #888888;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hackathon-card .card-title {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.hackathon-card .card-subtitle {
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
}

/* Tech Tags */
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

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .section-title:not(:first-child) {
    margin-top: 3rem;
  }

  .featured-project-wrapper {
    border-radius: 30px;
  }

  .hackathons-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
    margin-bottom: 2.5rem;
  }
}
</style>

<script setup lang="ts">
import { Motion } from 'motion-v'

const publishedSoftware = [
  {
    title: 'Slowed Enhanced',
    subtitle: 'A Google Chrome Extension for Advanced Audio Controls',
    category: 'Published on Chrome Web Store',
    stats: {
      installs: '600+',
      users: '75',
      productHuntRank: '14'
    },
    tech: ['.NET C#', 'Blazor Framework', 'MudBlazor', 'JavaScript'],
    link: 'https://chromewebstore.google.com/detail/mbknnccopgggeedhnloodppflepboggp',
    image: '/resources/PortfolioPromo.png'
  }
]

const hackathons = [
  {
    event: 'GenAI Genesis 2025 (Toronto)',
    title: 'imagEHR',
    subtitle: 'AI-Powered Clinical Data Extraction & CDISC Mapping',
    description: 'Automates the extraction of EHR (text) and X-ray (image) data, then maps it to CDISC-compliant SDTM formats for streamlined research, clinical trials, and regulatory use.',
    prize: 'Google & HBSU Best Healthcare AI Hack',
    tech: ['Python', 'Flask', 'Cohere LLM', 'YOLOv5', 'JavaScript'],
    link: 'https://devpost.com/software/imagehr',
    image: '/resources/openaitoz.png'
  },
  {
    event: 'DaVinci Competition 2026 (Toronto)',
    title: 'idrak',
    subtitle: 'Early MVP for a Real-time assistant for context-aware visual tasks.',
    description: 'A camera-based assistant engine that builds temporal context from live video, enabling real-time visual guidance, safety warnings, and step-by-step assistance for hands-on tasks.',
    prize: '1st Place Overall Winner',
    tech: ['Python', 'TypeScript', 'Vue', 'FastAPI', 'OpenCV', 'Anthropic', 'Whisper'],
    link: 'https://devpost.com/software/idrak',
    image: '/images/gffe.png'
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
      :initial="{ opacity: 0, filter: 'blur(8px)', y: 20 }"
      :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
      :transition="{ duration: 0.5, delay: 0.1 }"
    >
      <h2 class="section-title">Published Software</h2>
      <div class="published-grid">
        <Motion
          v-for="(project, index) in publishedSoftware"
          :key="'pub-' + index"
          :initial="{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }"
          :animate="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :transition="{ duration: 0.4, delay: 0.2 }"
          class="published-card"
          @click="emit('item-click', project)"
        >
          <div class="published-image">
            <img :src="project.image" :alt="project.title" />
            <div class="type-badge published-badge">Published</div>
          </div>
          <div class="published-content">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-subtitle">{{ project.subtitle }}</p>
            <p class="card-category">{{ project.category }}</p>
            
            <!-- Stats -->
            <div v-if="project.stats" class="stats-grid">
              <div v-if="project.stats.installs" class="stat-item">
                <div class="stat-value">{{ project.stats.installs }}</div>
                <div class="stat-label">Installs</div>
              </div>
              <div v-if="project.stats.users" class="stat-item">
                <div class="stat-value">{{ project.stats.users }}</div>
                <div class="stat-label">Active Users</div>
              </div>
              <div v-if="project.stats.productHuntRank" class="stat-item">
                <div class="stat-value">#{{ project.stats.productHuntRank }}</div>
                <div class="stat-label">Product Hunt</div>
              </div>
            </div>

            <div class="tech-preview">
              <span v-for="(tech, i) in project.tech.slice(0, 3)" :key="i" class="tech-tag">{{ tech }}</span>
              <span v-if="project.tech.length > 3" class="more-tag">+{{ project.tech.length - 3 }}</span>
            </div>
          </div>
        </Motion>
      </div>
    </Motion>

    <!-- Hackathon Wins Section -->
    <Motion
      :initial="{ opacity: 0, filter: 'blur(8px)', y: 20 }"
      :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
      :transition="{ duration: 0.5, delay: 0.3 }"
    >
      <h2 class="section-title">Hackathon Wins</h2>
      <div class="hackathons-grid">
        <Motion
          v-for="(hack, index) in hackathons"
          :key="'hack-' + index"
          :initial="{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }"
          :animate="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :transition="{ duration: 0.4, delay: 0.4 + index * 0.08 }"
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
  padding: 0.5rem 0;
}

.section-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  color: #000000;
  margin-bottom: 0.875rem;
  letter-spacing: -0.3px;
}

.section-title:not(:first-child) {
  margin-top: 2rem;
}

/* Published Software Styles */
.published-grid {
  display: grid;
  gap: 1rem;
}

.published-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: row;
  min-height: 200px;
}

.published-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.published-image {
  width: 280px;
  min-width: 280px;
  background: #f8f8f8;
  position: relative;
  flex-shrink: 0;
}

.published-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.type-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.published-badge {
  background: #000000;
}

.published-content {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #000000;
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.card-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  color: #666666;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.card-category {
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  color: #888888;
  margin-bottom: 0.875rem;
}

/* Stats Grid */
.stats-grid {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.875rem;
  padding: 0.75rem 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #000000;
  line-height: 1;
}

.stat-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Hackathon Styles */
.hackathons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
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
  .published-card {
    flex-direction: column;
  }

  .published-image {
    width: 100%;
    height: 180px;
  }

  .stats-grid {
    gap: 1rem;
  }

  .hackathons-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
}
</style>

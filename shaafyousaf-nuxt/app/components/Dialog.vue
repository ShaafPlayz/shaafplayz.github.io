<script setup lang="ts">
import { Motion } from 'motion-v'

// Props - data passed to the dialog
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  tech: {
    type: Array as () => string[],
    default: () => []
  },
  link: {
    type: String,
    default: ''
  },
  // Extra fields for different types of content
  prize: {
    type: String,
    default: ''
  },
  event: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  // Experience-specific fields
  location: {
    type: String,
    default: ''
  },
  duration: {
    type: String,
    default: ''
  },
  employmentType: {
    type: String,
    default: ''
  },
  responsibilities: {
    type: Array as () => string[],
    default: () => []
  },
  achievements: {
    type: Array as () => string[],
    default: () => []
  },
  type: {
    type: String,
    default: ''
  },
  // Published Software fields
  stats: {
    type: Object as () => { users?: string; installs?: string; productHuntRank?: string; platform?: string },
    default: () => ({})
  },
  // Hackathon fields
  tagline: {
    type: String,
    default: ''
  },
  award: {
    type: String,
    default: ''
  },
  prizeAmount: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: ''
  },
  demoType: {
    type: String,
    default: ''
  }
})

// Emit event to parent when dialog should close
const emit = defineEmits(['close'])

// Function to close the dialog
const closeDialog = () => {
  emit('close')
}

// Close dialog when clicking outside content area
const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeDialog()
  }
}
</script>

<template>
  <!-- Only show dialog if isOpen is true -->
  <Teleport to="body">
    <Transition name="dialog">
      <div 
        v-if="isOpen" 
        class="dialog-backdrop"
        @click="handleBackdropClick"
      >
        <!-- Motion wrapper for the dialog content -->
        <Motion
          :initial="{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }"
          :animate="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :exit="{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }"
          :transition="{ duration: 0.4, ease: 'easeOut' }"
        >
          <div class="dialog-content" @click.stop>
            <!-- Close button -->
            <button class="close-button" @click="closeDialog">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <!-- Title at the top -->
            <div class="dialog-header">
              <Motion
                :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
                :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
                :transition="{ duration: 0.4, delay: 0.1 }"
              >
                <h2 class="dialog-title">{{ title }}</h2>
              </Motion>
            </div>

            <!-- Scrollable Dialog Body -->
            <div class="dialog-body">
              <!-- Dialog Image inside scrollable area -->
              <Motion
                v-if="image"
                :initial="{ opacity: 0, filter: 'blur(15px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.5, delay: 0.15 }"
                class="dialog-image-wrapper"
              >
                <img :src="image" :alt="title" class="dialog-image" />
              </Motion>

              <!-- Subtitle -->
              <Motion
                v-if="subtitle"
                :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
                :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
                :transition="{ duration: 0.4, delay: 0.2 }"
              >
                <p class="dialog-subtitle">{{ subtitle }}</p>
              </Motion>

              <!-- Category/Event/Company Info -->
              <Motion
                v-if="category || event || company || (type === 'experience' && (location || duration || employmentType)) || award || prizeAmount || status || demoType"
                :initial="{ opacity: 0, filter: 'blur(10px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.4, delay: 0.25 }"
                class="dialog-meta"
              >
                <span v-if="prize" class="meta-badge prize">
                  <i class="fas fa-trophy"></i>
                  {{ prize }}
                </span>
                <span v-if="award && award !== prize" class="meta-badge award">
                  <i class="fas fa-award"></i>
                  {{ award }}
                </span>
                <span v-if="event" class="meta-badge event">{{ event }}</span>
                <span v-if="category" class="meta-badge category">{{ category }}</span>
                <span v-if="company" class="meta-badge company">{{ company }}</span>
                <span v-if="position" class="meta-badge position">{{ position }}</span>
                <span v-if="date" class="meta-badge date">{{ date }}</span>
                <!-- Hackathon-specific meta -->
                <span v-if="prizeAmount" class="meta-badge prize-amount">
                  <i class="fas fa-dollar-sign"></i>
                  {{ prizeAmount }}
                </span>
                <span v-if="demoType" class="meta-badge demo-type">
                  <i class="fas fa-video"></i>
                  {{ demoType }}
                </span>
                <span v-if="status" class="meta-badge status">
                  <i class="fas fa-rocket"></i>
                  {{ status }}
                </span>
                <!-- Experience-specific meta -->
                <span v-if="type === 'experience' && employmentType" class="meta-badge employment-type">{{ employmentType }}</span>
                <span v-if="type === 'experience' && duration" class="meta-badge duration">
                  <i class="fas fa-clock"></i>
                  {{ duration }}
                </span>
                <span v-if="type === 'experience' && location" class="meta-badge location">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ location }}
                </span>
              </Motion>

              <!-- Published Software Stats -->
              <Motion
                v-if="stats && (stats.users || stats.installs || stats.productHuntRank)"
                :initial="{ opacity: 0, filter: 'blur(10px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.4, delay: 0.28 }"
              >
                <div class="dialog-stats-showcase">
                  <h4 class="stats-heading">Live Statistics</h4>
                  <div class="dialog-stats-grid">
                    <div v-if="stats.users" class="dialog-stat-card">
                      <i class="fas fa-users"></i>
                      <div class="stat-info">
                        <span class="stat-number">{{ stats.users }}</span>
                        <span class="stat-text">Active Users</span>
                      </div>
                    </div>
                    <div v-if="stats.installs" class="dialog-stat-card">
                      <i class="fas fa-download"></i>
                      <div class="stat-info">
                        <span class="stat-number">{{ stats.installs }}</span>
                        <span class="stat-text">Total Installs</span>
                      </div>
                    </div>
                    <div v-if="stats.productHuntRank" class="dialog-stat-card">
                      <i class="fas fa-trophy"></i>
                      <div class="stat-info">
                        <span class="stat-number">#{{ stats.productHuntRank }}</span>
                        <span class="stat-text">Product Hunt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion>

              <!-- Hackathon Tagline -->
              <Motion
                v-if="tagline"
                :initial="{ opacity: 0, filter: 'blur(10px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.4, delay: 0.28 }"
              >
                <div class="dialog-tagline">
                  <i class="fas fa-quote-left"></i>
                  <p>{{ tagline }}</p>
                </div>
              </Motion>

              <!-- Description -->
              <Motion
                v-if="description"
                :initial="{ opacity: 0, filter: 'blur(10px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.4, delay: 0.3 }"
              >
                <p class="dialog-description">{{ description }}</p>
              </Motion>

              <!-- Responsibilities (Experience only) -->
              <Motion
                v-if="type === 'experience' && responsibilities.length > 0"
                :initial="{ opacity: 0, filter: 'blur(10px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.4, delay: 0.35 }"
              >
                <div class="experience-section">
                  <h4 class="section-heading">Key Responsibilities</h4>
                  <ul class="experience-list">
                    <li v-for="(item, index) in responsibilities" :key="index">{{ item }}</li>
                  </ul>
                </div>
              </Motion>

              <!-- Achievements (Experience only) -->
              <Motion
                v-if="type === 'experience' && achievements.length > 0"
                :initial="{ opacity: 0, filter: 'blur(10px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.4, delay: 0.4 }"
              >
                <div class="experience-section">
                  <h4 class="section-heading">Key Achievements</h4>
                  <ul class="experience-list achievements">
                    <li v-for="(item, index) in achievements" :key="index">{{ item }}</li>
                  </ul>
                </div>
              </Motion>

              <!-- Tech Stack -->
              <Motion
                v-if="tech.length > 0"
                :initial="{ opacity: 0, filter: 'blur(10px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.4, delay: type === 'experience' ? 0.45 : 0.35 }"
              >
                <div class="tech-stack-dialog">
                  <h4 class="tech-title">Technologies</h4>
                  <div class="tech-tags">
                    <span 
                      v-for="(techItem, index) in tech" 
                      :key="index" 
                      class="tech-tag"
                    >
                      {{ techItem }}
                    </span>
                  </div>
                </div>
              </Motion>
            </div>

            <!-- Fixed Footer with Link Button -->
            <div v-if="link" class="dialog-footer">
              <Motion
                :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
                :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
                :transition="{ duration: 0.4, delay: 0.4 }"
              >
                <a 
                  :href="link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="dialog-link-button"
                >
                  View Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </Motion>
            </div>
          </div>
        </Motion>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Backdrop - darkens the background */
.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 17%);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
  overflow-y: auto;
}

/* Dialog content container */
.dialog-content {
  background: #000000;
  border-radius: 18px;
  width: 900px;
  height: 85vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Close button */
.close-button {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-button:hover {
  background: #ffd700;
  color: #000000;
  transform: rotate(90deg);
  border-color: #ffd700;
}

/* Dialog header - fixed at top */
.dialog-header {
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  flex-shrink: 0;
}

/* Dialog image - large and prominent */
.dialog-image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.dialog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Dialog body content */
.dialog-body {
  padding: 1.25rem 1.5rem;
  flex: 1;
  overflow-y: auto;
}

.dialog-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: clamp(1.35rem, 4vw, 1.75rem);
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.dialog-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.85rem;
  margin-top: 0;
  line-height: 1.5;
}

/* Meta information badges */
.dialog-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.meta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
}

.meta-badge.prize {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2));
  border-color: #ffd700;
  color: #ffd700;
}

.meta-badge.employment-type {
  background: rgba(255, 215, 0, 0.1);
  border-color: rgba(255, 215, 0, 0.5);
  color: #ffd700;
}

.meta-badge.duration,
.meta-badge.location {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.meta-badge.award {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2));
  border-color: #ffd700;
  color: #ffd700;
}

.meta-badge.prize-amount {
  background: rgba(255, 215, 0, 0.15);
  border-color: rgba(255, 215, 0, 0.6);
  color: #ffd700;
}

.meta-badge.demo-type {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.meta-badge.status {
  background: rgba(255, 215, 0, 0.1);
  border-color: rgba(255, 215, 0, 0.5);
  color: #ffd700;
}

.meta-badge i {
  font-size: 0.75rem;
}

/* Published Software Stats Showcase */
.dialog-stats-showcase {
  margin-bottom: 1rem;
  padding: 0.85rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 140, 0, 0.05));
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 10px;
}

.stats-heading {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  color: #ffd700;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.dialog-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.6rem;
}

.dialog-stat-card {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(255, 215, 0, 0.1);
}

.dialog-stat-card > i {
  font-size: 1.25rem;
  color: #ffd700;
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.stat-number {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #ffffff;
  line-height: 1;
}

.stat-text {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Hackathon Tagline */
.dialog-tagline {
  margin-bottom: 1rem;
  padding: 0.85rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.1));
  border-left: 2.5px solid #ffd700;
  border-radius: 6px;
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  box-shadow: 0 1px 3px rgba(255, 215, 0, 0.2);
}

.dialog-tagline > i {
  font-size: 0.9rem;
  color: #ffd700;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

.dialog-tagline p {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-style: italic;
  margin: 0;
}

/* Description text */
.dialog-description {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
  margin-bottom: 1rem;
}

/* Experience-specific sections */
.experience-section {
  margin-bottom: 1rem;
}

.section-heading {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  color: #ffd700;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-left: 2.5px solid #ffd700;
  padding-left: 0.5rem;
}

.experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0.45rem;
  column-gap: 0.85rem;
}

.experience-list li {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  padding-left: 1.15rem;
  position: relative;
}

.experience-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #ffd700;
  font-weight: 700;
  font-size: 0.85rem;
}

.experience-list.achievements li::before {
  content: '✓';
  color: #ffd700;
  font-size: 0.9rem;
}

/* Tech stack section */
.tech-stack-dialog {
  margin-bottom: 1rem;
}

.tech-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  color: #ffd700;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.3rem 0.65rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(255, 215, 0, 0.1);
}

.tech-tag:hover {
  background: rgba(255, 215, 0, 0.1);
  border-color: #ffd700;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(255, 215, 0, 0.2);
}

/* Link button */
.dialog-link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  border: 1px solid #ffd700;
  border-radius: 8px;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  color: #000000;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
}

.dialog-link-button:hover {
  background: linear-gradient(135deg, #ff8c00, #ffd700);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.5);
}

/* Dialog footer - fixed at bottom */
.dialog-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
  flex-shrink: 0;
  background: #000000;
}

/* Scrollbar styling for dialog content */
.dialog-content::-webkit-scrollbar {
  width: 8px;
}

.dialog-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.dialog-content::-webkit-scrollbar-thumb {
  background: rgba(255, 215, 0, 0.3);
  border-radius: 12px;
}

.dialog-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 215, 0, 0.5);
}

.dialog-body::-webkit-scrollbar {
  width: 8px;
}

.dialog-body::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.dialog-body::-webkit-scrollbar-thumb {
  background: rgba(255, 215, 0, 0.3);
  border-radius: 12px;
}

.dialog-body::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 215, 0, 0.5);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .dialog-backdrop {
    padding: 0.75rem;
  }

  .dialog-content {
    width: 100%;
    height: 90vh;
  }

  .dialog-image-wrapper {
    height: 150px;
    margin-bottom: 0.875rem;
  }

  .dialog-header {
    padding: 1rem 1rem 0.75rem;
  }

  .dialog-body {
    padding: 1rem;
  }

  .dialog-footer {
    padding: 0.875rem 1rem;
  }

  .dialog-title {
    font-size: 1.25rem;
  }

  .close-button {
    top: 0.75rem;
    right: 0.75rem;
    width: 34px;
    height: 34px;
  }

  .experience-list {
    grid-template-columns: 1fr;
  }

  .dialog-stats-grid {
    grid-template-columns: 1fr;
  }

  .dialog-stat-card {
    padding: 0.55rem;
  }

  .dialog-tagline {
    padding: 0.85rem;
    gap: 0.6rem;
  }
}
</style>

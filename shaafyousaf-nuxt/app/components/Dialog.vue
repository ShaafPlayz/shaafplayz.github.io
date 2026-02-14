<script setup lang="ts">
import { Motion } from 'motion-v'
import { ref, computed } from 'vue'

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
  images: {
    type: Array as () => string[],
    default: () => []
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

// Carousel state
const currentImageIndex = ref(0)

// Compute image array (use images prop if available, otherwise fallback to single image)
const imageArray = computed(() => {
  if (props.images && props.images.length > 0) {
    return props.images
  }
  return props.image ? [props.image] : []
})

// Carousel navigation
const nextImage = () => {
  if (imageArray.value.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % imageArray.value.length
  }
}

const prevImage = () => {
  if (imageArray.value.length > 0) {
    currentImageIndex.value = (currentImageIndex.value - 1 + imageArray.value.length) % imageArray.value.length
  }
}

const goToImage = (index: number) => {
  currentImageIndex.value = index
}

// Function to close the dialog
const closeDialog = () => {
  emit('close')
  currentImageIndex.value = 0
}

// Close dialog when clicking outside content area
const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeDialog()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="dialog">
      <div 
        v-if="isOpen" 
        class="dialog-backdrop"
        @click="handleBackdropClick"
      >
        <Motion
          :initial="{ opacity: 0, filter: 'blur(20px)' }"
          :animate="{ opacity: 1, filter: 'blur(0px)' }"
          :exit="{ opacity: 0, filter: 'blur(20px)' }"
          :transition="{ 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1]
          }"
        >
          <div class="dialog-content" @click.stop>
            <!-- Close Button - Floating -->
            <Motion
              :initial="{ opacity: 0, filter: 'blur(10px)' }"
              :animate="{ opacity: 1, filter: 'blur(0px)' }"
              :transition="{ duration: 0.5, delay: 0.3 }"
            >
              <button class="close-button" @click="closeDialog">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </Motion>

            <!-- Two Column Layout -->
            <div class="dialog-grid">
              <!-- LEFT COLUMN: Image Carousel -->
              <Motion
                v-if="imageArray.length > 0"
                :initial="{ opacity: 0, filter: 'blur(20px)' }"
                :animate="{ opacity: 1, filter: 'blur(0px)' }"
                :transition="{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }"
                class="dialog-left"
              >
                <div class="carousel-wrapper">
                  <!-- Image Display -->
                  <div class="carousel-display">
                    <div 
                      v-for="(img, index) in imageArray" 
                      :key="index"
                      class="carousel-slide"
                      :class="{ active: index === currentImageIndex }"
                    >
                      <img 
                        :src="img" 
                        :alt="`${title} - Image ${index + 1}`"
                      />
                    </div>
                  </div>

                  <!-- Floating Navigation -->
                  <div v-if="imageArray.length > 1" class="carousel-controls">
                    <button class="carousel-btn" @click="prevImage">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    
                    <div class="carousel-dots">
                      <button
                        v-for="(img, index) in imageArray"
                        :key="index"
                        class="dot"
                        :class="{ active: index === currentImageIndex }"
                        @click="goToImage(index)"
                      ></button>
                    </div>

                    <button class="carousel-btn" @click="nextImage">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>

                  <!-- Image Counter Badge -->
                  <div v-if="imageArray.length > 1" class="image-badge">
                    {{ currentImageIndex + 1 }} / {{ imageArray.length }}
                  </div>
                </div>
              </Motion>

              <!-- RIGHT COLUMN: Content -->
              <div class="dialog-right">
                <div class="dialog-scroll" ref="scrollContainer">
                  <!-- Header Section -->
                  <div class="content-section">
                    <Motion
                      :initial="{ opacity: 0, filter: 'blur(10px)' }"
                      :animate="{ opacity: 1, filter: 'blur(0px)' }"
                      :transition="{ duration: 0.5, delay: 0.2 }"
                    >
                      <h2 class="title">{{ title }}</h2>
                      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
                    </Motion>

                    <!-- Primary Badges -->
                    <Motion
                      v-if="prize || award || company || position || event"
                      :initial="{ opacity: 0, filter: 'blur(10px)' }"
                      :animate="{ opacity: 1, filter: 'blur(0px)' }"
                      :transition="{ duration: 0.4, delay: 0.3 }"
                      class="badges-primary"
                    >
                      <span v-if="prize" class="badge badge-prize">
                        <i class="fas fa-trophy"></i>
                        {{ prize }}
                      </span>
                      <span v-if="award && award !== prize" class="badge badge-award">
                        <i class="fas fa-award"></i>
                        {{ award }}
                      </span>
                      <span v-if="company" class="badge badge-company">{{ company }}</span>
                      <span v-if="position" class="badge badge-position">{{ position }}</span>
                      <span v-if="event" class="badge badge-event">{{ event }}</span>
                    </Motion>

                    <!-- Secondary Info Pills -->
                    <Motion
                      v-if="category || date || (type === 'experience' && (location || duration || employmentType)) || prizeAmount || status || demoType"
                      :initial="{ opacity: 0, filter: 'blur(8px)' }"
                      :animate="{ opacity: 1, filter: 'blur(0px)' }"
                      :transition="{ duration: 0.4, delay: 0.35 }"
                      class="pills-container"
                    >
                      <span v-if="category" class="pill">{{ category }}</span>
                      <span v-if="date" class="pill"><i class="fas fa-calendar"></i>{{ date }}</span>
                      <span v-if="prizeAmount" class="pill pill-highlighted"><i class="fas fa-dollar-sign"></i>{{ prizeAmount }}</span>
                      <span v-if="demoType" class="pill"><i class="fas fa-video"></i>{{ demoType }}</span>
                      <span v-if="status" class="pill pill-highlighted"><i class="fas fa-rocket"></i>{{ status }}</span>
                      <span v-if="type === 'experience' && employmentType" class="pill">{{ employmentType }}</span>
                      <span v-if="type === 'experience' && duration" class="pill"><i class="fas fa-clock"></i>{{ duration }}</span>
                      <span v-if="type === 'experience' && location" class="pill"><i class="fas fa-map-marker-alt"></i>{{ location }}</span>
                    </Motion>
                  </div>

                  <!-- Stats Showcase -->
                  <Motion
                    v-if="stats && (stats.users || stats.installs || stats.productHuntRank)"
                    :initial="{ opacity: 0, filter: 'blur(10px)' }"
                    :animate="{ opacity: 1, filter: 'blur(0px)' }"
                    :transition="{ duration: 0.5, delay: 0.4 }"
                    class="content-section"
                  >
                    <div class="stats-grid">
                      <div v-if="stats.users" class="stat-card">
                        <div class="stat-icon">
                          <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-content">
                          <div class="stat-value">{{ stats.users }}</div>
                          <div class="stat-label">Active Users</div>
                        </div>
                      </div>
                      <div v-if="stats.installs" class="stat-card">
                        <div class="stat-icon">
                          <i class="fas fa-download"></i>
                        </div>
                        <div class="stat-content">
                          <div class="stat-value">{{ stats.installs }}</div>
                          <div class="stat-label">Total Installs</div>
                        </div>
                      </div>
                      <div v-if="stats.productHuntRank" class="stat-card">
                        <div class="stat-icon">
                          <i class="fas fa-trophy"></i>
                        </div>
                        <div class="stat-content">
                          <div class="stat-value">#{{ stats.productHuntRank }}</div>
                          <div class="stat-label">Product Hunt</div>
                        </div>
                      </div>
                    </div>
                  </Motion>

                  <!-- Tagline -->
                  <Motion
                    v-if="tagline"
                    :initial="{ opacity: 0, filter: 'blur(10px)' }"
                    :animate="{ opacity: 1, filter: 'blur(0px)' }"
                    :transition="{ duration: 0.5, delay: 0.45 }"
                    class="content-section"
                  >
                    <div class="tagline-card">
                      <i class="fas fa-quote-left"></i>
                      <p>{{ tagline }}</p>
                    </div>
                  </Motion>

                  <!-- Description -->
                  <Motion
                    v-if="description"
                    :initial="{ opacity: 0, filter: 'blur(10px)' }"
                    :animate="{ opacity: 1, filter: 'blur(0px)' }"
                    :transition="{ duration: 0.5, delay: 0.5 }"
                    class="content-section"
                  >
                    <p class="description">{{ description }}</p>
                  </Motion>

                  <!-- Experience Sections -->
                  <Motion
                    v-if="type === 'experience' && responsibilities.length > 0"
                    :initial="{ opacity: 0, filter: 'blur(10px)' }"
                    :animate="{ opacity: 1, filter: 'blur(0px)' }"
                    :transition="{ duration: 0.5, delay: 0.55 }"
                    class="content-section"
                  >
                    <div class="info-block">
                      <h4 class="block-title">Key Responsibilities</h4>
                      <ul class="info-list">
                        <li v-for="(item, index) in responsibilities" :key="index">{{ item }}</li>
                      </ul>
                    </div>
                  </Motion>

                  <Motion
                    v-if="type === 'experience' && achievements.length > 0"
                    :initial="{ opacity: 0, filter: 'blur(10px)' }"
                    :animate="{ opacity: 1, filter: 'blur(0px)' }"
                    :transition="{ duration: 0.5, delay: 0.6 }"
                    class="content-section"
                  >
                    <div class="info-block">
                      <h4 class="block-title">Key Achievements</h4>
                      <ul class="info-list achievements">
                        <li v-for="(item, index) in achievements" :key="index">{{ item }}</li>
                      </ul>
                    </div>
                  </Motion>

                  <!-- Tech Stack -->
                  <Motion
                    v-if="tech.length > 0"
                    :initial="{ opacity: 0, filter: 'blur(10px)' }"
                    :animate="{ opacity: 1, filter: 'blur(0px)' }"
                    :transition="{ duration: 0.5, delay: type === 'experience' ? 0.65 : 0.55 }"
                    class="content-section"
                  >
                    <div class="tech-section">
                      <h4 class="tech-heading">Technologies</h4>
                      <div class="tech-grid">
                        <span 
                          v-for="(techItem, index) in tech" 
                          :key="index" 
                          class="tech-chip"
                        >
                          {{ techItem }}
                        </span>
                      </div>
                    </div>
                  </Motion>

                  <!-- Spacer for footer -->
                  <div class="footer-spacer"></div>
                </div>

                <!-- Floating Footer with Link -->
                <Motion
                  v-if="link"
                  :initial="{ opacity: 0, filter: 'blur(10px)' }"
                  :animate="{ opacity: 1, filter: 'blur(0px)' }"
                  :transition="{ duration: 0.5, delay: 0.7 }"
                  class="dialog-footer-floating"
                >
                  <a 
                    :href="link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="action-button"
                  >
                    <span>View Project</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </Motion>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </Transition>
  </Teleport>
</template>


<style scoped>
/* ===== BACKDROP ===== */
.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(20px) saturate(180%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

/* ===== DIALOG CONTAINER ===== */
.dialog-content {
  background: linear-gradient(145deg, 
    rgba(10, 10, 10, 0.98) 0%, 
    rgba(20, 20, 20, 0.95) 50%,
    rgba(15, 15, 15, 0.98) 100%
  );
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 24px;
  width: 1100px;
  max-width: 95vw;
  height: 750px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 215, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* ===== CLOSE BUTTON ===== */
.close-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: #ffd700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 200;
}

.close-button:hover {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #000;
  border-color: transparent;
  transform: scale(1.05) rotate(90deg);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
}

/* ===== TWO COLUMN GRID ===== */
.dialog-grid {
  display: grid;
  grid-template-columns: 45% 55%;
  height: 100%;
  overflow: hidden;
}

/* ===== LEFT COLUMN: IMAGE CAROUSEL ===== */
.dialog-left {
  position: relative;
  background: #000;
  border-right: 1px solid rgba(255, 215, 0, 0.1);
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-display {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.95) contrast(1.05);
}

/* Carousel Controls */
.carousel-controls {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px) saturate(180%);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 50px;
  z-index: 10;
}

.carousel-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 215, 0, 0.3);
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-btn:hover {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #000;
  border-color: transparent;
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.dot:hover {
  background: rgba(255, 215, 0, 0.6);
  transform: scale(1.3);
}

.dot.active {
  width: 28px;
  border-radius: 10px;
  background: linear-gradient(90deg, #ffd700, #ffed4e);
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.5);
}

/* Image Counter Badge */
.image-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-family: 'Nexa', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffd700;
  letter-spacing: 0.5px;
  z-index: 10;
}

/* ===== RIGHT COLUMN: CONTENT ===== */
.dialog-right {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.dialog-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2.5rem 2.5rem 1rem;
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
.dialog-scroll::-webkit-scrollbar {
  width: 8px;
}

.dialog-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.03);
}

.dialog-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.4), rgba(255, 215, 0, 0.2));
  border-radius: 10px;
  transition: background 0.3s;
}

.dialog-scroll::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.6), rgba(255, 215, 0, 0.4));
}

/* Content Sections */
.content-section {
  margin-bottom: 1.75rem;
}

.content-section:last-child {
  margin-bottom: 0;
}

/* ===== TYPOGRAPHY ===== */
.title {
  font-family: 'Nexa', sans-serif;
  font-weight: 900;
  font-size: 2.25rem;
  line-height: 1.1;
  color: #fff;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.03em;
  text-shadow: 0 2px 10px rgba(255, 215, 0, 0.1);
}

.subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.25rem 0;
}

.description {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

/* ===== BADGES & PILLS ===== */
.badges-primary {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 1rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: 10px;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid;
}

.badge i {
  font-size: 0.85rem;
}

.badge-prize,
.badge-award {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(255, 140, 0, 0.2));
  color: #ffd700;
  border-color: rgba(255, 215, 0, 0.4);
}

.badge-prize:hover,
.badge-award:hover {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.35), rgba(255, 140, 0, 0.3));
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

.badge-company,
.badge-position,
.badge-event {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.95);
  border-color: rgba(255, 255, 255, 0.15);
}

.badge-company:hover,
.badge-position:hover,
.badge-event:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}

.pills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.3s ease;
}

.pill i {
  font-size: 0.7rem;
  opacity: 0.8;
}

.pill:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
}

.pill-highlighted {
  color: rgba(255, 215, 0, 0.95);
  border-color: rgba(255, 215, 0, 0.2);
  background: rgba(255, 215, 0, 0.08);
}

/* ===== STATS SHOWCASE ===== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 140, 0, 0.05));
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 14px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card:hover {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.1));
  border-color: rgba(255, 215, 0, 0.3);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.2);
}

.stat-icon {
  flex-shrink: 0;
}

.stat-icon i {
  font-size: 1.75rem;
  color: #ffd700;
  filter: drop-shadow(0 2px 6px rgba(255, 215, 0, 0.4));
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1;
  color: #fff;
  letter-spacing: -0.02em;
}

.stat-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
}

/* ===== TAGLINE CARD ===== */
.tagline-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(255, 140, 0, 0.08));
  border-left: 3px solid #ffd700;
  border-radius: 12px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.tagline-card i {
  font-size: 1rem;
  color: rgba(255, 215, 0, 0.8);
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.tagline-card p {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.95rem;
  font-style: italic;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* ===== INFO BLOCKS (Experience) ===== */
.info-block {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.block-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #ffd700;
  margin: 0 0 1rem 0;
  padding-left: 0.75rem;
  border-left: 3px solid #ffd700;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
  column-gap: 1.25rem;
}

.info-list li {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  padding-left: 1.5rem;
  position: relative;
}

.info-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #ffd700;
  font-weight: 700;
}

.info-list.achievements li::before {
  content: '✓';
  font-size: 1rem;
}

/* ===== TECH STACK ===== */
.tech-section {
  padding: 1.25rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.tech-heading {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 215, 0, 0.85);
  margin: 0 0 0.85rem 0;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  padding: 0.4rem 0.85rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.tech-chip:hover {
  background: rgba(255, 215, 0, 0.12);
  border-color: rgba(255, 215, 0, 0.3);
  color: #ffd700;
  transform: translateY(-2px);
}

/* ===== FOOTER ===== */
.footer-spacer {
  height: 90px;
}

.dialog-footer-floating {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2.5rem;
  background: linear-gradient(to top, rgba(10, 10, 10, 0.98), rgba(10, 10, 10, 0.95), transparent);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 20;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  border: none;
  border-radius: 12px;
  font-family: 'Nexa', sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  color: #000;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.35);
  position: relative;
  overflow: hidden;
}

.action-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ffed4e, #ffd700);
  opacity: 0;
  transition: opacity 0.4s;
}

.action-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5);
}

.action-button:hover::before {
  opacity: 1;
}

.action-button span,
.action-button svg {
  position: relative;
  z-index: 1;
}

/* ===== TRANSITIONS ===== */
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
  .dialog-content {
    width: 90vw;
    height: 85vh;
  }

  .dialog-grid {
    grid-template-columns: 40% 60%;
  }

  .dialog-scroll {
    padding: 2rem 2rem 1rem;
  }

  .dialog-footer-floating {
    padding: 1.25rem 2rem;
  }

  .title {
    font-size: 1.85rem;
  }
}

@media (max-width: 768px) {
  .dialog-backdrop {
    padding: 0;
  }

  .dialog-content {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }

  .dialog-grid {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
  }

  .dialog-left {
    border-right: none;
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
  }

  .carousel-controls {
    bottom: 1.5rem;
    padding: 0.65rem 1.25rem;
  }

  .carousel-btn {
    width: 34px;
    height: 34px;
  }

  .image-badge {
    top: 1rem;
    left: 1rem;
    padding: 0.4rem 0.85rem;
    font-size: 0.8rem;
  }

  .close-button {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  .dialog-scroll {
    padding: 1.5rem 1.5rem 1rem;
  }

  .dialog-footer-floating {
    padding: 1.25rem 1.5rem;
  }

  .title {
    font-size: 1.65rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .info-list {
    grid-template-columns: 1fr;
  }

  .badges-primary {
    gap: 0.5rem;
  }

  .badge {
    font-size: 0.85rem;
    padding: 0.55rem 0.95rem;
  }

  .footer-spacer {
    height: 75px;
  }
}

@media (max-width: 480px) {
  .dialog-grid {
    grid-template-rows: 250px 1fr;
  }

  .title {
    font-size: 1.5rem;
  }

  .action-button {
    width: 100%;
    justify-content: center;
    padding: 0.9rem 1.5rem;
  }
}
</style>

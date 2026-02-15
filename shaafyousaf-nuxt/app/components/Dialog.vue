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
  buttons: {
    type: Array as () => Array<{ label: string; url: string; icon?: string }>,
    default: () => []
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
        <div class="dialog-content" @click.stop>
          <!-- Close Button - Floating -->
          <button class="close-button" @click="closeDialog">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <!-- Single Column Layout with Scrolling Content -->
            <div class="dialog-scroll" ref="scrollContainer">
              <!-- Image Carousel at Top -->
              <div v-if="imageArray.length > 0" class="content-section carousel-section">
              <!-- Image Carousel at Top -->
              <div v-if="imageArray.length > 0" class="content-section carousel-section">
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
              </div>

              <!-- Header Section -->
              <div class="content-section">
                <h2 class="title">{{ title }}</h2>
                <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>

                <!-- Primary Info as Plain Text -->
                <div v-if="prize || award || company || position || event" class="meta-info">
                  <span v-if="prize" class="meta-item meta-prize">🏆 {{ prize }}</span>
                  <span v-if="award && award !== prize" class="meta-item meta-award">{{ award }}</span>
                  <span v-if="company" class="meta-item">{{ company }}</span>
                  <!-- <span v-if="position" class="meta-item">{{ position }}</span> -->
                  <span v-if="event" class="meta-item">{{ event }}</span>
                </div>

                <!-- Secondary Info as Plain Text -->
                <div 
                  v-if="category || date || (type === 'experience' && (location || duration || employmentType)) || prizeAmount || status || demoType"
                  class="meta-info meta-secondary"
                >
                  <span v-if="category" class="meta-item">{{ category }}</span>
                  <span v-if="date" class="meta-item">{{ date }}</span>
                  <span v-if="prizeAmount" class="meta-item meta-prize">{{ prizeAmount }}</span>
                  <span v-if="demoType" class="meta-item">{{ demoType }}</span>
                  <span v-if="status" class="meta-item meta-prize">{{ status }}</span>
                  <span v-if="type === 'experience' && employmentType" class="meta-item">{{ employmentType }}</span>
                  <span v-if="type === 'experience' && duration" class="meta-item">{{ duration }}</span>
                  <span v-if="type === 'experience' && location" class="meta-item">{{ location }}</span>
                </div>
              </div>

              <!-- Stats Showcase -->
              <div 
                v-if="stats && (stats.users || stats.installs || stats.productHuntRank)"
                class="content-section"
              >
                <div class="stats-grid">
                  <div v-if="stats.users" class="stat-item">
                    <div class="stat-value">{{ stats.users }}</div>
                    <div class="stat-label">Active Users</div>
                  </div>
                  <div v-if="stats.installs" class="stat-item">
                    <div class="stat-value">{{ stats.installs }}</div>
                    <div class="stat-label">Total Installs</div>
                  </div>
                  <div v-if="stats.productHuntRank" class="stat-item">
                    <div class="stat-value">#{{ stats.productHuntRank }}</div>
                    <div class="stat-label">Product Hunt Rank</div>
                  </div>
                </div>
              </div>

              <!-- Tagline -->
              <div v-if="tagline" class="content-section">
                <p class="tagline">{{ tagline }}</p>
              </div>

              <!-- Description -->
              <div v-if="description" class="content-section">
                <p class="description">{{ description }}</p>
              </div>

              <!-- Experience Sections -->
              <div v-if="type === 'experience' && responsibilities.length > 0" class="content-section">
                <h4 class="section-heading">RESPONSIBILITIES</h4>
                <ul class="info-list">
                  <li v-for="(item, index) in responsibilities" :key="index">{{ item }}</li>
                </ul>
              </div>

              <div v-if="type === 'experience' && achievements.length > 0" class="content-section">
                <h4 class="section-heading">ACHIEVEMENTS</h4>
                <ul class="info-list">
                  <li v-for="(item, index) in achievements" :key="index">{{ item }}</li>
                </ul>
              </div>

              <!-- Tech Stack -->
              <div v-if="tech.length > 0" class="content-section">
                <h4 class="section-heading">TECHNOLOGIES</h4>
                <div class="tech-list">
                  <span 
                    v-for="(techItem, index) in tech" 
                    :key="index" 
                    class="tech-item"
                  >
                    {{ techItem }}<span v-if="index < tech.length - 1" class="tech-separator"> · </span>
                  </span>
                </div>
              </div>

              <!-- Spacer for footer -->
              <div class="footer-spacer"></div>
            </div>

            <!-- Floating Footer with Buttons -->
            <div v-if="buttons.length > 0 || link" class="dialog-footer-floating">
              <!-- New buttons array (if provided) -->
              <div v-if="buttons.length > 0" class="action-buttons-container">
                <a 
                  v-for="(button, index) in buttons"
                  :key="index"
                  :href="button.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="action-button"
                >
                  <span>{{ button.label }}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <!-- Fallback to single link (for backwards compatibility) -->
              <a 
                v-else-if="link"
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
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>


<style scoped>
/* ===== BACKDROP ===== */
.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

/* ===== DIALOG CONTAINER ===== */
.dialog-content {
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 800px;
  max-width: 95vw;
  height: 90vh;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* ===== CLOSE BUTTON ===== */
.close-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 200;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}

/* ===== SCROLLING CONTENT ===== */
.dialog-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2.5rem;
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
.dialog-scroll::-webkit-scrollbar {
  width: 8px;
}

.dialog-scroll::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.dialog-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.dialog-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* ===== CAROUSEL SECTION ===== */
.carousel-section {
  margin-bottom: 2rem;
}

/* ===== CAROUSEL SECTION ===== */
.carousel-section {
  margin-bottom: 2rem;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.carousel-display {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
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
}

/* Carousel Controls */
.carousel-controls {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  z-index: 10;
}

.carousel-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.carousel-dots {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.7);
}

.dot.active {
  width: 20px;
  border-radius: 10px;
  background: #ffffff;
}

/* Image Counter Badge */
.image-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.4rem 0.8rem;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-family: 'Nexa', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  z-index: 10;
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
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1.5rem 0;
}

.description {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.section-heading {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 1rem 0;
}

.tagline {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* ===== META INFO (Simple Text) ===== */
.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-family: 'Nexa', sans-serif;
}

.meta-item {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}

.meta-prize {
  color: rgba(255, 215, 0, 0.9);
  font-weight: 500;
}

.meta-secondary {
  font-size: 0.85rem;
}

.meta-secondary .meta-item {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

/* ===== STATS SHOWCASE ===== */
.stats-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.stat-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.5);
}

/* ===== INFO LISTS (Experience) ===== */
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-list li {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  padding-left: 1.25rem;
  position: relative;
}

.info-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
}

/* ===== TECH STACK ===== */
.tech-list {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
}

.tech-item {
  display: inline;
}

.tech-separator {
  color: rgba(255, 255, 255, 0.3);
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

.action-buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #ffffff;
  border: none;
  border-radius: 6px;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #000000;
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.action-button svg {
  opacity: 0.8;
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
    height: 80vh;
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
    height: 80vh;
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

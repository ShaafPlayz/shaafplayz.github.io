<script setup lang="ts">
import { Motion } from 'motion-v'

interface Props {
  backgroundImage?: string
  overlayImage?: string
  hostname?: string
  serverConnected?: boolean
  uptime?: string
  alignRight?: boolean
  secondsUntilNextPing?: number
  pingInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  backgroundImage: '/optimized/images/homeserveroldPic_png.webp',
  overlayImage: '/optimized/resources/blackSideOverlayGradient.webp',
  hostname: 'the-great-library',
  serverConnected: false,
  uptime: '--',
  alignRight: false,
  secondsUntilNextPing: 60,
  pingInterval: 60
})

// 0% = just pinged (empty bar), 100% = next ping imminent (full bar)
const progressPercent = computed(() => {
  const elapsed = props.pingInterval - props.secondsUntilNextPing
  return Math.max(0, Math.min(100, (elapsed / props.pingInterval) * 100))
})
</script>

<template>
  <div class="homelab-section">
    <div class="homelab-background">
      <img 
        :src="backgroundImage" 
        alt="Background" 
        class="background-image"
        loading="lazy"
      />
      <img 
        :src="overlayImage" 
        alt="Overlay" 
        :class="['gradient-overlay', { 'flipped': alignRight }]"
        loading="lazy"
      />
    </div>

    <div class="homelab-content" :class="{ 'align-right': alignRight }">
      <div class="homelab-text-container">
        <ClientOnly>
          <Motion
            tag="h1"
            class="homelab-title"
            :initial="{ opacity: 0, filter: 'blur(10px)', y: 20 }"
            :while-in-view="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
            :transition="{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }"
          >
            HomeLab
          </Motion>
          <Motion
            tag="p"
            class="homelab-subtitle"
            :initial="{ opacity: 0, filter: 'blur(8px)', y: 15 }"
            :while-in-view="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
            :transition="{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }"
          >
            The cloud is just someone else's computer. This one's mine.
          </Motion>
          <template #fallback>
            <h1 class="homelab-title">HomeLab</h1>
            <p class="homelab-subtitle">The cloud is just someone else's computer. This one's mine.</p>
          </template>
        </ClientOnly>

        <ClientOnly>
          <!-- Motion wrapper handles the scroll-entrance animation only -->
          <Motion
            tag="div"
            class="server-status-motion-wrapper"
            :initial="{ opacity: 0, filter: 'blur(8px)', y: 20 }"
            :while-in-view="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
            :transition="{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }"
          >
            <!-- Inner pill handles online/offline dimming via CSS -->
            <div :class="['server-status-bar', { 'status-bar-offline': !serverConnected }]">
              <div class="status-bar-row">
                <div class="status-bar-name-status">
                  <div class="status-bar-item">
                    <Icon name="heroicons:server-stack" class="tab-icon" />
                    <span class="status-bar-value">{{ hostname }}</span>
                  </div>
                  <div class="status-bar-item">
                    <span :class="['status-indicator', serverConnected ? 'online' : 'offline']">
                      {{ serverConnected ? 'ONLINE' : 'LINK-DOWN' }}
                    </span>
                  </div>
                </div>

                <template v-if="serverConnected">
                  <div class="status-bar-divider"></div>
                  <div class="status-bar-item">
                    <span class="status-bar-value">{{ uptime }}</span>
                  </div>
                </template>

                <template v-else>
                  <div class="status-bar-divider"></div>
                  <div class="status-bar-item">
                    <span class="status-bar-value">Next ping in {{ secondsUntilNextPing }}s</span>
                  </div>
                </template>
              </div>

              <!-- Progress bar fills 0→100% over ping interval, only when online -->
              <div v-if="serverConnected" class="ping-progress-track">
                <div 
                  class="ping-progress-fill" 
                  :style="{ width: progressPercent + '%' }"
                ></div>
              </div>
            </div>
          </Motion>

          <template #fallback>
            <div class="server-status-motion-wrapper">
              <div class="server-status-bar">
                <div class="status-bar-row">
                  <div class="status-bar-name-status">
                    <div class="status-bar-item">
                      <span class="status-bar-value">{{ hostname }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homelab-section {
  position: relative;
  height: 40vh;
  min-height: 400px;
  width: 100%;
  overflow: hidden;
}

.homelab-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 40%;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
}

.gradient-overlay.flipped {
  transform: scaleX(-1);
}

.homelab-content {
  position: relative;
  z-index: 10;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.homelab-text-container {
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 5vh;
}

.homelab-content.align-right {
  align-items: flex-end;
}

.homelab-content.align-right .homelab-text-container {
  text-align: right;
}

.homelab-content.align-right .homelab-subtitle {
  margin-left: auto;
}

.homelab-content.align-right .server-status-motion-wrapper {
  margin-left: auto;
}

.homelab-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: clamp(3rem, 8vw, 5rem);
  color: #ffffff;
  line-height: 0.95;
  margin: 0; 
  margin-bottom: 0.5rem;
  letter-spacing: -2px;
  margin-left: -0.3rem;
}

.homelab-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  color: #e0e0e0;
  margin: 0;
  margin-bottom: 0.5rem;
  max-width: 880px;
}

/* Motion entrance wrapper — just controls sizing */
.server-status-motion-wrapper {
  max-width: fit-content;
}

/* Server Status Bar */
.server-status-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 0.75rem 1.25rem;
  overflow: hidden;
  transition: opacity 0.5s ease;
}

.server-status-bar.status-bar-offline {
  opacity: 0.6;
}

/* Row inside the pill */
.status-bar-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.status-bar-name-status {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.status-bar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-bar-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.5px;
}

.status-bar-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.85rem;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.status-indicator {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 1px;
  padding: 0.25rem 0.75rem;
  border-radius: 40px;
  transition: all 0.3s ease;
}

.status-indicator.online {
  color: #000000;
  background: #00f83a;
}

.status-indicator.offline {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
}

.status-bar-divider {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
}

/* Progress bar — fills 0→100% as time elapses since last ping */
.ping-progress-track {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
}

.ping-progress-fill {
  height: 100%;
  background: rgba(0, 248, 58, 0.75);
  transition: width 1.05s linear;
}

/* Responsive design */
@media (max-width: 768px) {
  .homelab-section {
    height: 45vh;
    min-height: 350px;
  }

  .background-image {
    transform: scale(1.2);
    object-position: center 40%;
  }

  .homelab-content {
    padding: 0 2rem;
  }

  .homelab-text-container {
    padding-top: 8vh;
  }

  .homelab-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
    margin-bottom: 1rem;
  }

  .server-status-bar {
    padding: 0.6rem 1rem;
  }

  .status-bar-row {
    gap: 0.75rem;
  }

  .status-bar-label {
    font-size: 0.7rem;
  }

  .status-bar-value {
    font-size: 0.75rem;
  }

  .status-indicator {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
}

@media (max-width: 480px) {
  .homelab-section {
    height: 40vh;
    min-height: 320px;
  }

  .background-image {
    transform: scale(1.3);
    object-position: center 40%;
  }

  .homelab-content {
    padding: 0 1.5rem;
  }

  .homelab-title {
    letter-spacing: -1px;
  }

  .server-status-bar {
    padding: 1rem;
  }

  .status-bar-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .status-bar-divider {
    display: none;
  }
}
</style>

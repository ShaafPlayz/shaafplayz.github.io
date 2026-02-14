<script setup lang="ts">
import { Motion } from 'motion-v'

interface Hardware {
  cpu: string
  ram: string
  storage: string
  gpu: string
  motherboard: string
  network: string
}

interface Props {
  serverConnected: boolean
  hardware: Hardware
}

defineProps<Props>()
</script>

<template>
  <Motion
    class="info-card hardware-card"
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.5 }"
  >
    <h3 class="card-title">
      <Icon name="heroicons:computer-desktop-20-solid" />
      Hardware Specifications
      <span v-if="!serverConnected" class="offline-badge">
        <Icon name="heroicons:signal-slash-20-solid" />
      </span>
    </h3>
    <div class="hardware-grid">
      <div class="hardware-item">
        <span class="hw-label">Processor</span>
        <span class="hw-value">{{ hardware.cpu }}</span>
      </div>
      <div class="hardware-item">
        <span class="hw-label">Memory</span>
        <span class="hw-value">{{ hardware.ram }}</span>
      </div>
      <div class="hardware-item">
        <span class="hw-label">Storage</span>
        <span class="hw-value">{{ hardware.storage }}</span>
      </div>
      <div class="hardware-item">
        <span class="hw-label">Graphics</span>
        <span class="hw-value">{{ hardware.gpu }}</span>
      </div>
      <div class="hardware-item">
        <span class="hw-label">Motherboard</span>
        <span class="hw-value">{{ hardware.motherboard }}</span>
      </div>
      <div class="hardware-item">
        <span class="hw-label">Network</span>
        <span class="hw-value">{{ hardware.network }}</span>
      </div>
    </div>
  </Motion>
</template>

<style scoped>
/* Info Cards */
.info-card {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.info-card:hover {
  background: transparent;
  border-color: transparent;
}

.card-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #ffffff;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.5px;
}

.card-title svg {
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.7);
}

/* Offline Badge */
.offline-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-left: auto;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.offline-badge svg {
  width: 12px;
  height: 12px;
  color: rgba(255, 255, 255, 0.6);
}

/* Hardware Grid */
.hardware-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.hardware-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  transition: all 0.3s ease;
}

.hardware-item:hover {
  background: transparent;
  border-color: transparent;
}

.hw-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hw-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: #ffffff;
}

/* Responsive design */
@media (max-width: 1024px) {
  .hardware-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .info-card {
    padding: 1rem;
  }

  .card-title {
    font-size: 0.9rem;
  }
}
</style>

<script setup lang="ts">
import { Motion } from 'motion-v'

interface Service {
  name: string
  status: string
  port: number
}

interface Props {
  serverConnected: boolean
  services: Service[]
}

defineProps<Props>()
</script>

<template>
  <Motion
    class="info-card services-card"
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.4 }"
  >
    <h3 class="card-title">
      <Icon name="heroicons:squares-2x2-20-solid" />
      Running Services
      <span v-if="!serverConnected" class="offline-badge">
        <Icon name="heroicons:signal-slash-20-solid" />
      </span>
    </h3>
    <div class="services-list">
      <div 
        v-for="service in services" 
        :key="service.name"
        class="service-item"
        :class="{ inactive: service.status !== 'running' }"
      >
        <div class="service-info">
          <span class="service-name">{{ service.name }}</span>
          <span class="service-port">:{{ service.port }}</span>
        </div>
        <span 
          class="service-status"
          :class="service.status"
        >
          {{ service.status }}
        </span>
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

/* Services List */
.services-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0;
  background: transparent;
  border: none;
  border-radius: 0;
  transition: all 0.3s ease;
}

.service-item:hover {
  background: transparent;
  border-color: transparent;
  transform: translateX(4px);
}

.service-item.inactive {
  opacity: 0.5;
}

.service-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.service-name {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: #ffffff;
}

.service-port {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Courier New', monospace;
}

.service-status {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
}

.service-status.running {
  background: transparent;
  color: #4ade80;
  border: none;
}

.service-status.stopped {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  border: none;
}

/* Responsive design */
@media (max-width: 480px) {
  .info-card {
    padding: 1rem;
  }

  .card-title {
    font-size: 0.9rem;
  }
}
</style>

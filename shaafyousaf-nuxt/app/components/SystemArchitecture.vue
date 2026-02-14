<script setup lang="ts">
import { Motion } from 'motion-v'

interface Props {
  serverConnected: boolean
}

defineProps<Props>()
</script>

<template>
  <Motion
    class="info-card architecture-card"
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.3 }"
  >
    <h3 class="card-title">
      <Icon name="heroicons:cube-transparent-20-solid" />
      System Architecture
      <span v-if="!serverConnected" class="offline-badge">
        <Icon name="heroicons:signal-slash-20-solid" />
      </span>
    </h3>
    <div class="architecture-diagram">
      <div class="arch-layer">
        <div class="arch-node gateway">
          <span class="node-label">Internet Gateway</span>
          <span class="node-detail">EdgeRouter X</span>
        </div>
      </div>
      <div class="arch-connector"></div>
      <div class="arch-layer">
        <div class="arch-node switch">
          <span class="node-label">Switch</span>
          <span class="node-detail">Unifi 8-Port</span>
        </div>
      </div>
      <div class="arch-connector"></div>
      <div class="arch-layer multi">
        <div class="arch-node server">
          <span class="node-label">Main Server</span>
          <span class="node-detail">the-great-library</span>
        </div>
        <div class="arch-node client">
          <span class="node-label">Clients</span>
          <span class="node-detail">3 Devices</span>
        </div>
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
  color: #ffd700;
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

/* Architecture Diagram */
.architecture-diagram {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.arch-layer {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.arch-layer.multi {
  gap: 1rem;
}

.arch-node {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0.875rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-width: 140px;
  transition: all 0.3s ease;
}

.arch-node:hover {
  background: transparent;
  transform: none;
}

.arch-node.gateway,
.arch-node.switch,
.arch-node.server,
.arch-node.client {
  border-color: transparent;
  background: transparent;
}

.node-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  color: #ffffff;
}

.node-detail {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
}

.arch-connector {
  width: 2px;
  height: 20px;
  background: rgba(255, 215, 0, 0.3);
  margin: 0 auto;
}

/* Responsive design */
@media (max-width: 768px) {
  .arch-layer.multi {
    flex-direction: column;
  }

  .arch-node {
    min-width: 100%;
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

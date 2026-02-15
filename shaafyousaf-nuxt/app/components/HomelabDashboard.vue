<script setup lang="ts">
interface Stats {
  cpu: { usage: number; temp: number; cores: number }
  ram: { used: number; total: number; percentage: number }
  disk: { used: number; total: number; percentage: number }
  network: { upload: number; download: number }
}

interface Service {
  name: string
  status: string
  port: number
}

interface Hardware {
  cpu: string
  ram: string
  storage: string
  gpu: string
  motherboard: string
  network: string
}

interface Props {
  serverConnected?: boolean
  stats?: Stats
  chartHistory?: {
    cpu: number[]
    ram: number[]
    disk: number[]
    network: number[]
  }
  services?: Service[]
  hardware?: Hardware
}

const props = withDefaults(defineProps<Props>(), {
  serverConnected: false,
  stats: () => ({
    cpu: { usage: 0, temp: 0, cores: 4 },
    ram: { used: 0, total: 16, percentage: 0 },
    disk: { used: 0, total: 240, percentage: 0 },
    network: { upload: 0, download: 0 }
  }),
  chartHistory: () => ({
    cpu: Array(30).fill(0),
    ram: Array(30).fill(0),
    disk: Array(30).fill(0),
    network: Array(30).fill(0)
  }),
  services: () => [
    { name: 'SSH Server', status: 'stopped', port: 22 },
    { name: 'Web Server', status: 'stopped', port: 80 },
    { name: 'Node.js App', status: 'stopped', port: 3000 },
    { name: 'Database', status: 'stopped', port: 5432 },
    { name: 'Docker', status: 'stopped', port: 2375 },
    { name: 'Monitoring', status: 'stopped', port: 9090 }
  ],
  hardware: () => ({
    cpu: 'Intel Core i7-8565U @ 1.80GHz',
    ram: '16GB DDR4 2667MHz (2x 8GB)',
    storage: '240GB Kingston SA400M8 SSD',
    gpu: 'NVIDIA GeForce MX130',
    motherboard: 'Dell Inspiron 5584',
    network: 'Realtek RTL810xE Ethernet'
  })
})
</script>

<template>
  <div class="dashboard-section" :class="{ 'dashboard-offline': !serverConnected }">
    <div class="dashboard-container">
      <!-- Live System Stats -->
      <SystemMetricsChart 
        :server-connected="serverConnected" 
        :stats="stats" 
        :chart-history="chartHistory" 
      />

      <!-- Architecture & Services Row -->
      <div class="two-column-grid">
        <!-- Architecture Diagram -->
        <!-- <SystemArchitecture :server-connected="serverConnected" /> -->

        <!-- Services Status -->
        <!-- <ServicesStatus :server-connected="serverConnected" :services="services" /> -->
      </div>

      <!-- Hardware Specs -->
      <HardwareSpecs :server-connected="serverConnected" :hardware="hardware" />
    </div>
  </div>
</template>

<style scoped>
/* Dashboard Section */
.dashboard-section {
  background: #000000;
  min-height: auto;
  padding: 1.5rem 0 2rem;
  position: relative;
}

.dashboard-section.dashboard-offline .dashboard-container > * {
  opacity: 0.7;
}

.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Two Column Grid */
.two-column-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Responsive design */
@media (max-width: 1024px) {
  .two-column-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    padding: 0 1.5rem;
    gap: 0.75rem;
  }
}
</style>

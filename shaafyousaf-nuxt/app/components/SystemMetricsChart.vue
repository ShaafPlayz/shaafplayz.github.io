<script setup lang="ts">
import { Motion } from 'motion-v'
import { ref, computed } from 'vue'

interface Stats {
  cpu: { usage: number; temp: number; cores: number }
  ram: { used: number; total: number; percentage: number }
  disk: { used: number; total: number; percentage: number }
  network: { upload: number; download: number }
}

interface Props {
  serverConnected: boolean
  stats: Stats
  chartHistory: {
    cpu: number[]
    ram: number[]
    disk: number[]
    network: number[]
  }
}

const props = defineProps<Props>()

// Chart dimensions (responsive - will be set to container width)
const chartWidth = ref(1200)
const chartHeight = 300
const padding = { top: 20, right: 20, bottom: 40, left: 50 }
const historyLength = 30

// Generate path for line chart
const generatePath = (data: number[], max: number = 100) => {
  const width = chartWidth.value - padding.left - padding.right
  const height = chartHeight - padding.top - padding.bottom
  
  const points = data.map((value, index) => {
    const x = padding.left + (index / (historyLength - 1)) * width
    const y = padding.top + height - (value / max) * height
    return `${x},${y}`
  })
  
  return `M ${points.join(' L ')}`
}

// Computed paths for each metric
const cpuPath = computed(() => generatePath(props.chartHistory.cpu))
const ramPath = computed(() => generatePath(props.chartHistory.ram))
const diskPath = computed(() => generatePath(props.chartHistory.disk))
const networkPath = computed(() => generatePath(props.chartHistory.network, 100))
</script>

<template>
  <Motion
    class="stats-chart-container"
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.2 }"
  >
    <div class="chart-card">
      <div class="chart-header">
        <h3 class="chart-title">
          System Metrics
          <span v-if="!serverConnected" class="offline-badge">
            <Icon name="heroicons:signal-slash-20-solid" />
            OFFLINE
          </span>
        </h3>
        <div class="chart-legend">
          <div class="legend-item">
            <span class="legend-color" style="background: #ffffff"></span>
            <span class="legend-label">CPU</span>
            <span class="legend-value">{{ stats.cpu.usage }}%</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background: #ff8c00"></span>
            <span class="legend-label">RAM</span>
            <span class="legend-value">{{ stats.ram.percentage }}%</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background: rgba(255, 255, 255, 0.6)"></span>
            <span class="legend-label">Storage</span>
            <span class="legend-value">{{ stats.disk.percentage }}%</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background: rgba(255, 140, 0, 0.5)"></span>
            <span class="legend-label">Network</span>
            <span class="legend-value">{{ stats.network.download }} MB/s</span>
          </div>
        </div>
      </div>
      
      <div class="chart-wrapper">
        <svg :width="chartWidth" :height="chartHeight" :viewBox="`0 0 ${chartWidth} ${chartHeight}`" preserveAspectRatio="none" class="chart-svg">
          <!-- Grid lines -->
          <line
            v-for="i in 5"
            :key="`grid-${i}`"
            :x1="padding.left"
            :y1="padding.top + ((i - 1) * (chartHeight - padding.top - padding.bottom) / 4)"
            :x2="chartWidth - padding.right"
            :y2="padding.top + ((i - 1) * (chartHeight - padding.top - padding.bottom) / 4)"
            stroke="rgba(255, 255, 255, 0.1)"
            stroke-width="1"
          />
          
          <!-- Y-axis labels -->
          <text
            v-for="i in 5"
            :key="`label-${i}`"
            :x="padding.left - 10"
            :y="padding.top + ((i - 1) * (chartHeight - padding.top - padding.bottom) / 4) + 5"
            text-anchor="end"
            fill="rgba(255, 255, 255, 0.5)"
            font-size="12"
          >
            {{ 100 - ((i - 1) * 25) }}%
          </text>
          
          <!-- Chart lines -->
          <path
            :d="cpuPath"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            class="chart-line"
          />
          <path
            :d="ramPath"
            fill="none"
            stroke="#ff8c00"
            stroke-width="2"
            class="chart-line"
          />
          <path
            :d="diskPath"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            stroke-width="2"
            class="chart-line"
          />
          <path
            :d="networkPath"
            fill="none"
            stroke="rgba(255, 140, 0, 0.5)"
            stroke-width="2"
            class="chart-line"
          />
        </svg>
      </div>
      
      <div class="chart-details">
        <div class="detail-item">
          <Icon name="heroicons:cpu-chip-20-solid" class="detail-icon" />
          <span class="detail-label">CPU</span>
          <span class="detail-value">{{ stats.cpu.usage }}% • {{ stats.cpu.temp }}°C • {{ stats.cpu.cores }} Cores</span>
        </div>
        <div class="detail-item">
          <Icon name="heroicons:circle-stack-20-solid" class="detail-icon" />
          <span class="detail-label">RAM</span>
          <span class="detail-value">{{ stats.ram.used.toFixed(1) }} GB / {{ stats.ram.total }} GB</span>
        </div>
        <div class="detail-item">
          <Icon name="heroicons:server-20-solid" class="detail-icon" />
          <span class="detail-label">Storage</span>
          <span class="detail-value">{{ stats.disk.used }} GB / {{ stats.disk.total }} GB</span>
        </div>
        <div class="detail-item">
          <Icon name="heroicons:signal-20-solid" class="detail-icon" />
          <span class="detail-label">Network</span>
          <span class="detail-value">↑ {{ stats.network.upload }} MB/s • ↓ {{ stats.network.download }} MB/s</span>
        </div>
      </div>
    </div>
  </Motion>
</template>

<style scoped>
/* Stats Chart */
.stats-chart-container {
  width: 100%;
  margin-bottom: 0.5rem;
}

.chart-card {
  background: transparent;
  border: none;
  padding: 0;
  transition: all 0.3s ease;
  width: 100%;
}

.chart-card:hover {
  background: transparent;
  border: none;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.chart-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.chart-legend {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.legend-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.legend-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
}

.chart-wrapper {
  width: 100%;
  overflow: visible;
  margin-bottom: 1rem;
}

.chart-svg {
  display: block;
  width: 100%;
  height: auto;
}

.chart-line {
  stroke-linejoin: round;
  stroke-linecap: round;
}

.chart-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: none;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.detail-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.7);
  flex-shrink: 0;
}

.detail-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  min-width: 60px;
}

.detail-value {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
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

/* Responsive design */
@media (max-width: 1024px) {
  .chart-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .chart-card {
    padding: 0;
  }

  .chart-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .chart-legend {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .chart-wrapper {
    overflow-x: scroll;
  }
}
</style>

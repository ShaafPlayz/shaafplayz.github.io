<template>
  <div class="page">
    <div class="terminal">
      <!-- Terminal Header -->
      <div class="terminal-header">
        <div class="dot red" />
        <div class="dot yellow" />
        <div class="dot green" />
        <span class="title">Ugly Links</span>
      </div>

      <!-- Terminal Body -->
      <div class="terminal-body">

        <!-- Right: Hero + Cards -->
        <div class="hero-section">
          <!-- <div class="version-tag">v1 · PRIVACY POLICY</div> -->

          <h1 class="hero-title">Privacy<br />Policy</h1>
          <p class="hero-subtitle">We don't collect any data.</p>

          <div class="cards">
            <div class="feature-card" v-for="(item, i) in items" :key="i">
              <!-- <span class="feature-label">{{ item.tag }}</span> -->
              <div class="feature-content">
                <div class="feature-name">{{ item.name }}</div>
                <div class="feature-description">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    tag: 'DATA',
    name: 'No Collection',
    desc: 'Nothing is collected, logged, or transmitted from your device.',
  },
  {
    tag: 'STORAGE',
    name: 'Local Only',
    desc: 'All settings are saved locally on your device. No servers involved.',
  }
]
</script>

<style scoped>
@font-face {
  font-family: 'Brownist';
  src: url('/fonts/Brownist.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page {
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
}

/* Terminal */
.terminal {
  width: 100%;
  max-width: 760px;
  background: #111111;
  border-radius: 12px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.terminal-header {
  padding: 5px 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: #0e0e0e;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot.red    { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green  { background: #27c93f; }

.title {
  color: #4a4a4a;
  font-size: 25px;
  margin-left: auto;
  font-family: 'Brownist', sans-serif;
  text-decoration: none;
  cursor: default;
  letter-spacing: 0.02em;
  transition: color 0.3s;
}

/* Hero panel */
.terminal-body {
  display: flex;
  min-height: 420px;
}

.hero-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 48px 44px 36px;
}

.hero-title {
  font-size: 58px;
  font-weight: 700;
  line-height: 0.92;
  color: #88c900;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 14px;
  color: #555;
  margin-bottom: 36px;
  line-height: 1.6;
  font-weight: 400;
}

/* Cards */
.cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-card {
  border: 1px solid rgba(136, 201, 0, 0.12);
  border-radius: 8px;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.feature-card:hover {
  background: rgba(136, 201, 0, 0.04);
  border-color: rgba(136, 201, 0, 0.3);
}

.feature-name {
  font-size: 13px;
  color: #e0e0e0;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.feature-description {
  font-size: 12px;
  color: #484848;
  line-height: 1.6;
  font-weight: 400;
}

/* Responsive */
@media (max-width: 600px) {
  .hero-title { font-size: 40px; }
  .hero-section { padding: 32px 28px 28px; }
}
</style>
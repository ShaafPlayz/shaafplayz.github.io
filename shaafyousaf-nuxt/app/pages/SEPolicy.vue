<template>
  <div class="page">
    <div class="terminal">
      <!-- Terminal Header -->
      <div class="terminal-header">
        <div class="dot red" />
        <div class="dot yellow" />
        <div class="dot green" />
        <span class="title">slowed enhanced</span>
      </div>

      <!-- Terminal Body -->
      <div class="terminal-body">

        <!-- Right: Hero + Cards -->
        <div class="hero-section">
          <div class="version-tag">v1 · PRIVACY POLICY</div>

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
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page {
  min-height: 100vh;
  background: #0d1117;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'JetBrains Mono', monospace;
}

/* Terminal */
.terminal {
  width: 100%;
  max-width: 900px;
  background: #000000;
  border-radius: 8px;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  border: 1px solid #30363d;
}

.terminal-header {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #30363d;
  background: #0d1117;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red    { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green  { background: #27c93f; }

.title {
  color: #6a6a6a;
  font-size: 13px;
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
  letter-spacing: 0.05em;
}
.title:hover { color: #88c900; }

/* Body: two columns */
.terminal-body {
  display: flex;
  min-height: 480px;
  max-height: 620px;
}

/* Left code panel */
.code-panel {
  width: 320px;
  flex-shrink: 0;
  padding: 28px 24px;
  border-right: 1px solid #30363d;
  overflow: hidden;
  background: #000;
}

.code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.9;
  color: #c9d1d9;
  white-space: pre;
}

.comment  { color: #8b949e; }
.keyword  { color: #ff7b72; }
.variable, .property { color: #79c0ff; }
.string   { color: #a5d6ff; }
.function, .method { color: #d2a8ff; }

.cursor {
  display: inline-block;
  color: #88c900;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Right hero panel */
.hero-section {
  flex: 1;
  background: linear-gradient(135deg, #0d1117 0%, #000000 100%);
  display: flex;
  flex-direction: column;
  padding: 36px 40px 24px;
  overflow: hidden;
}

.version-tag {
  display: inline-block;
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 18px;
  padding: 4px 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 3px;
  width: fit-content;
}

.hero-title {
  font-size: 54px;
  font-weight: 700;
  line-height: 0.95;
  color: #88c900;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 13px;
  color: #8b949e;
  margin-bottom: 28px;
  line-height: 1.7;
}

/* Cards */
.cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.feature-card {
  background: rgba(136, 201, 0, 0.04);
  border: 1px solid rgba(136, 201, 0, 0.15);
  border-radius: 6px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.25s ease;
}

.feature-card:hover {
  background: rgba(136, 201, 0, 0.08);
  border-color: rgba(136, 201, 0, 0.4);
}

.feature-label {
  font-size: 9px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 700;
  background: #88c900;
  padding: 4px 10px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
}

.feature-content { flex: 1; }

.feature-name {
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 3px;
}

.feature-description {
  font-size: 11px;
  color: #8b949e;
  line-height: 1.5;
}

.check {
  color: #88c900;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
}

/* Footer */
.footer {
  border-top: 1px solid #1a1a1a;
  padding-top: 16px;
  margin-top: 20px;
}

.made {
  font-size: 10px;
  color: #4a4a4a;
  letter-spacing: 0.05em;
}

/* Responsive */
@media (max-width: 640px) {
  .code-panel { display: none; }
  .hero-title { font-size: 38px; }
  .hero-section { padding: 28px 24px 20px; }
}
</style>
<script setup lang="ts">
import { Motion } from 'motion-v'
import { onMounted, onUnmounted } from 'vue';

const serverConnected = ref(false);
const uptime = ref("--");

let pollingTimer: ReturnType<typeof setInterval> | null = null;

async function CheckServer() {
  serverConnected.value = await pingURL();
  if (serverConnected.value) {
    uptime.value = "Connected to Server-Observer-Utility";
  }
}

onMounted(async () => {
  setTimeout(async () => {
    await CheckServer();
    pollingTimer = setInterval(CheckServer, 60000); // imma check every minute
  }, 500)

})

onUnmounted(() => {
  if (pollingTimer) clearInterval(pollingTimer);
})

// ping test
async function pingURL() {

  // The custom URL entered by user
  var URL = "https://the-great-server.shaafyousaf.com/Observer";
  const response = await fetch(URL);
  console.log(`Fetched Response from  https://the-great-server.shaafyousaf.com/Observer - isOnline: ${response.ok}`)
  console.log(`Sending another request in 60 seconds.`)
  if (!response.ok) {
    return false;
  }
  const body = await response.text();


  let isLive = body.includes("All Systems Nominal.");
  console.log(`isLive: ${isLive}`);
  return isLive;
}
</script>


<template>
  <div class="published-hackathons-section">
    <Motion :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3, delay: 0.1 }">
      <h2 class="section-title">Personal Infrastructure</h2>
      <div class="featured-project-wrapper">
        <NuxtLink to="/homelab" class="clickable-section">
          <HomelabHero :alignRight="true" hostname="the-great-library" :server-connected=serverConnected
            :uptime=uptime />
        </NuxtLink>
      </div>
    </Motion>

    <Motion :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3, delay: 0.15 }">
      <div class="featured-project-wrapper">
        <div class="library-card">
          <div class="library-header">
            <!-- <div class="library-badges">
              <span class="library-badge">Self-Hosted</span>
            </div> -->
            <h3 class="library-title">Self-Hosted File Vault</h3>
            <!-- <p class="library-subtitle">Self-Hosted Knowledge Base &amp; File Server</p> -->
          </div>

          <div class="library-body">
            <div class="library-highlights">
              <div class="highlight-item">
                <Icon name="heroicons:arrow-path-20-solid" class="highlight-icon" />
                <span>Files sync from Google Drive automatically every 60 seconds</span>
              </div>
              <div class="highlight-item">
                <Icon name="heroicons:code-bracket-20-solid" class="highlight-icon" />
                <span>GitHub Actions runner auto-deploys config changes on push</span>
              </div>
              <div class="highlight-item">
                <Icon name="heroicons:document-20-solid" class="highlight-icon" />
                <span>HTML &amp; PDF files are auto-wrapped as browsable pages</span>
              </div>
            </div>

            <div class="arch-flow">
              <span class="arch-step">Google Drive</span>
              <span class="arch-arrow">→</span>
              <span class="arch-step">rclone</span>
              <span class="arch-arrow">→</span>
              <span class="arch-step">Ubuntu Server</span>
              <span class="arch-arrow">→</span>
              <span class="arch-step">Python</span>
              <span class="arch-arrow">→</span>
              <span class="arch-step">MkDocs + Nginx</span>
            </div>
          </div>

          <div class="library-footer">
            <div class="library-stack">
              <span class="stack-tag" v-for="tech in ['Ubuntu Server', 'Docker', 'MkDocs', 'Nginx', 'rclone', 'GitHub Actions', 'Python', 'Google Drive']" :key="tech">{{ tech }}</span>
            </div>
            <div class="library-links">
              <a href="https://vault.shaafyousaf.com" target="_blank" rel="noopener noreferrer" class="library-link" title="Personal Knowledge Base">
                <Icon name="heroicons:book-open-20-solid" />
                <span>Vault</span>
              </a>
              <a href="https://files.shaafyousaf.com" target="_blank" rel="noopener noreferrer" class="library-link" title="File Server">
                <Icon name="heroicons:folder-20-solid" />
                <span>Files</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  </div>


</template>


<style scoped>
.published-hackathons-section {
  padding: 0;
}

.section-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #000000;
  margin-bottom: 1.5rem;
  letter-spacing: -0.3px;
}

.section-title:not(:first-child) {
  margin-top: 4rem;
}

/* Featured Project Wrapper - Border radius applied here */
.featured-project-wrapper {
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 3rem;
}

/* The Great Library Card */
.library-card {
  background: #0a0a0a;
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.library-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.library-badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.library-badge {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.5);
}

.library-badge--live {
  background: rgba(74, 222, 128, 0.15);
  color: #4ade80;
}

.library-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.3px;
}

.library-subtitle {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.library-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.library-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
}

.highlight-icon {
  flex-shrink: 0;
  width: 1.1rem;
  height: 1.1rem;
  color: rgba(255, 255, 255, 0.4);
}

.arch-flow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.arch-step {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.06);
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  letter-spacing: 0.02em;
}

.arch-arrow {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
}

.library-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.library-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.stack-tag {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.library-links {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.library-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.95rem;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1.1rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: background 0.2s ease, transform 0.2s ease;
}

.library-link:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .library-card {
    padding: 1.75rem 1.5rem;
  }
  .library-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
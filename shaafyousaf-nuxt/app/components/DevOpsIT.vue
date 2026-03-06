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
  var URL = "https://server-observer-utility.shaafyousaf.space/Observer";
  const response = await fetch(URL);
  console.log(`Fetched Response from  https://server-observer-utility.shaafyousaf.space/Observer - isOnline: ${response.ok}`)
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
</style>
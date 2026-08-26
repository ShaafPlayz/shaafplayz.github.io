<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import OPSDotnetDev from '~/components/OPSDotnetDev.vue';

const serverConnected = ref(false);
const uptime = ref("--");
const backgroundImage = '/optimized/images/homeserveroldPic.webp'

const PING_INTERVAL_SECS = 60;
const secondsUntilNextPing = ref(PING_INTERVAL_SECS);

let pollingTimer: ReturnType<typeof setInterval> | null = null;
let countdownTimer: ReturnType<typeof setInterval> | null = null;

async function CheckServer() {
  secondsUntilNextPing.value = PING_INTERVAL_SECS;
  try {
    serverConnected.value = await pingURL();
  } catch {
    serverConnected.value = false;
  }
  if(serverConnected.value){
    uptime.value = "Connected to Server-Observer-Utility";
  }
}

onMounted(async () => {
  setTimeout(async () => {
    await CheckServer();
    // Timers start regardless of whether the initial ping succeeded or failed
    pollingTimer = setInterval(CheckServer, PING_INTERVAL_SECS * 1000);
    countdownTimer = setInterval(() => {
      if (secondsUntilNextPing.value > 0) secondsUntilNextPing.value--;
    }, 1000);
  }, 500)
})

onUnmounted(() => {
  if(pollingTimer) clearInterval(pollingTimer);
  if(countdownTimer) clearInterval(countdownTimer);
})

// ping test
async function pingURL() {
  var URL = "https://the-great-server.shaafyousaf.com/Observer";
  const response = await fetch(URL);
  console.log(`Fetched Response from  https://the-great-server.shaafyousaf.com/Observer - isOnline: ${response.ok}`)
  console.log(`Sending another request in ${PING_INTERVAL_SECS} seconds.`)
  if(!response.ok){
    return false;
  }
  const body = await response.text();
  let isLive = body.includes("All Systems Nominal.");
  console.log(`isLive: ${isLive}`);
  return isLive;
}
</script>

<template>
  <div>
    <Hero />
    <SkillsSection />
    
    <NuxtLink to="/experience?tab=published" class="clickable-section">
      <FeaturedProject />
    </NuxtLink>
    <NuxtLink to="/homelab" class="clickable-section">
      <HomelabHero 
        :background-image="backgroundImage"
        :alignRight="true"
        hostname="the-great-library"
        :server-connected="serverConnected"
        :uptime="uptime"
        :seconds-until-next-ping="secondsUntilNextPing"
        :ping-interval="PING_INTERVAL_SECS"
      />
    </NuxtLink>
    <NuxtLink to="/experience" class="clickable-section">
      <OPSDotnetDev/>
      <!-- <UTSJuniorSWE /> -->
    </NuxtLink> 
    
    
  </div>
</template>

<style scoped>
.clickable-section {
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.clickable-section:hover {
  opacity: 0.95;
}

.clickable-section :deep(.background-image) {
  transition: transform 2s cubic-bezier(0.1, 0, 0.2, 1);
}

.clickable-section:hover :deep(.background-image) {
  transform: scale(1.035);
}

.clickable-section:active :deep(.background-image) {
  transform: scale(1.015);
  transition-duration: 0.12s;
}
</style>

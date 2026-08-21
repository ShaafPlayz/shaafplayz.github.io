<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import OPSDotnetDev from '~/components/OPSDotnetDev.vue';

const serverConnected = ref(false);
const uptime = ref("--");
const backgroundImage = '/optimized/images/homeserveroldPic.webp'

let pollingTimer: ReturnType<typeof setInterval> | null = null;

async function CheckServer() {
  serverConnected.value = await pingURL();
  if(serverConnected.value){
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
  if(pollingTimer) clearInterval(pollingTimer);
})

// ping test
async function pingURL() {

  // The custom URL entered by user
  var URL = "https://the-great-server.shaafyousaf.com/Observer";
  const response = await fetch(URL);
  console.log(`Fetched Response from  https://the-great-server.shaafyousaf.com/Observer - isOnline: ${response.ok}`)
  console.log(`Sending another request in 60 seconds.`)
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
        :server-connected= serverConnected
        :uptime=  uptime
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
</style>

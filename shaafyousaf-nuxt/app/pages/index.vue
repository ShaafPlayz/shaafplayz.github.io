<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

var serverConnected = false;
var uptime = "--";

let pollingTimer: ReturnType<typeof setInterval> | null = null;

async function CheckServer() {
  serverConnected = await pingURL();
  if(serverConnected){
    uptime = "Temporarily connected through shaafyousaf.me";
  }
}

onMounted(async () => {
  await CheckServer();
  pollingTimer = setInterval(CheckServer, 60000); // imma check every minute
})

onUnmounted(() => {
  if(pollingTimer) clearInterval(pollingTimer);
})

// ping test
async function pingURL() {

  // The custom URL entered by user
  var URL = "https://shaafyousaf.me";
  const response = await fetch(URL);
  console.log(`Fetched Response from  https://shaafyousaf.me - isOnline: ${response.ok}`)
  console.log(`Sending another request in 60 seconds.`)
  if(response.ok){
    return true;
  }
  return false;
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
        :alignRight="true"
        hostname="the-great-library"
        :server-connected= serverConnected
        :uptime=  uptime
      />
    </NuxtLink>
   
    <NuxtLink to="/experience" class="clickable-section">
      <FeaturedInternship />
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

<script setup lang="ts">
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
        :server-connected="false"
        uptime="--"
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

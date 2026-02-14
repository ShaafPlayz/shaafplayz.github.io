<script setup lang="ts">
</script>

<template>
  <div>
    <Hero />
    <HomelabHero 
    :alignRight="true"
      hostname="the-great-library"
      :server-connected="false"
      uptime="--"
    />
    <FeaturedInternship />
    
  </div>
</template>

<style scoped>
</style>
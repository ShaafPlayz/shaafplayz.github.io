<template>
  <div class="video-background">
    <video 
      ref="videoRef"
      autoplay 
      loop 
      muted 
      playsinline
      class="background-video"
    >
      <source src="/resources/Test1.webm" type="video/webm">
    </video>
    <div class="video-overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  // Ensure video plays on all browsers
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // Silently handle autoplay restrictions
    })
  }
})
</script>

<style scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -3;
}

.video-overlay {
  display: none;
}
</style>

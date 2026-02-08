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
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  opacity: 0.15;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  pointer-events: none;
}
</style>

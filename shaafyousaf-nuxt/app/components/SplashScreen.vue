<template>
  <Teleport to="body">
    <div v-if="isVisible" class="splash-screen">
      <div class="welcome-container">
        <NuxtImg 
          src="/resources/logo.png" 
          alt="Shaaf Yousaf Logo" 
          class="logo"
          width="150"
          height="150"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(true)

onMounted(() => {
  // Scroll to top on load
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 10)
  
  // Hide splash screen after animation
  setTimeout(() => {
    isVisible.value = false
  }, 2000)
})
</script>

<style scoped>
.splash-screen {
  position: fixed;
  z-index: var(--z-splash);
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #000000;
  backdrop-filter: blur(15px);
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 1;
  animation: fadeInandOut 2s ease-out forwards;
  animation-iteration-count: 1;
}

@keyframes fadeInandOut {
  0% {
    opacity: 1;
    background-color: #000000;
  }
  25% {
    background-color: #000000;
  }
  50% {
    opacity: 1;
  }
  85% {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.66);
  }
  100% {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
  }
}

.welcome-container {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease forwards;
}

.logo {
  width: 150px;
  height: 150px;
  margin-bottom: 0;
  animation: pulse 2.1s ease-in-out forwards;
  animation-iteration-count: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: scale(0.1);
  }
}
</style>

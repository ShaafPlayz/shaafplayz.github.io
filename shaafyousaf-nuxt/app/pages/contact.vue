<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <div class="page-container">
    <Motion
      class="page-content"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
    >
      <h1>Contact</h1>
      <p>Coming soon...</p>
    </Motion>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 100px;
}

.page-content {
  text-align: center;
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 900;
}

p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 400;
}
</style>

<template>
  <div class="motion-demo">
    <div class="container">
      <h2 class="demo-title">Motion.dev Animation Example</h2>
      <p class="demo-description">
        This component demonstrates how to use motion-v for smooth, cinematic animations
      </p>
      
      <!-- Example 1: Simple Fade In -->
      <div class="demo-section">
        <h3>1. Fade In Animation</h3>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
        >
          <div class="demo-card">
            <p>This card fades in and slides up smoothly</p>
          </div>
        </Motion>
      </div>

      <!-- Example 2: Scale Spring -->
      <div class="demo-section">
        <h3>2. Spring Scale Animation</h3>
        <Motion
          :initial="{ scale: 0, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ 
            type: 'spring', 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }"
        >
          <div class="demo-card">
            <p>This card uses spring physics for a bouncy entrance</p>
          </div>
        </Motion>
      </div>

      <!-- Example 3: Stagger Children -->
      <div class="demo-section">
        <h3>3. Staggered Grid Animation</h3>
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ staggerChildren: 0.1 }"
          class="demo-grid"
        >
          <Motion
            v-for="i in 6"
            :key="i"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.4 }"
            class="demo-item"
          >
            Item {{ i }}
          </Motion>
        </Motion>
      </div>

      <!-- Example 4: Hover Animation -->
      <div class="demo-section">
        <h3>4. Interactive Hover</h3>
        <Motion
          :initial="{ opacity: 0, x: -50 }"
          :animate="{ opacity: 1, x: 0 }"
          :whileHover="{ scale: 1.05, borderColor: '#FFD700' }"
          :whileTap="{ scale: 0.95 }"
          :transition="{ duration: 0.3 }"
        >
          <div class="demo-card interactive">
            <p>Hover over me! I'll scale up and change border color</p>
          </div>
        </Motion>
      </div>

      <!-- Code Example -->
      <div class="code-section">
        <h3>Usage Example</h3>
        <pre class="code-block"><code>&lt;template&gt;
  &lt;Motion
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  &gt;
    &lt;div class="your-content"&gt;
      Your content here
    &lt;/div&gt;
  &lt;/Motion&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Motion } from 'motion-v'
&lt;/script&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<style scoped>
.motion-demo {
  padding: var(--spacing-xl) 0;
}

.demo-title {
  text-align: center;
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-gold);
}

.demo-description {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.demo-section {
  margin-bottom: var(--spacing-xl);
}

.demo-section h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.demo-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  color: var(--text-secondary);
}

.demo-card.interactive {
  cursor: pointer;
  transition: border-color var(--transition-base);
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
}

.demo-item {
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  text-align: center;
  color: var(--color-gold);
  font-weight: 600;
}

.code-section {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: var(--border-thin);
}

.code-section h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.code-block {
  background: rgba(0, 0, 0, 0.8);
  border: var(--border-thin);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

.code-block code {
  color: var(--text-secondary);
}
</style>

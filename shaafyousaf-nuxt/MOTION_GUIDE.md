# Motion Animation Guide

This guide shows you how to add smooth, cinematic animations to your portfolio using motion-v.

## 🎬 Quick Start

Import Motion in any component:

```vue
<script setup lang="ts">
import { Motion } from 'motion-v'
</script>
```

## 📚 Animation Patterns

### 1. Fade In on Page Load

```vue
<template>
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div class="content">
      Your content here
    </div>
  </Motion>
</template>
```

### 2. Spring Physics (Bouncy Effect)

```vue
<template>
  <Motion
    :initial="{ scale: 0.8, opacity: 0 }"
    :animate="{ scale: 1, opacity: 1 }"
    :transition="{ 
      type: 'spring', 
      stiffness: 260, 
      damping: 20 
    }"
  >
    <div class="card">Card content</div>
  </Motion>
</template>
```

### 3. Staggered Grid Animation

Perfect for the Bento Grid!

```vue
<template>
  <div class="bento-grid">
    <Motion
      v-for="(card, index) in cards"
      :key="index"
      :initial="{ opacity: 0, scale: 0.9 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ 
        duration: 0.4,
        delay: index * 0.1  // Stagger effect
      }"
    >
      <BentoCard v-bind="card" />
    </Motion>
  </div>
</template>
```

### 4. Hover Interactions

```vue
<template>
  <Motion
    :whileHover="{ 
      scale: 1.05, 
      borderColor: '#FFD700' 
    }"
    :whileTap="{ scale: 0.95 }"
    :transition="{ duration: 0.2 }"
  >
    <button class="btn">
      Hover me!
    </button>
  </Motion>
</template>
```

### 5. Scroll-Triggered Animation

```vue
<template>
  <Motion
    :initial="{ opacity: 0, x: -50 }"
    :whileInView="{ opacity: 1, x: 0 }"
    :viewport="{ once: true, amount: 0.3 }"
    :transition="{ duration: 0.6 }"
  >
    <div class="section">
      Animates when scrolled into view
    </div>
  </Motion>
</template>
```

## 🎨 Applying to Existing Components

### Enhance BentoCard.vue

Wrap the entire card or just the content:

```vue
<template>
  <Motion
    :initial="{ opacity: 0, scale: 0.95 }"
    :animate="{ opacity: 1, scale: 1 }"
    :whileHover="{ scale: 1.02 }"
    :transition="{ duration: 0.3 }"
  >
    <div :class="['bento-card', sizeClass]">
      <!-- existing content -->
    </div>
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
// ... rest of your script
</script>
```

### Enhance ProjectCard.vue

Add smooth entrance and hover:

```vue
<template>
  <Motion
    :initial="{ opacity: 0, y: 30 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :viewport="{ once: true }"
    :whileHover="{ y: -8 }"
    :transition="{ duration: 0.4 }"
  >
    <a :href="link" class="project-card">
      <!-- existing content -->
    </a>
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
// ... rest of your script
</script>
```

### Animate Page Sections

Add to any page:

```vue
<template>
  <div class="page">
    <!-- Page Header -->
    <Motion
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
    >
      <header class="page-header">
        <h1>{{ title }}</h1>
      </header>
    </Motion>

    <!-- Staggered grid -->
    <div class="grid">
      <Motion
        v-for="(item, i) in items"
        :key="i"
        :initial="{ opacity: 0, scale: 0.9 }"
        :whileInView="{ opacity: 1, scale: 1 }"
        :viewport="{ once: true }"
        :transition="{ 
          duration: 0.4,
          delay: i * 0.1 
        }"
      >
        <Card :data="item" />
      </Motion>
    </div>
  </div>
</template>
```

## ⚡ Animation Properties Reference

### initial
What the element looks like before animation:
```js
{ opacity: 0, y: 20, scale: 0.8 }
```

### animate
Target state for the animation:
```js
{ opacity: 1, y: 0, scale: 1 }
```

### whileHover
State when hovering:
```js
{ scale: 1.05, borderColor: '#FFD700' }
```

### whileTap
State when clicking/tapping:
```js
{ scale: 0.95 }
```

### whileInView
Triggers when element enters viewport:
```js
{ opacity: 1, x: 0 }
```

### transition
Controls animation timing:

```js
// Duration-based
{ duration: 0.6, ease: 'easeOut' }

// Spring physics
{ 
  type: 'spring',
  stiffness: 260,
  damping: 20 
}

// Delayed
{ duration: 0.4, delay: 0.2 }

// Stagger children
{ staggerChildren: 0.1 }
```

### viewport
Controls scroll-triggered animations:
```js
{ 
  once: true,      // Only animate once
  amount: 0.3      // Trigger when 30% visible
}
```

## 🎯 Motion Values

### Position
- `x`, `y` - Movement (pixels or percentage)
- `scale` - Size (1 = 100%, 0.5 = 50%)
- `rotate` - Rotation in degrees

### Appearance
- `opacity` - Transparency (0 = invisible, 1 = visible)
- `backgroundColor` - Color changes
- `borderColor` - Border color changes

### Advanced
- `blur` - Blur effect (px)
- `brightness` - Brightness filter
- `filter` - CSS filters

## 💡 Best Practices

1. **Performance**: Animate `transform` and `opacity` for best performance
2. **Subtle**: Keep animations subtle (0.3-0.6s duration)
3. **Once**: Use `viewport: { once: true }` to prevent re-animation on scroll
4. **Stagger**: Add delays for grid items (index * 0.1)
5. **Responsive**: Adjust animation values for mobile

## 🚀 Example: Animated Homepage Hero

```vue
<template>
  <section class="hero">
    <!-- Title -->
    <Motion
      :initial="{ opacity: 0, y: -30 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, delay: 0.2 }"
    >
      <h2 class="hero-subtitle">WELCOME TO</h2>
    </Motion>

    <!-- Main title -->
    <Motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ 
        type: 'spring',
        stiffness: 100,
        delay: 0.4 
      }"
    >
      <h1 class="hero-title">SHAAF'S PORTFOLIO</h1>
    </Motion>

    <!-- Description -->
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 0.6, delay: 0.6 }"
    >
      <p class="hero-description">
        Engineering ideas through code, design, and film...
      </p>
    </Motion>
  </section>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
</script>
```

## 🎬 Advanced: Orchestrated Sequence

Chain animations in sequence:

```vue
<template>
  <div>
    <Motion
      v-for="(item, i) in sequence"
      :key="i"
      :initial="{ opacity: 0, x: -50 }"
      :animate="{ opacity: 1, x: 0 }"
      :transition="{ 
        duration: 0.5,
        delay: 0.8 + (i * 0.2)  // Wait for previous + offset
      }"
    >
      <div>{{ item }}</div>
    </Motion>
  </div>
</template>
```

## 📖 See Component Examples

Check out `components/MotionDemo.vue` for live examples of all these patterns!

---

**Happy animating!** 🎉

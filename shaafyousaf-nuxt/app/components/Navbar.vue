<script setup lang="ts">
import { Motion } from 'motion-v'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const route = useRoute()

const isExperiencePage = computed(() => route.path === '/experience')

const logoSrc = computed(() => {
  return isExperiencePage.value 
    ? '/images/shaafonlylabsfontlogoshortblack.png' 
    : '/images/shaafonlylabsfontlogoshort.png'
})

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <Motion
    tag="nav"
    class="navbar"
    :class="{ 'scrolled': isScrolled, 'experience-page': isExperiencePage }"
    :initial="{ y: -100, opacity: 0 }"
    :animate="{ y: 0, opacity: 1 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div class="navbar-container">
      <NuxtLink to="/" class="logo-link">
        <img 
          :src="logoSrc" 
          alt="Shaaf Logo" 
          class="logo"
        />
      </NuxtLink>
      
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link">HOME</NuxtLink>
        <NuxtLink to="/experience" class="nav-link">EXPERIENCE</NuxtLink>
        <NuxtLink to="/homelab" class="nav-link">HOMELAB</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">CONTACT</NuxtLink>
      </div>
    </div>
  </Motion>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 4rem;
  z-index: 100;
  background: transparent;
  transition: padding 0.3s ease, background 0.3s ease;
}

.navbar.scrolled {
  padding: 1rem 4rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  height: 40px;
  width: auto;
}

/* Disable effects on logo when on experience page */
.navbar.experience-page .logo {
  mix-blend-mode: normal;
  filter: none;
  opacity: 1;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--color-white);
  text-decoration: none;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  opacity: 0.8;
  transition: opacity 0.2s ease, color 0.3s ease;
  text-transform: uppercase;
}

/* Black links on experience page */
.navbar.experience-page .nav-link {
  color: #000000;
}

.navbar.experience-page.scrolled .nav-link {
  color: var(--color-white);
}

.navbar.experience-page.scrolled {
  background: rgba(0, 0, 0, 0.8);
}

.nav-link:hover, .nav-link.router-link-active {
  opacity: 1;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
  }

  .logo {
    height: 32px;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.75rem;
  }
}
</style>

<template>
  <header class="header">
    <nav class="nav-container">
      <NuxtLink to="/" class="logo-wrapper">
        <span class="logo-text">shaaf</span>
      </NuxtLink>
      
      <ul class="nav-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/dev">Experience</NuxtLink></li>
        <li><NuxtLink to="/lab">Projects</NuxtLink></li>
        <li><NuxtLink to="/studio">Homelab</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
      
      <div class="header-actions">
        <!-- Actions removed for cleaner navbar matching the design -->
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-header);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: var(--border-thin);
}

.nav-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 1rem var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  transition: transform var(--transition-base);
}

.logo-wrapper:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-white);
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  position: relative;
  transition: color var(--transition-base);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-gold);
  transition: width var(--transition-base);
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-gold);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: var(--font-size-xs);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .nav-container {
    gap: 1rem;
  }
  
  .header-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .btn-small {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
}
</style>

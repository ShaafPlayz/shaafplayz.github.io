<template>
  <header class="header">
    <nav class="nav-container">
      <NuxtLink to="/" class="logo-wrapper">
        <NuxtImg 
          src="/resources/logo.png" 
          alt="Shaaf Yousaf Logo"
          class="logo-img"
          width="50"
          height="50"
        />
      </NuxtLink>
      
      <ul class="nav-links">
        <li><NuxtLink to="/lab">Lab</NuxtLink></li>
        <li><NuxtLink to="/studio">Studio</NuxtLink></li>
        <li><NuxtLink to="/dev">Dev</NuxtLink></li>
      </ul>
      
      <div class="header-actions">
        <a 
          href="mailto:shaaf.yousaf@mail.utoronto.ca" 
          class="btn btn-small"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Icon name="mdi:email-outline" />
          Email
        </a>
        <a 
          href="https://drive.google.com/file/d/1_H4GS3Ufw6UOnEJhch0OapYTXMUZFIor/view" 
          class="btn btn-primary btn-small"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
          <Icon name="mdi:arrow-right" />
        </a>
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

.logo-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
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
  font-weight: 600;
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
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

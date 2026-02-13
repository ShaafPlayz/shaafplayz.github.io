<template>
  <header class="header">
    <nav class="nav-container">
      <NuxtLink to="/" class="logoimg">
        <NuxtImg src="/resources/logo.png" alt="Shaaf Yousaf Logo" width="50" height="50" />
      </NuxtLink>
      
      <ul class="nav-links">
        <!-- Empty as per original design -->
      </ul>
      
      <div class="hero-buttons">
        <a 
          href="mailto:shaaf.yousaf@mail.utoronto.ca" 
          class="hero-button hire-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Email Me
        </a>
        <a 
          href="https://drive.google.com/file/d/1_H4GS3Ufw6UOnEJhch0OapYTXMUZFIor/view" 
          class="hero-button cv-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          My Resume ➪
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  top: 1%;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.5rem 1rem;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  width: 100%;
  max-width: 1000px;
}

.logoimg {
  height: 3rem;
  display: flex;
  align-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.logoimg:hover {
  transform: scale(1.05);
}

.logoimg img {
  width: 2.5rem;
  position: relative;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
  height: 1.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.hero-button {
  padding: 0.5rem 3.6rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 1s ease;
  display: inline-block;
}

.hire-button {
  background: rgb(255, 217, 0);
  color: #000000;
  border-radius: 10px;
  transition: 1s;
}

.hire-button:hover {
  background: rgba(255, 255, 255, 0.753);
  backdrop-filter: blur(20px);
  padding: 0.5rem 4rem;
  font-size: 1.2rem;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.593);
  transition: 0.5s;
}

.cv-button {
  background: #000000;
  color: rgba(255, 215, 0, 0.82);
  transition: 1s;
}

.cv-button:hover {
  background: rgba(255, 255, 255, 0.753);
  color: #000000;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.596);
  padding: 0.5rem 4rem;
  font-size: 1.2rem;
  transition: 0.5s;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  
  .hero-button {
    font-size: 0.9rem;
    padding: 0.5rem 2rem;
    text-align: center;
    width: 100%;
  }
  
  .hero-button:hover {
    padding: 0.5rem 2rem;
    font-size: 0.9rem;
  }
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

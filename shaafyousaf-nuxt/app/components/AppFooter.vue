<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo-wrapper">
            <NuxtImg 
              src="/resources/logo.png" 
              alt="Shaaf Yousaf Logo"
              class="footer-logo"
              width="60"
              height="60"
            />
          </div>
          <h3 class="footer-title">Made with ❤️ by Shaaf</h3>
          <p class="footer-subtitle">I love Designing and Developing.</p>
          <a 
            href="https://github.com/ShaafPlayz/shaafplayz.github.io" 
            target="_blank"
            class="source-link"
          >
            This website's code →
          </a>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Links</h3>
          <div class="social-links">
            <a href="https://github.com/ShaafPlayz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="mdi:github" size="24" />
            </a>
            <a href="https://linkedin.com/in/shaafyousaf" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="mdi:linkedin" size="24" />
            </a>
            <a href="https://www.instagram.com/shaafyousaf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="mdi:instagram" size="24" />
            </a>
            <a href="https://www.youtube.com/@ShaafStudio" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Icon name="mdi:youtube" size="24" />
            </a>
            <a href="https://devpost.com/ShaafDev" target="_blank" rel="noopener noreferrer" aria-label="DevPost">
              <Icon name="simple-icons:devpost" size="24" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="last-updated-label">Last Updated:</p>
        <p class="last-updated-date">February 7, 2026</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: rgba(0, 0, 0, 0.95);
  border-top: var(--border-thin);
  padding: var(--spacing-lg) 0 var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logo-wrapper {
  margin-bottom: 0.5rem;
}

.footer-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.footer-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
}

.footer-subtitle {
  color: var(--text-secondary);
  margin: 0;
}

.source-link {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
  opacity: 0.5;
  transition: all var(--transition-base);
}

.source-link:hover {
  opacity: 1;
  color: var(--color-gold);
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-links a {
  color: var(--text-secondary);
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: var(--border-thin);
  border-radius: var(--border-radius-sm);
}

.social-links a:hover {
  color: var(--color-gold);
  border-color: var(--color-gold);
  box-shadow: var(--shadow-gold);
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-md);
  border-top: var(--border-thin);
}

.last-updated-label {
  font-weight: 300;
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.last-updated-date {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .social-links {
    justify-content: flex-start;
  }
}
</style>

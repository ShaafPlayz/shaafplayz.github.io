<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logoimg">
            <NuxtImg 
              src="/resources/logo.png" 
              alt="Shaaf Yousaf Logo"
              class="footer-logo"
              width="60"
              height="60"
            />
          </div>
          <h3 style="margin-bottom: 0">Made with ❤️ by Shaaf</h3>
          <p>I love Designing and Developing.</p>
          <a 
            href="https://github.com/ShaafPlayz/shaafplayz.github.io" 
            target="_blank"
            style="opacity: 30%;"
          >
            This website's code →
          </a>
        </div>
        
        <div class="footer-section">
          <h3>Links</h3>
          <div class="social-links" style="justify-content: flex-start;">
            <a href="https://github.com/ShaafPlayz" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/shaafyousaf" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/shaafyousaf/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@ShaafStudio" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://devpost.com/ShaafDev?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-dev"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p style="font-weight: 100;">Last Updated:</p>
        <p style="font-size: 1rem;">26th January 2026</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background-color: #000000;
  color: white;
  padding: 3rem 0 1rem;
  margin: 1.5rem;
  border-radius: 40px;
  z-index: 5000;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logoimg {
  margin-bottom: 1rem;
}

.logoimg img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.footer-section h3 {
  font-size: 1.2rem;
  font-weight: 900;
  margin: 0 0 1.5rem 0;
  color: #ffffff;
}

.footer-section p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.3);
  font-size: var(--font-size-sm);
  transition: all var(--transition-base);
  text-decoration: none;
}

.footer-section a:hover {
  opacity: 1;
  color: var(--color-gold);
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-links a {
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-links a:hover {
  color: #3498db;
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem 0;
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

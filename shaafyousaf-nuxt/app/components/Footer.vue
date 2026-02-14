<script setup lang="ts">
const currentYear = new Date().getFullYear()
const lastUpdated = 'February 14, 2026'
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo-container">
            <img 
              src="/images/shaafonlylabsfontlogoshort.png" 
              alt="Shaaf Logo" 
              class="footer-logo"
            />
          </div>
          <h3>Made with ❤️ by Shaaf</h3>
          <p>I love Designing and Developing.</p>
          <a 
            href="https://github.com/ShaafPlayz/shaafplayz.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
            class="github-link"
          >
            This website's code →
          </a>
        </div>

        <div class="footer-section">
          <h3>Links</h3>
          <div class="social-links">
            <a href="https://github.com/ShaafPlayz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/shaafyousaf" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/shaafyousaf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@ShaafStudio" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://devpost.com/ShaafDev" target="_blank" rel="noopener noreferrer" aria-label="DevPost">
              <i class="fab fa-dev"></i>
            </a>
          </div>
        </div>

        <!-- <div class="footer-section email-section">
          <h3>Get in Touch</h3>
          <p>Drop me a message and let's connect!</p>
          <div class="contact-form">
            <input 
              type="email" 
              placeholder="your.email@example.com" 
              class="email-input"
            />
            <textarea 
              placeholder="Your message..." 
              class="message-input"
              rows="4"
            ></textarea>
            <button class="send-button">
              <span>Send Message</span>
              <Icon name="heroicons:paper-airplane-solid" class="send-icon" />
            </button>
          </div>
        </div> -->
      </div>

      <div class="footer-bottom">
        <p class="update-label">Last Updated:</p>
        <p class="update-date">{{ lastUpdated }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h3 {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-white);
}

.footer-section p {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.logo-container {
  margin-bottom: 1rem;
}

.footer-logo {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1);
}

.github-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: color 0.3s ease;
}

.github-link:hover {
  color: rgba(255, 255, 255, 0.6);
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--color-white);
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
}

.update-label {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.update-date {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-white);
  margin: 0;
}

/* Email Section Styles */
.email-section p {
  margin-bottom: 1.25rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.email-input,
.message-input {
  width: 100%;
  padding: 0.875rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: var(--color-white);
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
}

.message-input {
  resize: vertical;
  min-height: 100px;
  line-height: 1.5;
}

.email-input::placeholder,
.message-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.email-input:focus,
.message-input:focus {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(10px);
  color: var(--color-white);
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.send-button:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
}

.send-button:active {
  transform: translateY(0) scale(0.98);
}

.send-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }

  .email-input,
  .message-input {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }

  .send-button {
    font-size: 0.9rem;
    padding: 0.75rem 1.25rem;
  }

  .send-icon {
    width: 16px;
    height: 16px;
  }
}
</style>

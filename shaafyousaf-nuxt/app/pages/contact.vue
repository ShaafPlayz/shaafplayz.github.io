<template>
  <div class="contact-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          Let's connect and discuss exciting opportunities
        </p>
      </header>

      <!-- Contact Info Grid -->
      <section class="section">
        <div class="contact-grid">
          <!-- Email -->
          <a 
            href="mailto:shaaf.yousaf@mail.utoronto.ca" 
            class="contact-card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon name="mdi:email-outline" size="48" class="contact-icon" />
            <h3>Email</h3>
            <p>shaaf.yousaf@mail.utoronto.ca</p>
          </a>

          <!-- LinkedIn -->
          <a 
            href="https://www.linkedin.com/in/shaaf-yousaf/" 
            class="contact-card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon name="mdi:linkedin" size="48" class="contact-icon" />
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>

          <!-- GitHub -->
          <a 
            href="https://github.com/ShaafPlayz" 
            class="contact-card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon name="mdi:github" size="48" class="contact-icon" />
            <h3>GitHub</h3>
            <p>Check out my code</p>
          </a>

          <!-- Resume -->
          <a 
            href="https://drive.google.com/file/d/1_H4GS3Ufw6UOnEJhch0OapYTXMUZFIor/view" 
            class="contact-card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon name="mdi:file-document" size="48" class="contact-icon" />
            <h3>Resume</h3>
            <p>Download my CV</p>
          </a>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section cta-section">
        <div class="cta-card">
          <h2>Ready to collaborate?</h2>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <a 
            href="mailto:shaaf.yousaf@mail.utoronto.ca" 
            class="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Send me an email
            <Icon name="mdi:arrow-right" />
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact - Shaaf Yousaf',
  description: 'Get in touch with Shaaf Yousaf for collaboration and opportunities',
})
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding-top: 80px;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-padding);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-xl) 0;
}

.page-title {
  font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
  font-weight: 900;
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: var(--spacing-xl);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.contact-card {
  background: var(--bg-secondary);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  transition: all var(--transition-base);
  cursor: pointer;
  text-decoration: none;
  color: var(--text-primary);
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-gold);
  box-shadow: var(--shadow-gold);
}

.contact-icon {
  color: var(--color-gold);
  margin-bottom: var(--spacing-md);
}

.contact-card h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
}

.contact-card p {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin: 0;
}

.cta-section {
  display: flex;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}

.cta-card {
  background: var(--bg-secondary);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  max-width: 600px;
}

.cta-card h2 {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-md);
}

.cta-card p {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 1rem 2rem;
  font-size: var(--font-size-base);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-base);
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background: var(--color-gold);
  color: var(--color-black);
  border: 2px solid var(--color-gold);
}

.btn-primary:hover {
  background: transparent;
  color: var(--color-gold);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .page-header {
    padding: var(--spacing-md) 0;
  }
}
</style>

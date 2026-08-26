<script setup lang="ts">
import { Motion } from 'motion-v'

const certificates = [
  {
    title: 'Computer Networking',
    issuer: 'Google',
    issued: 'May 2026',
    credentialId: 'O44LJ54W9751',
    url: 'https://www.coursera.org/account/accomplishments/verify/O44LJ54W9751'
  },
  {
    title: 'WebSockets',
    issuer: 'Packt',
    issued: 'Dec 2025',
    credentialId: 'U1WI832I7IX4',
    url: 'https://www.coursera.org/account/accomplishments/verify/U1WI832I7IX4'
  },
  {
    title: 'Intro to Retrieval Augmented Generation (RAG)',
    issuer: 'Duke University',
    issued: 'May 2025',
    credentialId: 'KZZNVM5SZ4I5',
    url: 'https://www.coursera.org/account/accomplishments/verify/KZZNVM5SZ4I5'
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Codecademy',
    issued: 'Jun 2024',
    credentialId: '',
    url: 'https://www.codecademy.com/profiles/ShaafPlayz/certificates'
  },
  {
    title: 'Intro to Cloud Computing',
    issuer: 'Codecademy',
    issued: 'Jun 2024',
    credentialId: '',
    url: 'https://www.codecademy.com/profiles/ShaafPlayz/certificates'
  },
  {
    title: 'Machine Learning: Introduction with Regression',
    issuer: 'Codecademy',
    issued: 'Jun 2024',
    credentialId: '',
    url: 'https://www.codecademy.com/profiles/ShaafPlayz/certificates'
  }
]
</script>

<template>
  <div class="certs-grid">
    <Motion
      v-for="(cert, index) in certificates"
      :key="cert.title"
      :initial="{ opacity: 0, y: 14 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.3, delay: 0.04 + index * 0.06 }"
    >
      <a
        :href="cert.url"
        target="_blank"
        rel="noopener noreferrer"
        class="cert-card"
      >
        <!-- Header strip — issuer + date -->
        <div class="cert-header">
          <div class="cert-header-left">
            <Icon name="heroicons:academic-cap-20-solid" class="cert-icon" />
            <span class="cert-issuer">{{ cert.issuer }}</span>
          </div>
          <span class="cert-date">{{ cert.issued }}</span>
        </div>

        <!-- Body — title + credential ID -->
        <div class="cert-body">
          <h4 class="cert-title">{{ cert.title }}</h4>
          <p v-if="cert.credentialId" class="cert-id">{{ cert.credentialId }}</p>
        </div>

        <!-- Footer link -->
        <div class="cert-footer">
          <span class="cert-cta">View Credential</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
          </svg>
        </div>
      </a>
    </Motion>
  </div>
</template>

<style scoped>
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

/* Card — whole card is the link */
.cert-card {
  display: flex;
  flex-direction: column;
  background: #111111;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.25s ease;
  height: 100%;
}

.cert-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
  background: #1a1a1a;
}

/* Header strip */
.cert-header {
  background: rgba(255, 255, 255, 0.06);
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.cert-header-left {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.cert-icon {
  width: 15px;
  height: 15px;
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

.cert-issuer {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.6);
}

.cert-date {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.3);
  white-space: nowrap;
}

/* Body */
.cert-body {
  padding: 0.9rem 1rem 0.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.cert-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0;
}

.cert-id {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.67rem;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.3px;
  margin: 0;
}

/* Footer */
.cert-footer {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1rem;
  transition: background 0.2s ease;
}

.cert-card:hover .cert-footer {
  background: #ffd700;
}

.cert-cta {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.2s ease;
}

.cert-footer svg {
  color: rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
  transition: color 0.2s ease, transform 0.2s ease;
}

.cert-card:hover .cert-cta,
.cert-card:hover .cert-footer svg {
  color: #000000;
}

/* Responsive */
@media (max-width: 640px) {
  .certs-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
}
</style>

<script setup lang="ts">
import { Motion } from 'motion-v'

const languages = ['C#', 'C', 'Python', 'Java', 'TypeScript/JavaScript', 'SQL', 'Shell', 'Assembly (MIPS)']

const frameworksAndTools = [
  '.NET',
  'Blazor',
  'GraphQL',
  'Nginx',
  'SSMS',
  'Ubuntu Server',
  'MudBlazor',
  'Motion.Dev',
  'Entity Framework Core',
  'Vue',
  'Nuxt: Vue Framework',
  'Next.js',
  'Flask',
  'Express',
  'Electron',
  'Azure DevOps',
  'GitHub Actions',
  'Wireshark',
  'Cloudflare',
  'Docker',
  'SQL Server',
  'PostgreSQL',
  'MongoDB',
  'Supabase'
]

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
    // TODO: replace with your Codecademy certificate link
    url: 'https://www.codecademy.com/profiles/ShaafPlayz/certificates'
  },
  {
    title: 'Intro to Cloud Computing',
    issuer: 'Codecademy',
    issued: 'Jun 2024',
    credentialId: '',
    // TODO: replace with your Codecademy certificate link
    url: 'https://www.codecademy.com/profiles/ShaafPlayz/certificates'
  },
  {
    title: 'Machine Learning: Introduction with Regression',
    issuer: 'Codecademy',
    issued: 'Jun 2024',
    credentialId: '',
    // TODO: replace with your Codecademy certificate link
    url: 'https://www.codecademy.com/profiles/ShaafPlayz/certificates'
  }
]
</script>

<template>
  <div class="skills-certs-section">
    <!-- Grid Background -->
    <div class="grid-background"></div>

    <Motion
      :initial="{ opacity: 0, filter: 'blur(10px)', y: 30 }"
      :while-in-view="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
      :transition="{ duration: 0.1, delay: 0 }"
      class="skills-container"
    >
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)' }"
        :while-in-view="{ opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 0.2, delay: 0.1 }"
      >
        <h2 class="section-title">What I work with day to day.</h2>
      </Motion>

      <!-- Languages Section -->
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 20 }"
        :while-in-view="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.2, delay: 0.05 }"
        class="languages-section"
      >
        <h3 class="subsection-title">Languages</h3>
        <div class="tags-container">
          <Motion
            v-for="(language, index) in languages"
            :key="language"
            :initial="{ opacity: 0, scale: 0.95 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.2, delay: 0.05 + index * 0.05 }"
            class="skill-tag"
          >
            {{ language }}
          </Motion>
        </div>
      </Motion>

      <!-- Frameworks & Tools Section -->
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 20 }"
        :while-in-view="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.3, delay: 0.1 }"
        class="tools-section"
      >
        <h3 class="subsection-title">Frameworks & Tools</h3>
        <div class="tools-list">
          <Motion
            v-for="(tool, index) in frameworksAndTools"
            :key="tool"
            :initial="{ opacity: 0, x: -10 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.2, delay: 0.1 + index * 0.03 }"
            class="tool-item"
          >
            {{ tool }}
          </Motion>
        </div>
      </Motion>

      <!-- Certifications Section -->
      <Motion
        :initial="{ opacity: 0, filter: 'blur(6px)', y: 20 }"
        :while-in-view="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
        :transition="{ duration: 0.3, delay: 0.15 }"
        class="certs-section"
      >
        <h3 class="subsection-title">Licenses & Certifications</h3>
        <div class="certs-grid">
          <Motion
            v-for="(cert, index) in certificates"
            :key="cert.title"
            :initial="{ opacity: 0, y: 15 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.3, delay: 0.15 + index * 0.06 }"
            class="cert-card"
          >
            <div class="cert-card-header">
              <div class="cert-icon">
                <Icon name="heroicons:academic-cap-20-solid" />
              </div>
              <span class="cert-issuer">{{ cert.issuer }}</span>
            </div>

            <h4 class="cert-title">{{ cert.title }}</h4>
            <p class="cert-meta">
              Issued {{ cert.issued }}<span v-if="cert.credentialId"><br />Credential ID {{ cert.credentialId }}</span>
            </p>

            <a
              :href="cert.url"
              target="_blank"
              rel="noopener noreferrer"
              class="cert-link"
              @click.stop
            >
              Show credential
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </Motion>
        </div>
      </Motion>
    </Motion>
  </div>
</template>

<style scoped>
.skills-certs-section {
  position: relative;
  width: 100%;
  background: transparent;
  padding: 1rem 0 3rem;
  overflow: hidden;
}

/* Grid Background — light version of the homepage grid */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size:
    100px 100px,
    100px 100px;
  z-index: 0;
  opacity: 0.5;
}

.skills-container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-transform: unset;
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #000000;
  margin-bottom: 2.5rem;
  text-align: left;
  letter-spacing: -0.3px;
  line-height: 1.2;
}

/* Languages Section */
.languages-section {
  margin-bottom: 3.5rem;
}

.subsection-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1.25rem;
  text-align: left;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-tag {
  background: #f5f5f5;
  color: #222222;
  padding: 0.55rem 1.15rem;
  border-radius: 999px;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1.5px solid transparent;
  transition: all 0.25s ease;
  cursor: default;
}

.skill-tag:hover {
  background: #fff8dc;
  border-color: #ffd700;
  color: #000000;
  transform: translateY(-2px);
}

/* Tools Section */
.tools-section {
  margin-bottom: 3.5rem;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tool-item {
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: #333333;
  background: #f5f5f5;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  transition: all 0.25s ease;
  cursor: default;
}

.tool-item:hover {
  background: #e8e8e8;
  color: #000000;
}

/* Certifications Section */
.certs-section {
  margin-bottom: 1rem;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.cert-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 1.1rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.cert-card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}

.cert-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #000000;
  color: #ffffff;
}

.cert-issuer {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cert-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #000000;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.cert-meta {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.78rem;
  color: #888888;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.cert-link {
  margin-top: auto;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  text-decoration: none;
  color: #333333;
  background: #f5f5f5;
  border: 1.5px solid transparent;
  transition: all 0.25s ease;
  white-space: nowrap;
  cursor: pointer;
}

.cert-link:hover {
  background: #fff8dc;
  border-color: #ffd700;
  color: #000000;
}

/* Responsive Design */
@media (max-width: 968px) {
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  .languages-section {
    margin-bottom: 2.5rem;
  }

  .tools-section {
    margin-bottom: 2.5rem;
  }

  .certs-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}

@media (max-width: 640px) {
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
  }

  .subsection-title {
    font-size: 0.85rem;
    margin-bottom: 1.1rem;
  }

  .languages-section {
    margin-bottom: 2rem;
  }

  .tags-container {
    gap: 0.5rem;
  }

  .skill-tag {
    padding: 0.45rem 0.9rem;
    font-size: 0.85rem;
  }

  .tools-list {
    gap: 0.4rem;
  }

  .tool-item {
    font-size: 0.75rem;
    padding: 0.35rem 0.7rem;
  }

  .certs-grid {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .grid-background {
    background-size:
      50px 50px,
      50px 50px;
  }
}
</style>

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
        <div class="certs-list">
          <Motion
            v-for="(cert, index) in certificates"
            :key="cert.title"
            :initial="{ opacity: 0, y: 10 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.2, delay: 0.15 + index * 0.05 }"
            class="cert-row"
          >
            <div class="cert-info">
              <h4 class="cert-title">{{ cert.title }}</h4>
              <p class="cert-meta">
                {{ cert.issuer }} &middot; Issued {{ cert.issued }}<span v-if="cert.credentialId"> &middot; Credential ID {{ cert.credentialId }}</span>
              </p>
            </div>
            <a
              :href="cert.url"
              target="_blank"
              rel="noopener noreferrer"
              class="cert-link"
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
  margin-bottom: 4rem;
}

.subsection-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5rem;
  text-align: left;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: transparent;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag:hover {
  border-color: rgba(0, 0, 0, 0.4);
  color: #000000;
}

/* Tools Section */
.tools-section {
  margin-bottom: 4rem;
}

.tools-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.5rem 2rem;
}

.tool-item {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  cursor: default;
}

.tool-item:hover {
  color: #000000;
}

/* Certifications Section */
.certs-section {
  margin-bottom: 1rem;
}

.certs-list {
  display: flex;
  flex-direction: column;
}

.cert-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
}

.cert-row:first-child {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.cert-row:hover {
  border-bottom-color: rgba(0, 0, 0, 0.3);
}

.cert-info {
  min-width: 0;
}

.cert-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #000000;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.cert-meta {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.55);
}

.cert-link {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  text-decoration: none;
  color: #000000;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  white-space: nowrap;
  cursor: pointer;
}

.cert-link:hover {
  border-color: rgba(0, 0, 0, 0.4);
}

/* Responsive Design */
@media (max-width: 968px) {
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  .languages-section {
    margin-bottom: 3rem;
  }

  .tools-section {
    margin-bottom: 3rem;
  }

  .tools-list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.5rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
  }

  .subsection-title {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }

  .languages-section {
    margin-bottom: 2.5rem;
  }

  .tags-container {
    gap: 0.6rem;
  }

  .skill-tag {
    padding: 0.4rem 0.85rem;
    font-size: 0.9rem;
  }

  .tools-list {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.4rem 1rem;
  }

  .tool-item {
    font-size: 0.9rem;
    padding: 0.4rem 0;
  }

  .cert-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .grid-background {
    background-size:
      50px 50px,
      50px 50px;
  }
}
</style>

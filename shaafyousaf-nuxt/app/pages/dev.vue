<template>
  <div class="dev-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">Developer Experience</h1>
        <p class="page-subtitle">
          Building robust applications with modern technologies
        </p>
      </header>

      <!-- Current Role -->
      <section class="section">
        <div class="role-card featured">
          <div class="role-header">
            <div>
              <span class="role-badge current">Current Position</span>
              <h2 class="role-title">Software Developer</h2>
              <h3 class="role-company">University of Toronto - UTS</h3>
            </div>
            <span class="role-date">September 2025 - Present</span>
          </div>
          <p class="role-description">
            Building powerful web applications with .NET Blazor, GraphQL, and Entity Framework. 
            Developing enterprise solutions for university systems and services.
          </p>
          <div class="tech-stack">
            <span class="tech-tag">.NET Core</span>
            <span class="tech-tag">Blazor</span>
            <span class="tech-tag">GraphQL</span>
            <span class="tech-tag">Entity Framework</span>
            <span class="tech-tag">Azure</span>
          </div>
        </div>
      </section>

      <!-- Experience Timeline -->
      <section class="section">
        <h2 class="section-title">Work Experience</h2>
        <div class="timeline">
          <div 
            v-for="(role, index) in workExperience" 
            :key="index"
            class="timeline-item"
          >
            <div class="timeline-marker"></div>
            <div class="role-card">
              <div class="role-header">
                <div>
                  <h3 class="role-title">{{ role.title }}</h3>
                  <h4 class="role-company">{{ role.company }}</h4>
                </div>
                <span class="role-date">{{ role.date }}</span>
              </div>
              <p class="role-description">{{ role.description }}</p>
              <div v-if="role.tags" class="tech-stack">
                <span v-for="tag in role.tags" :key="tag" class="tech-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Overview -->
      <section class="section">
        <h2 class="section-title">Tech Stack & Skills</h2>
        <div class="skills-grid">
          <div 
            v-for="category in techStack" 
            :key="category.name"
            class="skill-category"
          >
            <Icon :name="category.icon" size="32" class="category-icon" />
            <h3 class="category-name">{{ category.name }}</h3>
            <div class="skill-tags">
              <span v-for="skill in category.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Resume Download -->
      <section class="section cta-section">
        <div class="cta-card">
          <Icon name="mdi:file-document" size="48" class="cta-icon" />
          <h2>Download My Resume</h2>
          <p>Get a detailed overview of my experience, skills, and education</p>
          <a 
            href="https://drive.google.com/file/d/1_H4GS3Ufw6UOnEJhch0OapYTXMUZFIor/view" 
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
            <Icon name="mdi:download" />
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Developer - Shaaf Yousaf',
  description: 'Explore my development experience, tech stack, and professional journey',
})

const workExperience = [
  {
    title: 'Web Developer',
    company: 'TDSB - Bloor CI',
    date: 'September 2022 - January 2023',
    description: 'Developed and maintained school website, implemented responsive design and accessibility features.',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    title: 'Video Editor',
    company: 'Freelance',
    date: 'November 2020 - May 2022',
    description: 'Created promotional videos, motion graphics, and visual effects for various clients.',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
  },
]

const techStack = [
  {
    name: 'Frontend',
    icon: 'mdi:react',
    skills: ['Nuxt.js', 'Next.js', 'Vue', 'React', 'Blazor', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: 'mdi:server',
    skills: ['.NET Core', 'Node.js', 'Express', 'FastAPI', 'Flask', 'GraphQL'],
  },
  {
    name: 'Database',
    icon: 'mdi:database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SupaBase', 'Entity Framework'],
  },
  {
    name: 'DevOps & Tools',
    icon: 'mdi:cloud',
    skills: ['Docker', 'Azure', 'GitHub Actions', 'Git', 'Linux', 'Digital Ocean'],
  },
  {
    name: 'Languages',
    icon: 'mdi:code-braces',
    skills: ['C#', 'Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'Assembly'],
  },
  {
    name: 'AI & ML',
    icon: 'mdi:brain',
    skills: ['Cohere', 'OpenAI', 'Anthropic', 'YOLOv5', 'Scikit-Learn'],
  },
]
</script>

<style scoped>
.dev-page {
  min-height: 100vh;
  padding: var(--spacing-xl) 0;
}

.page-header {
  text-align: center;
  padding: var(--spacing-xl) 0;
  margin-bottom: var(--spacing-lg);
}

.page-title {
  font-size: clamp(var(--font-size-4xl), 8vw, var(--font-size-5xl));
  font-weight: 900;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, var(--color-white), var(--color-gold));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

/* Role Cards */
.role-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  transition: all var(--transition-base);
}

.role-card.featured {
  border-color: var(--color-gold);
  box-shadow: var(--shadow-gold);
}

.role-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-2px);
}

.role-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: var(--spacing-sm);
}

.role-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.role-badge.current {
  background: rgba(255, 215, 0, 0.2);
  border-color: var(--color-gold);
}

.role-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--text-primary);
}

.role-company {
  font-size: var(--font-size-lg);
  font-weight: 500;
  margin: 0;
  color: var(--text-secondary);
}

.role-date {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  white-space: nowrap;
}

.role-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  color: var(--color-gold);
  font-weight: 500;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--color-gold),
    rgba(255, 215, 0, 0.1)
  );
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-lg);
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 1rem;
  width: 12px;
  height: 12px;
  background: var(--color-gold);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.2);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.skill-category {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  transition: all var(--transition-base);
}

.skill-category:hover {
  border-color: var(--color-gold);
  transform: translateY(-4px);
}

.category-icon {
  color: var(--color-gold);
  margin-bottom: var(--spacing-sm);
}

.category-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin: 0 0 var(--spacing-sm);
  color: var(--text-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: var(--border-thin);
  border-radius: 20px;
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
}

/* CTA Section */
.cta-section {
  padding: var(--spacing-xl) 0;
}

.cta-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: var(--border-thin);
  border-radius: var(--border-radius-lg);
  max-width: 700px;
  margin: 0 auto;
}

.cta-icon {
  color: var(--color-gold);
  margin-bottom: var(--spacing-md);
}

.cta-card h2 {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-sm);
}

.cta-card p {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

@media (max-width: 768px) {
  .role-header {
    flex-direction: column;
  }
  
  .role-date {
    white-space: normal;
  }
  
  .timeline {
    padding-left: 1.5rem;
  }
}
</style>

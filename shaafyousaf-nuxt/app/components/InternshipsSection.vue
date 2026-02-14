<script setup lang="ts">
import { Motion } from 'motion-v'

const emit = defineEmits<{
  (e: 'item-click', item: any): void
}>()

const jobs = [
  {
    position: 'Design Director',
    company: 'Zainematics',
    location: 'Remote',
    date: 'Sep 2022 - Jan 2023',
    duration: '5 months',
    employmentType: 'Full-Time',
    type: 'Arts Internships',
    current: false,
    description: 'Spearheaded the creative vision for a forward-thinking EdTech startup. Designed comprehensive brand identities, user interfaces, and marketing materials. Led a team of designers to create engaging educational content and interactive learning experiences that resonated with students across different age groups.',
    responsibilities: [
      'Led design strategy and creative direction for EdTech platform serving 10,000+ users',
      'Designed and implemented UI/UX for web and mobile applications using Figma',
      'Created brand identity including logo, style guide, and marketing collateral',
      'Conducted user research and usability testing to inform design decisions',
      'Managed a team of 4 designers and coordinated with development team'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Miro', 'HTML/CSS'],
    achievements: [
      'Increased user engagement by 65% through redesigned interface',
      'Established design system used across all company products',
      'Reduced design-to-development handoff time by 50% with component library'
    ],
    image: '/resources/Zarab.png',
    link: 'https://github.com/ShaafPlayz'
  },
  {
    position: 'Head of Media Production',
    company: 'International School Lahore',
    location: 'Lahore, Pakistan',
    date: 'Nov 2020 - May 2022',
    duration: '1 year 7 months',
    employmentType: 'Full-Time',
    type: 'Arts Internships',
    current: false,
    description: 'Managed end-to-end media production for school events, promotional content, and educational materials. Directed video shoots, edited footage, and produced high-quality content that showcased the school\'s achievements. Built a comprehensive media library and established production workflows that improved content delivery timelines by 60%.',
    responsibilities: [
      'Managed media production for 50+ school events annually including live streaming',
      'Directed and produced promotional videos and educational content',
      'Built and maintained media library with 1000+ assets organized for easy access',
      'Trained staff and students on video production and content creation',
      'Established workflows and quality standards for all media output'
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'Final Cut Pro', 'DaVinci Resolve', 'Camera Operation', 'Audio Engineering'],
    achievements: [
      'Improved content delivery timelines by 60% through streamlined workflows',
      'Produced award-winning promotional video that increased enrollment by 30%',
      'Established media production standards adopted school-wide'
    ],
    image: '/resources/GLOW.png',
    link: 'https://github.com/ShaafPlayz'
  }
]

// Group jobs by type
const artsJobs = jobs.filter(job => job.type === 'Arts Internships')
</script>

<template>
  <div class="internships-section">
    <!-- Featured Internship -->
    <h2 class="section-title">SWE</h2>
    <FeaturedInternship @click="emit('item-click', $event)" />


    <!-- Arts Internships -->
    <Motion
      :initial="{ opacity: 0, filter: 'blur(8px)', y: 20 }"
      :animate="{ opacity: 1, filter: 'blur(0px)', y: 0 }"
      :transition="{ duration: 0.5, delay: 0.3 }"
    >
      <h2 class="section-title">Design & Media</h2>
      <div class="internships-grid">
        <Motion
          v-for="(job, index) in artsJobs"
          :key="index"
          :initial="{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }"
          :animate="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :transition="{ duration: 0.4, delay: 0.35 + index * 0.08 }"
          class="internship-card"
          @click="emit('item-click', job)"
        >
          <div class="card-header">
            <h3 class="job-position">{{ job.position }}</h3>
          </div>
          <p class="company-name">{{ job.company }}</p>
          <div class="job-meta">
            <span class="meta-item"><Icon name="heroicons:map-pin-20-solid" class="meta-icon" /> {{ job.location }}</span>
            <span class="meta-item"><Icon name="heroicons:calendar-20-solid" class="meta-icon" /> {{ job.date }}</span>
          </div>
          <div class="tech-preview">
            <span v-for="(tech, i) in job.technologies.slice(0, 3)" :key="i" class="tech-tag">{{ tech }}</span>
            <span v-if="job.technologies.length > 3" class="more-tag">+{{ job.technologies.length - 3 }}</span>
          </div>
        </Motion>
      </div>
    </Motion>
  </div>
</template>

<style scoped>
.internships-section {
  padding: 0.5rem 0;
}

.section-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #000000;
  margin-bottom: 0.875rem;
  letter-spacing: -0.3px;
}

.internships-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.internship-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.internship-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: #d0d0d0;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.job-position {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #000000;
  line-height: 1.25;
  flex: 1;
}

.current-badge {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #000000;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

.company-name {
  font-family: 'Nexa', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 0.6rem;
}

.job-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.meta-item {
  font-family: 'Nexa', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  color: #888888;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.meta-icon {
  width: 14px;
  height: 14px;
  color: #666666;
}

.tech-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tech-tag {
  background: #f5f5f5;
  color: #333333;
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

.more-tag {
  background: #e8e8e8;
  color: #333333;
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .internships-grid {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }

  .section-title {
    font-size: 1.25rem;
  }

  .job-position {
    font-size: 1rem;
  }
}
</style>

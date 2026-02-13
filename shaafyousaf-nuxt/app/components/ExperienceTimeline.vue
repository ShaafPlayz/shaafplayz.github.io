<template>
  <div class="work-section">
    <h3 class="section-title">Experience</h3>
    <div class="work-timeline">
      <div class="work-card current">
        <div class="work-header">
          <div class="work-title-group">
            <h4 class="work-position">Junior Software Developer</h4>
            <span class="work-company">University of Toronto Schools</span>
          </div>
          <h4 class="work-date">Sep 2025 - Present</h4>
        </div>
      </div>
      <div class="work-card">
        <div class="work-header">
          <div class="work-title-group">
            <h4 class="work-position">Design Director</h4>
            <span class="work-company">Zainematics</span>
          </div>
          <h4 class="work-date">Sep 2022 - Jan 2023</h4>
        </div>
      </div>
      <div class="work-card">
        <div class="work-header">
          <div class="work-title-group">
            <h4 class="work-position">Head of Media Production</h4>
            <span class="work-company">International School Lahore</span>
          </div>
          <h4 class="work-date">Nov 2020 - May 2022</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-section {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.7rem;
  font-weight: 900;
}

.work-timeline {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.work-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 30, 0.6));
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.work-card.current {
  border-color: rgba(255, 215, 0, 0.6);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(0, 0, 0, 0.9));
}

.work-card:hover {
  transform: translateX(8px);
  border-color: rgba(255, 215, 0, 0.6);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
}

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.work-title-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.work-position {
  font-size: var(--font-size-lg);
  font-weight: 900;
  color: #ffffff;
  margin: 0;
}

.work-company {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.work-card.current .work-position {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.work-card.current .work-company {
  color: rgba(255, 215, 0, 0.9);
}

.work-date {
  font-size: var(--font-size-sm);
  color: rgba(255, 215, 0, 0.8);
  font-weight: 600;
  white-space: nowrap;
  margin: 0;
}

.work-card.current .work-date {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .work-header {
    flex-direction: column;
  }
  
  .work-date {
    white-space: normal;
  }
}
</style>

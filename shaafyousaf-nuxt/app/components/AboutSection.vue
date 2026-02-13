<template>
  <section class="about" id="aboutsection">
    <div class="about-container">
      <h2 class="about-title">OVERVIEW</h2>
      
      <div class="about-content">
        <ProfileHeader />
        <StatsGrid />
        <ConnectLinks />
        <ExperienceTimeline />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 1rem 0 0.5rem 0;
  background-color: #000000;
  position: relative;
  box-shadow: 0 0 60px 0px #000000;
}

.about-container {
  display: grid;
  grid-template-columns: 52px 75%;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  justify-content: center;
}

.about-title {
  position: sticky;
  top: 120px;
  font-size: 2rem;
  color: #ffffff;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-align: right;
  height: fit-content;
  margin: 0;
  padding: 1rem 0;
  font-weight: 900;
}

.about-content {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
  }
  
  .about-title {
    position: relative;
    writing-mode: horizontal-tb;
    transform: none;
    text-align: center;
    top: 0;
  }
}
</style>

<template>
  <section class="projects pub">
    <h2>Published Softwares</h2>
    <div class="published-grid">
      <a 
        href="https://chromewebstore.google.com/detail/mbknnccopgggeedhnloodppflepboggp?utm_source=item-share-cb" 
        class="published-card" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div class="project-image">
          <NuxtImg src="/resources/PortfolioPromo.png" alt="Slowed Enhanced Extension" />
        </div>
        <div>
          <div class="published-title">Slowed Enhanced</div>
          <div class="published-subtitle">A Google Chrome Extension for Advanced Audio Controls</div>
          <div class="published-category">
            <i class="fas fa-chrome"></i> Published on Chrome Web Store
          </div>
          <div class="published-tech-stack">
            <span class="published-tech-item">.NET C#</span>
            <span class="published-tech-item">Blazor Framework</span>
            <span class="published-tech-item">MudBlazor</span>
            <span class="published-tech-item">JavaScript</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 5rem 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 900;
}

.published-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  padding: 0 20px;
}

.published-card {
  background: rgba(255, 255, 255, 0.283);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 1s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  margin: 1rem;
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 2rem;
}

.published-card:hover {
  background: rgb(255, 255, 255);
  transition: 0.5s;
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(255, 255, 255, 0.3);
}

.project-image {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 10px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.published-card:hover .project-image img {
  transform: scale(1.05);
}

.published-title {
  padding: 1rem 1rem 0rem 1rem;
  color: rgb(0, 0, 0);
  font-size: 1.7rem;
  font-weight: 900;
  text-align: left;
}

.published-subtitle {
  padding: 0.2rem 1rem 1rem 1rem;
  color: rgb(0, 0, 0);
  font-size: 1.0rem;
  font-weight: 300;
  text-align: left;
}

.published-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 166, 0, 0.765);
  backdrop-filter: blur(30px);
  color: #000000;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.published-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  justify-content: flex-start;
}

.published-tech-item {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  background: rgb(0, 0, 0);
  border-radius: 5px;
  color: #ffffff;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .published-card {
    flex-direction: column;
  }
  
  .project-image {
    max-width: 100%;
  }
  
  .projects h2 {
    font-size: 2rem;
  }
}
</style>

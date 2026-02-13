<template>
  <section class="projects hackathons">
    <h2>Hackathon Wins</h2>
    <div class="hackathons-grid">
      <!-- imagEHR - GenAI Genesis 2025 -->
      <a 
        href="https://devpost.com/software/imagehr" 
        class="hackathon-card" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div class="hackathon-content">
          <div class="hackathon-event">GenAI Genesis 2025 (Toronto)</div>
          <div class="hackathon-title">imagEHR</div>
          <div class="hackathon-subtitle">AI-Powered Clinical Data Extraction & CDISC Mapping</div>
          <div class="hackathon-description">
            Automates the extraction of EHR (text) and X-ray (image) data, then maps it to CDISC-compliant SDTM formats for streamlined research, clinical trials, and regulatory use.
          </div>
          <div class="hackathon-prize">
            <i class="fas fa-award"></i>
            <span>Google & HBSU Best Healthcare AI Hack</span>
          </div>
          <div class="hackathon-tech-stack">
            <span class="hackathon-tech-item">Python</span>
            <span class="hackathon-tech-item">Flask</span>
            <span class="hackathon-tech-item">Cohere LLM</span>
            <span class="hackathon-tech-item">YOLOv5</span>
            <span class="hackathon-tech-item">JavaScript</span>
          </div>
          <div class="hackathon-links">
            <span class="hackathon-link"><i class="fab fa-github"></i> GitHub</span>
            <span class="hackathon-link"><i class="fas fa-external-link-alt"></i> Live Demo</span>
          </div>
        </div>
      </a>

      <!-- IDRAK - DaVinci Competition 2026 -->
      <a 
        href="https://devpost.com/software/idrak" 
        class="hackathon-card" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div class="hackathon-content">
          <div class="hackathon-event">DaVinci Competition 2026 (Toronto)</div>
          <div class="hackathon-title">idrak</div>
          <div class="hackathon-subtitle">Early MVP for a Real-time assistant for context-aware visual tasks.</div>
          <div class="hackathon-description">
            A camera-based assistant engine that builds temporal context from live video, enabling real-time visual guidance, safety warnings, and step-by-step assistance for hands-on tasks.
          </div>
          <div class="hackathon-prize">
            <i class="fas fa-award"></i>
            <span>1st Place Overall Winner</span>
          </div>
          <div class="hackathon-tech-stack">
            <span class="hackathon-tech-item">Python</span>
            <span class="hackathon-tech-item">TypeScript</span>
            <span class="hackathon-tech-item">Vue</span>
            <span class="hackathon-tech-item">FastAPI</span>
            <span class="hackathon-tech-item">OpenCV</span>
            <span class="hackathon-tech-item">Anthropic</span>
            <span class="hackathon-tech-item">Whisper</span>
          </div>
          <div class="hackathon-links">
            <span class="hackathon-link"><i class="fab fa-github"></i> GitHub</span>
            <span class="hackathon-link"><i class="fas fa-glasses"></i> AR Prototype</span>
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
  background: linear-gradient(90deg, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

.hackathons-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 20px;
}

.hackathon-card {
  background: linear-gradient(145deg, rgba(255, 215, 0, 0.08), rgba(0, 0, 0, 0.9));
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(255, 215, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  text-decoration: none;
  display: block;
  padding: 1.5rem;
}

.hackathon-card:hover {
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.25);
  border-color: rgba(255, 215, 0, 0.5);
  background: linear-gradient(145deg, rgba(255, 215, 0, 0.15), rgba(0, 0, 0, 0.95));
  transform: translateY(-5px);
}

.hackathon-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;
}

.hackathon-event {
  color: rgba(255, 215, 0, 0.8);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
}

.hackathon-title {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 0.3rem;
  line-height: 1.2;
}

.hackathon-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.hackathon-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.hackathon-prize {
  background: rgba(255, 215, 0, 0.1);
  border-left: 3px solid #ffd700;
  padding: 0.8rem 1rem;
  border-radius: 0 10px 10px 0;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.hackathon-prize i {
  color: #ffd700;
  font-size: 1.1rem;
  margin-top: 0.1rem;
}

.hackathon-prize span {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
}

.hackathon-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.hackathon-tech-item {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.hackathon-card:hover .hackathon-tech-item {
  background: rgba(255, 215, 0, 0.15);
  border-color: rgba(255, 215, 0, 0.3);
}

.hackathon-links {
  display: flex;
  gap: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.hackathon-link {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;
}

.hackathon-link i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.hackathon-card:hover .hackathon-link {
  color: #ffd700;
}

.hackathon-card:hover .hackathon-link i {
  color: #ffd700;
}

@media (max-width: 768px) {
  .hackathons-grid {
    grid-template-columns: 1fr;
  }
  
  .projects h2 {
    font-size: 2rem;
  }
}
</style>

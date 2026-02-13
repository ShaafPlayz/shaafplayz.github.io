<template>
  <div class="connect-section">
    <div class="connect-grid">
      <a href="https://github.com/shaafyousaf" target="_blank" class="connect-card github">
        <div class="connect-info">
          <i class="fas fa-external-link-alt connect-arrow"></i>
          <h4>GitHub</h4>
        </div>
      </a>
      <a href="https://linkedin.com/in/shaafyousaf" target="_blank" class="connect-card linkedin">
        <div class="connect-info">
          <i class="fas fa-external-link-alt connect-arrow"></i>
          <h4>LinkedIn</h4>
        </div>
      </a>
      <a href="https://drive.google.com/file/d/1fex-y7cQ5nDl3tTRKRzx0cr0foUuy36K/view" target="_blank" class="connect-card portfolio">
        <div class="connect-info">
          <i class="fas fa-external-link-alt connect-arrow"></i>
          <h4>Design Portfolio</h4>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.connect-section {
  margin-bottom: 1rem;
}

.connect-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.connect-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 30, 0.8));
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.7rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.connect-card:hover {
  border-color: rgba(255, 215, 0, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
}

.connect-info {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.connect-arrow {
  color: rgba(255, 215, 0, 0.8);
  font-size: 0.9rem;
}

.connect-info h4 {
  background: linear-gradient(135deg, #FFFFFF, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.connect-card.github:hover {
  background: linear-gradient(135deg, rgba(51, 51, 51, 0.3), rgba(17, 17, 17, 0.8));
}

.connect-card.linkedin:hover {
  background: linear-gradient(135deg, rgba(0, 119, 181, 0.3), rgba(0, 88, 133, 0.8));
}

.connect-card.portfolio:hover {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 165, 0, 0.8));
}

@media (max-width: 768px) {
  .connect-grid {
    grid-template-columns: 1fr;
  }
}
</style>

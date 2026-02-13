<template>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-content">
        <h4>3+</h4>
        <span>Years Developing</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-content">
        <h4>11+</h4>
        <span>Years Digital Artist</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.stat-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 30, 0.6));
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 0.8rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  border-color: rgba(255, 215, 0, 0.6);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
}

.stat-content h4 {
  font-size: 1.8rem;
  background: linear-gradient(135deg, #FFFFFF, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
  font-weight: 900;
  line-height: 1;
}

.stat-content span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  font-weight: 500;
}
</style>

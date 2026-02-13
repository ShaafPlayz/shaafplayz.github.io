<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 style="margin-bottom: 0; font-weight: 300">WELCOME TO</h1>
        <h1 style="margin-bottom: 0.5rem">SHAAF'S PORTFOLIO</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  color: white;
  padding-top: 80px;
}

.hero-content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
}

.hero-text h1 {
  font-size: 3.5rem;
  line-height: 0.8;
  margin-bottom: 1rem;
  mix-blend-mode: exclusion;
  color: #ffffff;
  cursor: default;
  transition: 2s ease-out;
  font-weight: 900;
}

.hero-text h1:hover {
  font-weight: 100;
  transition: 3s ease-out;
}

.hero-text h1[style*="font-weight: 300"] {
  font-weight: 300;
  font-size: clamp(1.5rem, 5vw, 3rem);
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    padding-top: 60px;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
}
</style>

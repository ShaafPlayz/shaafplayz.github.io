<template>
  <div class="profile-header-card">
    <div class="profile-avatar">
      <NuxtImg src="/resources/pic.png" alt="Shaaf Yousaf" />
    </div>
    <div class="profile-info">
      <h3 class="profile-name">Shaaf Yousaf</h3>
      <div class="profile-roles">
        <span class="role-tag">3rd Year Undergrad at University Of Toronto</span>
        <span class="role-tag">.NET Developer</span>
        <span class="role-tag">FullStack Developer</span>
        <span class="role-tag">Digital Artist</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-header-card {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 30, 0.8));
  border: 1px solid rgba(255, 215, 0, 0.4);
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(15px);
  margin-bottom: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.profile-header-card:hover {
  border-color: rgba(255, 215, 0, 0.6);
}

.profile-avatar {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.profile-avatar img:hover {
  transform: scale(1.05);
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.profile-name {
  font-size: 1.6rem;
  font-weight: 900;
  background: linear-gradient(135deg, #FFD700, #FFA500, #FF8C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.profile-roles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.role-tag {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(255, 165, 0, 0.15));
  color: #B8860B;
  padding: 0.25rem 0.6rem;
  border-radius: 15px;
  font-size: 0.75rem;
  border: 1px solid rgba(255, 215, 0, 0.4);
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.role-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
}

@media (max-width: 768px) {
  .profile-header-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .profile-roles {
    justify-content: center;
  }
}
</style>

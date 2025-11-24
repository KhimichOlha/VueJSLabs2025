<script setup>
import Button from 'primevue/button';
</script>

<template>
  <section class="hero-container">
    <div class="hero-content">
      <h1 class="title">
        Керуйте багами, <br />
        <span class="highlight">а не хаосом</span>
      </h1>
      <p class="subtitle">
        Найзручніша SaaS-платформа для відстеження помилок у ваших проєктах.
        Інтеграція з GitHub, Jira та Slack за 5 хвилин.
      </p>
      
      <div class="actions">
        <Button label="Спробувати Demo" icon="pi pi-arrow-right" iconPos="right" size="large" />
        <Button label="Дізнатися більше" severity="secondary" variant="outlined" size="large" />
      </div>
    </div>
    
    <div class="hero-image">
        <i class="pi pi-desktop" style="font-size: 10rem; color: var(--p-surface-400)"></i>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 2rem;
    background: var(--p-surface-50); 
    border-radius: 1rem;
    margin: 2rem 0;
}

.hero-content {
    max-width: 50%;
}

.title {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--p-text-color);
}

.highlight {
    color: var(--p-primary-color); 
}

.subtitle {
    font-size: 1.2rem;
    color: var(--p-text-muted-color);
    margin-bottom: 2rem;
}

.actions {
    display: flex;
    gap: 1rem;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
}

@media (max-width: 768px) {
    .hero-container {
        flex-direction: column;
        text-align: center;
    }
    .hero-content {
        max-width: 100%;
    }
    .actions {
        justify-content: center;
    }
    .hero-image {
        margin-top: 2rem;
    }
}
</style>
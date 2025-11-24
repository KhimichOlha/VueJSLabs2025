<script setup>
import { inject } from 'vue';
import { useToast } from 'primevue/usetoast'; 
import Button from 'primevue/button';

const toast = useToast();
const copyToClipboard = inject('copyToClipboard');

const copyPromoCode = async () => {
    const code = "BUGTRACK2025";
    
    const result = await copyToClipboard(code);

    if (result) {
        toast.add({ 
            severity: 'success', 
            summary: 'Успіх', 
            detail: 'Промокод скопійовано в буфер обміну!', 
            life: 3000 
        });
    } else {
        toast.add({ 
            severity: 'error', 
            summary: 'Помилка', 
            detail: 'Не вдалося скопіювати', 
            life: 3000 
        });
    }
};
</script>

<template>
  <section class="hero-container">
    <div class="hero-content">
      <h1 class="title">
        Керуйте багами, <br />
        <span class="highlight">а не хаосом</span>
      </h1>
      <p class="subtitle">
        Найзручніша SaaS-платформа для відстеження помилок.
      </p>
      
      <div class="promo-block">
          <span class="promo-text">Промокод: <strong>BUGTRACK2025</strong></span>
          <Button 
            icon="pi pi-copy" 
            class="p-button-rounded p-button-text" 
            @click="copyPromoCode" 
            v-tooltip="'Скопіювати код'"
          />
      </div>

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


.promo-block {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--p-surface-200);
    padding: 5px 15px;
    border-radius: 20px;
    margin-bottom: 20px;
    color: var(--p-text-color);
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

<script setup>
import Fieldset from 'primevue/fieldset';

const features = [
    { title: 'Real-time Sync', icon: 'pi pi-sync', text: 'Синхронізація між усіма розробниками в реальному часі.' },
    { title: 'Jira Integration', icon: 'pi pi-github', text: 'Двосторонній зв\'язок з вашими улюбленими інструментами.' },
    { title: 'Analytics', icon: 'pi pi-chart-bar', text: 'Детальні звіти про продуктивність команди.' },
    { title: 'Security', icon: 'pi pi-lock', text: 'Шифрування даних корпоративного рівня.' }
];
</script>

<template>
    <section class="features-container">
        <div class="problem-solution">
            <div class="problem">
                <h3><i class="pi pi-times-circle text-red-500"></i> Проблема</h3>
                <p>Хаос у чатах, загублені тікети, незрозумілі пріоритети та зірвані дедлайни через погану комунікацію.</p>
            </div>
            <div class="arrow">
                <i class="pi pi-arrow-right"></i>
            </div>
            <div class="solution">
                <h3><i class="pi pi-check-circle text-green-500"></i> Рішення</h3>
                <p>BugTracker Pro структурує кожен баг, призначає відповідальних і автоматизує рутину.</p>
            </div>
        </div>

        <h2 class="section-title">Чому обирають нас</h2>
        <div class="features-grid">
            <div v-for="item in features" :key="item.title" class="feature-card">
                <i :class="item.icon" style="font-size: 2.5rem; color: var(--p-primary-color)"></i>
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.features-container {
    padding: 4rem 0;
}


.problem-solution {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;
    background: var(--p-surface-100);
    padding: 3rem;
    border-radius: 1rem;
}

.problem, .solution {
    flex: 1;
    text-align: center;
}

.problem h3, .solution h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.text-red-500 { color: #ef4444; }
.text-green-500 { color: #22c55e; }

.arrow i {
    font-size: 2rem;
    color: var(--p-text-muted-color);
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    text-align: center;
}

.feature-card {
    padding: 2rem;
    border: 1px solid var(--p-surface-200);
    border-radius: 10px;
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
    .problem-solution {
        flex-direction: column;
    }
    .arrow { transform: rotate(90deg); }
}
</style>

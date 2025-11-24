<script setup>
import { ref, computed } from "vue";
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';


const plans = ref([
    {
        name: 'Starter',
        price: '0 грн',
        description: 'Для особистих проєктів',
        features: ['До 2 користувачів', '10 активних багів', 'Історія за 7 днів', 'Базова підтримка'],
        buttonLabel: 'Спробувати безкоштовно',
        highlight: false
    },
    {
        name: 'Team',
        price: '400 грн/міс',
        description: 'Для малих команд',
        features: ['До 10 користувачів', 'Безлімітні баги', 'Історія за 30 днів', 'Інтеграція з Slack'],
        buttonLabel: 'Обрати Team',
        highlight: true 
    },
    {
        name: 'Enterprise',
        price: 'від 2000 грн/міс',
        description: 'Для великих компаній',
        features: ['Безліміт користувачів', 'Власний сервер', 'Пріоритетна підтримка 24/7', 'API доступ'],
        buttonLabel: "Зв'язатися з нами",
        highlight: false
    }
]);


const basePricePerUser = 200; 


const userCount = ref(5);


const estimatedCost = computed(() => {
    return userCount.value * basePricePerUser;
});
</script>

<template>
    <section class="pricing-section">
        <h2 class="section-title">Оберіть свій план</h2>
        
        <div class="pricing-grid">
            <Card v-for="plan in plans" :key="plan.name" :class="{ 'highlight-card': plan.highlight }">
                <template #title>
                    <div class="plan-header">
                        {{ plan.name }}
                        <span class="plan-price">{{ plan.price }}</span>
                    </div>
                </template>
                <template #subtitle>
                    {{ plan.description }}
                </template>
                <template #content>
                    <ul class="features-list">
                        <li v-for="(feature, index) in plan.features" :key="index">
                            <i class="pi pi-check-circle"></i> {{ feature }}
                        </li>
                    </ul>
                </template>
                <template #footer>
                    <Button 
                        :label="plan.buttonLabel" 
                        class="w-full" 
                        :severity="plan.highlight ? 'primary' : 'secondary'" 
                        :variant="plan.highlight ? undefined : 'outlined'"
                    />
                </template>
            </Card>
        </div>

        <div class="calculator-block">
            <h3>Розрахуйте бюджет команди (Team Plan)</h3>
            <div class="calc-content">
                <div class="field">
                    <label for="users" class="block mb-2">Кількість користувачів:</label>
                    <InputNumber 
                        v-model="userCount" 
                        inputId="users" 
                        showButtons 
                        :min="1" 
                        :max="100" 
                        buttonLayout="horizontal"
                        style="width: 10rem"
                    >
                        <template #incrementbuttonicon>
                            <span class="pi pi-plus" />
                        </template>
                        <template #decrementbuttonicon>
                            <span class="pi pi-minus" />
                        </template>
                    </InputNumber>
                </div>
                
                <div class="result">
                    <p>Орієнтовна вартість:</p>
                    <span class="price-tag">{{ estimatedCost }} грн/міс.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pricing-section {
    padding: 4rem 0;
}


.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--p-text-color);
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.plan-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.plan-price {
    font-size: 1.2rem;
    color: var(--p-primary-color);
}

.features-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
}

.features-list li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.features-list i {
    color: var(--p-green-500);
}


.highlight-card {
    border: 2px solid var(--p-primary-color);
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}


.calculator-block {
    background: var(--p-surface-100);
    padding: 2rem;
    border-radius: 1rem;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.calc-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.result {
    text-align: left;
}

.price-tag {
    font-size: 2rem;
    font-weight: bold;
    color: var(--p-primary-color);
}

.w-full {
    width: 100%;
}
</style>

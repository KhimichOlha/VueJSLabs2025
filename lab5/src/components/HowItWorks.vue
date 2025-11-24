<script setup>
import { inject } from 'vue';
import { useToast } from 'primevue/usetoast';
import Timeline from 'primevue/timeline';
import Button from 'primevue/button';
import Card from 'primevue/card';

const toast = useToast();
const copyToClipboard = inject('copyToClipboard');

const events = [
    { status: 'Реєстрація', icon: 'pi pi-user-plus', color: '#9C27B0', text: 'Створіть акаунт за 30 секунд.' },
    { status: 'Інтеграція', icon: 'pi pi-cog', color: '#673AB7', text: 'Вставте API ключ у свій проєкт.' },
    { status: 'Робота', icon: 'pi pi-check', color: '#FF9800', text: 'Отримуйте баг-репорти автоматично.' },
];


const apiKey = "pk_live_51MzQ...";

const copyApiKey = async () => {
    const res = await copyToClipboard(apiKey);
    if(res) {
        toast.add({ severity: 'info', summary: 'API Key', detail: 'Ключ скопійовано для інтеграції', life: 3000 });
    }
};
</script>

<template>
    <section class="how-it-works">
        <h2 class="text-center mb-5">Як це працює</h2>
        
        <Timeline :value="events" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="custom-marker" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card class="mb-3">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #content>
                        <p>{{ slotProps.item.text }}</p>
                        
                        <div v-if="slotProps.item.status === 'Інтеграція'" class="api-box">
                            <code>{{ apiKey }}</code>
                            <Button icon="pi pi-copy" size="small" text @click="copyApiKey" />
                        </div>
                    </template>
                </Card>
            </template>
        </Timeline>
    </section>
</template>

<style scoped>
.how-it-works { padding: 4rem 0; }
.text-center { text-align: center; }
.mb-5 { margin-bottom: 3rem; }

.custom-marker {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 50%;
    z-index: 1;
}

.api-box {
    background: #333;
    color: #0f0;
    padding: 5px 10px;
    border-radius: 4px;
    margin-top: 10px;
    font-family: monospace;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
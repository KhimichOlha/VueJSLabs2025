<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

const items = ref([
    { label: 'Головна', icon: 'pi pi-home' },
    { label: 'Переваги', icon: 'pi pi-star' },
    { label: 'Тарифи', icon: 'pi pi-dollar' },
    { label: 'FAQ', icon: 'pi pi-question-circle' },
    { label: 'Контакти', icon: 'pi pi-envelope' }
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <div class="logo-container">
            <i class="pi pi-bug" style="font-size: 1.5rem; color: var(--p-primary-color)"></i>
            <span class="brand-name">BugTracker Pro</span>
        </div>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
            <Button label="Увійти" severity="secondary" text />
            <Button label="Почати безкоштовно" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style scoped>
.logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
    font-weight: bold;
    font-size: 1.2rem;
}
</style>

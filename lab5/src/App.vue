<script setup>
import MyHeader from './components/MyHeader.vue';
import HeroSection from './components/HeroSection.vue';
import Toast from 'primevue/toast'; 
</script>

<template>
  <div class="app-container">
    <Toast /> 
    
    <MyHeader />
    <main>
      <HeroSection />
    </main>
  </div>
</template>

<style>
.app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    font-family: var(--font-family);
}
</style>

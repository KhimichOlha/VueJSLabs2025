<script setup>
import MyHeader from './components/MyHeader.vue';
import HeroSection from './components/HeroSection.vue';
import Pricing from './components/Pricing.vue';
import Toast from 'primevue/toast';
</script>

<template>
  <div class="app-container">
    <Toast />
    <MyHeader />
    <main>
      <HeroSection />
      
      <Pricing />
      
    </main>
  </div>
</template>

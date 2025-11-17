<template>
  <div class="home">
    <h1>Останні новини</h1>
    
    <div class="news-grid">
      <NewsCard 
        v-for="item in newsList" 
        :key="item.id" 
        :news="item" 
      />
    </div>

    <div class="ad-container">
      <AdSlot text="Реклама на головній: Купуйте Vue Mastery!" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { news } from '../data/news'; 
import NewsCard from '../components/NewsCard.vue';
import AdSlot from '../components/AdSlot.vue'; 

const newsList = ref(news);
</script>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.ad-container {
  margin-top: 2rem;
  text-align: center;
}
</style>
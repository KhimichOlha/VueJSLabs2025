<template>
  <div class="article-view" v-if="article">
    <img :src="article.image" :alt="article.title" class="article-image" />
    <h1>{{ article.title }}</h1>
    <p class="date">{{ article.date }}</p>
    <div class="content">{{ article.content }}</div>
    
    <hr />

    <h3>Рекламна пауза</h3>
    <div @click="showModal = true">
      <AdSlot text=" ТИСНИ СЮДИ! Супер знижки на курси Vue 3! " />
    </div>

    <button class="back-btn" @click="$router.push('/')">← Назад</button>

    <ModalWindow :isOpen="showModal" @close="showModal = false">
      <h2>Спеціальна пропозиція!</h2>
      <p>Тільки сьогодні знижка 50% на всі підручники з JavaScript.</p>
      <img src="https://via.placeholder.com/400x200?text=SALE" alt="Sale" style="width:100%; margin-top:10px;">
      <button @click="showModal = false" style="margin-top: 1rem;">Закрити</button>
    </ModalWindow>

  </div>
  
  <div v-else class="loading">
    <p>Новину не знайдено або завантаження...</p>
    <RouterLink to="/">На головну</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { news } from '../data/news';
import AdSlot from '../components/AdSlot.vue';
import ModalWindow from '../components/ModalWindow.vue';

const route = useRoute();
const router = useRouter();
const showModal = ref(false);

const article = computed(() => {
  return news.find(n => n.id == route.params.id);
});
</script>

<style scoped>
.article-view {
  max-width: 800px;
  margin: 0 auto;
}
.article-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}
.date {
  color: #666;
  margin-bottom: 1rem;
}
.content {
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.back-btn {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid var(--link-color);
  color: var(--link-color);
  cursor: pointer;
  border-radius: 4px;
}
.back-btn:hover {
  background: var(--link-color);
  color: white;
}
</style>

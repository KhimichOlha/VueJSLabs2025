<template>
  <article :class="styles.card">
    <div :class="styles.imageContainer">
      <img :src="news.image" :alt="news.title" :class="styles.image" />
    </div>
    <div :class="styles.content">
      <h3 :class="styles.title">{{ news.title }}</h3>
      <span :class="styles.date">{{ news.date }}</span>
      <p :class="styles.description">{{ news.description }}</p>
      
      <RouterLink 
        :to="{ name: 'article', params: { id: news.id } }" 
        :class="styles.button"
      >
        Читати далі
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import styles from './NewsCard.module.css';

defineProps({
  news: {
    type: Object,
    required: true
  }
});
</script>
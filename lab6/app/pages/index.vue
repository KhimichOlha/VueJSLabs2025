<script setup lang="ts">
useSeoMeta({
  title: 'Головна | Nuxt Course Blog',
  description: 'Лабораторна робота №6: Вивчення Nuxt 4 та Nuxt UI.',
  ogTitle: 'Головна | Nuxt Course Blog',
  ogDescription: 'Лабораторна робота №6: Вивчення Nuxt 4 та Nuxt UI.'
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-4">Вітаємо на курсі Nuxt 4!</h2>
    <p class="text-lg text-gray-600 mb-6">Це лабораторна робота №6, де ми вивчаємо SSR, API та Nuxt UI.</p>
    <UButton to="/blog" color="primary" size="lg">Читати блог</UButton>
  </div>
</template>
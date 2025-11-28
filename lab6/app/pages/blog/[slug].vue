<script setup lang="ts">
const route = useRoute()

</script>

<template>
  <div>
    <UButton to="/blog" variant="link" icon="i-heroicons-arrow-left" class="mb-4">
      Назад до списку
    </UButton>
    
    <h2 class="text-2xl font-bold">Стаття: {{ route.params.slug }}</h2>
    <p class="mt-4">Тут буде контент статті...</p>
  </div>
</template>
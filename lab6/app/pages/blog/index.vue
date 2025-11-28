<script setup lang="ts">
const { data: posts, status, error } = await useFetch('/api/posts')
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold mb-6 flex items-center gap-2">
      <UIcon name="i-heroicons-newspaper" />
      Наші статті
    </h2>

    <div v-if="status === 'pending'" class="space-y-4">
      <USkeleton class="h-32 w-full" v-for="i in 3" :key="i" />
    </div>

    <UAlert
      v-else-if="error"
      icon="i-heroicons-exclamation-triangle"
      color="red"
      variant="soft"
      title="Помилка завантаження"
      :description="error.message"
    />

    <div v-else class="grid gap-6">
      <UCard v-for="post in posts" :key="post.slug">
        <template #header>
          <h3 class="text-xl font-semibold">{{ post.title }}</h3>
        </template>

        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {{ post.description }}
        </p>

        <template #footer>
          <UButton 
            :to="`/blog/${post.slug}`" 
            color="primary" 
            variant="ghost" 
            label="Читати далі"
            trailing-icon="i-heroicons-arrow-right"
          />
        </template>
      </UCard>
    </div>
  </div>
</template>

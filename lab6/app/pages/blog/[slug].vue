<script setup lang="ts">
const route = useRoute()


const { data: post, status, error } = await useFetch(() => `/api/posts/${route.params.slug}`)


useSeoMeta({
  title: () => post.value ? `${post.value.title} | Nuxt Blog` : 'Статтю не знайдено',
  description: () => post.value?.description,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.description,
})
</script>

<template>
  <UContainer class="py-8">
    <div class="mb-8">
      <UButton
        to="/blog"
        icon="i-heroicons-arrow-left"
        variant="ghost"
        color="gray"
      >
        Повернутися до списку
      </UButton>
    </div>

    <div v-if="status === 'pending'" class="max-w-3xl mx-auto space-y-6">
      <USkeleton class="h-12 w-3/4" /> <div class="flex gap-2">
        <USkeleton class="h-6 w-20" /> </div>
      <div class="space-y-2 mt-8">
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-5/6" />
      </div>
    </div>

    <div v-else-if="error" class="max-w-3xl mx-auto">
      <UAlert
        icon="i-heroicons-exclamation-triangle"
        color="red"
        variant="subtle"
        title="Помилка"
        :description="error.message || 'Не вдалося завантажити статтю. Можливо, її не існує.'"
      />
    </div>

    <article v-else-if="post" class="max-w-3xl mx-auto">
      <header class="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ post.title }}
        </h1>
        
        <div class="flex items-center gap-3">
          <UBadge color="primary" variant="subtle" size="md">
            {{ post.slug }}
          </UBadge>
          <span class="text-gray-500 text-sm">
            Автор: Nuxt Student
          </span>
        </div>
      </header>

      <div class="prose dark:prose-invert max-w-none">
        <p class="text-lg leading-relaxed">
          {{ post.content }}
        </p>
        
        <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
          <h3 class="text-lg font-semibold mb-2">Короткий опис:</h3>
          <p class="text-gray-600 dark:text-gray-300 italic">
            {{ post.description }}
          </p>
        </div>
      </div>
    </article>
  </UContainer>
</template>

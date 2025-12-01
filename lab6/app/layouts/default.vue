<template>
  <UContainer class="min-h-screen flex flex-col">
    <header class="py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
      <h1 class="text-xl font-bold">Nuxt Course Blog</h1>
      
      <nav class="flex gap-4">
        <UButton to="/" variant="ghost" label="Головна" />
        <UButton to="/blog" variant="ghost" label="Блог" />
        <UButton to="/about" variant="ghost" label="Про нас" />
      </nav>
    </header>

    <main class="flex-grow py-8">
      <slot />
    </main>

    <footer class="py-4 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm">
      <p>&copy; 2025 NuxtJSLabs. Всі права захищені.</p>
    </footer>
  </UContainer>
</template>

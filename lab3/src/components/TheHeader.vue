<template>
  <header class="header">
    <div class="logo">VueNews</div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <button @click="$emit('toggle-theme')" class="theme-btn">
      {{ isDark ? ' Light' : ' Dark' }}
    </button>
  </header>
</template>

<script setup>
defineProps(['isDark']);
defineEmits(['toggle-theme']);
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
}

nav {
  display: flex;
  gap: 1rem;
}


.active-link {
  font-weight: bold;
  text-decoration: underline;
}

.theme-btn {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  border-radius: 4px;
}
</style>
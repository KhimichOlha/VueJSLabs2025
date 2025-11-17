<template>
  <div class="ad-slot">
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps(['text']);
</script>

<style scoped>
.ad-slot {
  background: #f0f0f0; 
  border: 2px dashed #ccc;
  padding: 1rem;
  color: #555;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

:global(body.dark-theme) .ad-slot {
  background: #333;
  border-color: #555;
  color: #aaa;
}

.ad-slot:hover {
  background: #e0e0e0;
}
:global(body.dark-theme) .ad-slot:hover {
  background: #444;
}
</style>
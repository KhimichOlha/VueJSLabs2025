<script setup>
const model = defineModel(); // Для v-model
defineProps({
  type: { type: String, default: 'text' },
  label: String,
  placeholder: String,
});
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input :type="type" :placeholder="placeholder" v-model="model" />
</template>
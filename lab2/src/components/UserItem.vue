<script setup>
defineProps({ user: Object });
const emit = defineEmits(['edit']);
</script>

<template>
  <div>{{ user.name }} <button @click="emit('edit', user.id)">Edit</button></div>
</template>
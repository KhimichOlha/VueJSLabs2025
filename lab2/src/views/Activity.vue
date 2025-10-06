<script setup>
import { ref } from 'vue';
const localCounter = ref(0);
</script>

<template>
  <div>Activity <button @click="localCounter++">Лічильник: {{ localCounter }}</button></div>
</template>
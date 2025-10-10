<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.id;
</script>

<template>
  <div>Деталі користувача {{ userId }}</div>
</template>
<script setup>
defineProps({ title: String });
</script>

<template>
  <div class="auth-wrapper">
    <h1 v-if="title">{{ title }}</h1>
    <slot /> 
  </div>
</template>
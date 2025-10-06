<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
const counter = ref(0);
</script>

<template>
  <div>
    <router-link to="/admin/dashboard/overview">Overview</router-link>
    <router-link to="/admin/dashboard/activity">Activity</router-link>
    <button @click="counter++">Збільшити: {{ counter }}</button>
    <KeepAlive include="Overview,Activity" max="2">
      <RouterView />
    </KeepAlive>
  </div>
</template>
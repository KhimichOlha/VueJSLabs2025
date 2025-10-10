<script setup>
import { provide } from 'vue';
import { useAuth } from '@/composables/useAuth';
import Sidebar from '@/components/Sidebar.vue';

const auth = useAuth();
provide('userData', auth.user);
</script>

<template>
  <div class="admin">
    <Sidebar />
    <router-view />
  </div>
</template>

<style scoped>
.admin {
  display: flex;
}
</style>
<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="sidebar">
    <slot />
    <ul>
      <li><RouterLink to="/admin/dashboard">Dashboard</RouterLink></li>
      <li><RouterLink to="/admin/users">Users</RouterLink></li>
      <li><RouterLink to="/admin/reports">Reports</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 0.5rem;
}
RouterLink {
  text-decoration: none;
  color: #2c3e50;
}
RouterLink:hover {
  color: #3498db;
}
RouterLink.router-link-active {
  color: #e74c3c;
  font-weight: bold;
}
</style>
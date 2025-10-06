<script setup>
import { ref } from 'vue';
import UserItem from '@/components/UserItem.vue';

const users = ref([{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }]);
const handleEdit = (id) => console.log('Edit user', id);
</script>

<template>
  <div>
    <h2>Users</h2>
    <UserItem v-for="user in users" :key="user.id" :user="user" @edit="handleEdit" />
  </div>
</template>
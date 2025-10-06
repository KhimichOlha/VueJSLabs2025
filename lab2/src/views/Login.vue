<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import InputField from '@/components/InputField.vue';

const router = useRouter();
const auth = useAuth();
const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = () => {
  if (!email.value || !password.value) {
    error.value = 'Заповніть поля';
    return;
  }
  if (auth.login(email.value, password.value)) {
    router.push('/admin/dashboard');
  } else {
    error.value = 'Невірні дані';
  }
};
</script>

<template>
  <div>
    <h2>Логін</h2>
    <InputField v-model="email" label="Email" placeholder="email@example.com" />
    <InputField v-model="password" type="password" label="Password" />
    <button @click="handleLogin">Увійти</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
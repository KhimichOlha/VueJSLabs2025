<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth'; 
import InputField from '@/components/InputField.vue'; 
import AuthWrapper from '@/components/AuthWrapper.vue'; 

const router = useRouter();
const auth = useAuth();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');


const handleRegister = () => {
  if (!name.value  || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Заповніть усі поля';
    return;
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Паролі не збігаються';
    return;
  }
  if (auth.register(name.value, email.value, password.value, confirmPassword.value)) {
    router.push('/admin/dashboard'); 
  } else {
    error.value = 'Помилка реєстрації (імітація)';
  }
};
</script>

<template>
  <AuthWrapper title="Реєстрація">
    <div class="register-form">
      <InputField v-model="name" label="Ім'я" placeholder="Ваше ім'я" />
      <InputField v-model="email" label="Email" placeholder="email@example.com" />
      <InputField v-model="password" type="password" label="Пароль" />
      <InputField v-model="confirmPassword" type="password" label="Підтвердити пароль" />
      <button @click="handleRegister">Зареєструватися</button>
      <p v-if="error" class="error">{{ error }}</p>
      <p>
        Маєте акаунт? <router-link to="/login">Увійти</router-link>
      </p>
    </div>
  </AuthWrapper>
</template>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
}
.error {
  color: red;
}
</style>
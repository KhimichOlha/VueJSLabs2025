<script setup>
import { useForm, useField, useFieldArray } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';

// Схема валидации
const schema = toTypedSchema(yup.object({
  name: yup.string().required('Обов’язкове поле').min(2, 'Мінімум 2 символи'),
  email: yup.string().required('Обов’язкове поле').email('Невірний формат email'),
  dateOfBirth: yup.date().required('Вкажіть дату'),
  address: yup.string().required('Адреса обов’язкова'),
  phones: yup.array().of(
    yup.string().required('Номер не може бути порожнім').matches(/^\+?[0-9]{10,12}$/, 'Невірний формат телефону')
  )
}));

// Инициализация формы
const { handleSubmit, resetForm, setFieldError, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    address: '',
    phones: [''] // Изначально одно поле
  }
});

// Работа с динамическим массивом
const { fields, push, remove } = useFieldArray('phones');

// Обработчик отправки
const onSubmit = handleSubmit((values) => {
  // Эмуляция ошибки сервера (Требование 3.4.3)
  if (values.email === 'error@test.com') {
    setFieldError('email', 'Цей email вже використовується (Server Error)');
    return;
  }

  console.log('Form Data:', values);
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="profile-page">
    <h2>{{ $t('profile.title') }}</h2>

    <form @submit="onSubmit" class="form">
      
      <div class="form-group">
        <label>{{ $t('profile.name') }}</label>
        <Field name="name" type="text" class="input" />
        <span class="error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.email') }}</label>
        <Field name="email" type="email" class="input" />
        <span class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.dob') }}</label>
        <Field name="dateOfBirth" type="date" class="input" />
        <span class="error">{{ errors.dateOfBirth }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.address') }}</label>
        <Field name="address" as="textarea" class="input" />
        <span class="error">{{ errors.address }}</span>
      </div>

      <div class="form-group">
        <label>{{ $t('profile.phones') }}</label>
        <div v-for="(field, idx) in fields" :key="field.key" class="phone-row">
          <Field :name="`phones[${idx}]`" type="tel" class="input" placeholder="+380..." />
          <button type="button" @click="remove(idx)" v-if="fields.length > 1">❌</button>
          <div class="error">{{ errors[`phones[${idx}]`] }}</div>
        </div>
        <button type="button" @click="push('')" class="btn-small">
          + {{ $t('profile.add_phone') }}
        </button>
      </div>

      <div class="actions">
        <button type="submit" class="btn-primary">{{ $t('profile.submit') }}</button>
        <button type="button" @click="resetForm()" class="btn-secondary">{{ $t('profile.reset') }}</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; }
.error { color: red; font-size: 0.85rem; }
.phone-row { display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; }
.input { padding: 8px; }
</style>

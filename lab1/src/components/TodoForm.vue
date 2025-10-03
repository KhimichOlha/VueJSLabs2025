<template>
  <div class="todo-form">
    <h2 class="form-title">➕ Додати нове завдання</h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Назва завдання *</label>
        <input 
          id="title"
          v-model="formData.title"
          type="text" 
          placeholder="Введіть назву завдання..."
          :class="{ 'error': errors.title }"
        />
        <span v-if="errors.title" class="error-message">{{ errors.title }}</span>
      </div>

      <div class="form-group">
        <label for="description">Опис завдання *</label>
        <textarea 
          id="description"
          v-model="formData.description"
          placeholder="Введіть опис завдання..."
          rows="3"
          :class="{ 'error': errors.description }"
        ></textarea>
        <span v-if="errors.description" class="error-message">{{ errors.description }}</span>
      </div>

      <div class="form-group">
        <label for="priority">Пріоритет *</label>
        <select 
          id="priority"
          v-model="formData.priority"
          :class="{ 'error': errors.priority }"
        >
          <option value="">Оберіть пріоритет</option>
          <option value="low">🟢 Низький</option>
          <option value="medium">🟡 Середній</option>
          <option value="high">🔴 Високий</option>
        </select>
        <span v-if="errors.priority" class="error-message">{{ errors.priority }}</span>
      </div>

      <button type="submit" class="btn-submit">
        <span>✨ Додати завдання</span>
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TodoForm',
  emits: ['add-task'],
  setup(props, { emit }) {
    const formData = ref({
      title: '',
      description: '',
      priority: ''
    })

    const errors = ref({
      title: '',
      description: '',
      priority: ''
    })

    const validateForm = () => {
      errors.value = {
        title: '',
        description: '',
        priority: ''
      }

      let isValid = true

      if (!formData.value.title.trim()) {
        errors.value.title = 'Назва завдання обов\'язкова'
        isValid = false
      }

      if (!formData.value.description.trim()) {
        errors.value.description = 'Опис завдання обов\'язковий'
        isValid = false
      }

      if (!formData.value.priority) {
        errors.value.priority = 'Оберіть пріоритет завдання'
        isValid = false
      }

      return isValid
    }

    const handleSubmit = () => {
      if (validateForm()) {
        emit('add-task', {
          title: formData.value.title.trim(),
          description: formData.value.description.trim(),
          priority: formData.value.priority
        })

        
        formData.value = {
          title: '',
          description: '',
          priority: ''
        }
      }
    }

    return {
      formData,
      errors,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.todo-form {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.form-title {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: white;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #ffd700;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
}

.form-group input.error,
.form-group textarea.error,
.form-group select.error {
  border-color: #ff4757;
  background: #fff5f5;
}

.error-message {
  display: block;
  color: #ff4757;
  font-size: 0.85rem;
  margin-top: 5px;
  font-weight: 600;
}

.btn-submit {
  width: 100%;
  padding: 15px;
  background: #ffd700;
  color: #333;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background: #ffed4e;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
}

.btn-submit:active {
  transform: translateY(0);
}
</style>
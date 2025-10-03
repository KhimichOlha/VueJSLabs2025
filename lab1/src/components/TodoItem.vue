<template>
  <div :class="['todo-item', { completed: task.status === 'done' }]">
    <div class="todo-checkbox">
      <input 
        type="checkbox" 
        :checked="task.status === 'done'"
        @change="$emit('toggle-status')"
        :id="`task-${task.id}`"
      />
      <label :for="`task-${task.id}`"></label>
    </div>

    <div v-if="!isEditing" class="todo-content">
      <div class="todo-header">
        <h3 class="todo-title">{{ task.title }}</h3>
        <span :class="['priority-badge', task.priority]">
          {{ priorityLabel }}
        </span>
      </div>
      <p class="todo-description">{{ task.description }}</p>
      <div class="todo-footer">
        <span class="todo-date">
          📅 {{ formattedDate }}
        </span>
        <span :class="['status-badge', task.status]">
          {{ statusLabel }}
        </span>
      </div>
    </div>

    <div v-else class="todo-edit-form">
      <input 
        v-model="editForm.title"
        type="text"
        class="edit-input"
        placeholder="Назва завдання"
      />
      <textarea 
        v-model="editForm.description"
        class="edit-textarea"
        placeholder="Опис завдання"
        rows="2"
      ></textarea>
      <select v-model="editForm.priority" class="edit-select">
        <option value="low">🟢 Низький</option>
        <option value="medium">🟡 Середній</option>
        <option value="high">🔴 Високий</option>
      </select>
    </div>

    <div class="todo-actions">
      <button 
        v-if="!isEditing"
        @click="startEdit"
        class="btn-action btn-edit"
        title="Редагувати"
      >
        ✏️
      </button>
      <button 
        v-if="isEditing"
        @click="saveEdit"
        class="btn-action btn-save"
        title="Зберегти"
      >
        💾
      </button>
      <button 
        v-if="isEditing"
        @click="cancelEdit"
        class="btn-action btn-cancel"
        title="Скасувати"
      >
        ❌
      </button>
      <button 
        v-if="!isEditing"
        @click="$emit('delete-task')"
        class="btn-action btn-delete"
        title="Видалити"
      >
        🗑
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'TodoItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  emits: ['toggle-status', 'delete-task', 'edit-task'],
  setup(props, { emit }) {
    const isEditing = ref(false)
    const editForm = ref({
      title: '',
      description: '',
      priority: ''
    })

    const priorityLabel = computed(() => {
      const labels = {
        low: '🟢 Низький',
        medium: '🟡 Середній',
        high: '🔴 Високий'
      }
      return labels[props.task.priority] || props.task.priority
    })

    const statusLabel = computed(() => {
      return props.task.status === 'done' ? '✅ Виконано' : '⚡️ Активне'
    })

    const formattedDate = computed(() => {
      const date = new Date(props.task.createdAt)
      return date.toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    })

    const startEdit = () => {
      editForm.value = {
        title: props.task.title,
        description: props.task.description,
        priority: props.task.priority
      }
      isEditing.value = true
    }

    const saveEdit = () => {
      if (editForm.value.title.trim() && editForm.value.description.trim()) {
        emit('edit-task', {
          id: props.task.id,
          title: editForm.value.title.trim(),
          description: editForm.value.description.trim(),
          priority: editForm.value.priority
        })
        isEditing.value = false
      }
    }

    const cancelEdit = () => {
      isEditing.value = false
    }

    return {
      isEditing,
      editForm,
      priorityLabel,
      statusLabel,
      formattedDate,
      startEdit,
      saveEdit,
      cancelEdit
    }
  }
}
</script>


<style scoped>
.todo-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  align-items: flex-start;
}

.todo-item:hover {
  border-color: #667eea;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.15);
  transform: translateX(5px);
}

.todo-item.completed {
  background: #f8f9fa;
  opacity: 0.8;
}

.todo-item.completed .todo-title,
.todo-item.completed .todo-description {
  text-decoration: line-through;
  color: #6c757d;
}

.todo-checkbox {
  position: relative;
  flex-shrink: 0;
}

.todo-checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
}

.todo-checkbox label {
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid #667eea;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.todo-checkbox input[type="checkbox"]:checked + label {
  background: #667eea;
}

.todo-checkbox input[type="checkbox"]:checked + label::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.todo-content {
  flex: 1;
}

.todo-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

.todo-title {
  font-size: 1.2rem;
  color: #212529;
  font-weight: 600;
  margin: 0;
  word-break: break-word;
}

.todo-description {
  color: #495057;
  line-height: 1.6;
  margin: 0 0 15px 0;
  word-break: break-word;
}

.todo-footer {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.todo-date {
  color: #6c757d;
  font-size: 0.9rem;
}

.priority-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.priority-badge.low {
  background: #d4edda;
  color: #155724;
}

.priority-badge.medium {
  background: #fff3cd;
  color: #856404;
}

.priority-badge.high {
  background: #f8d7da;
  color: #721c24;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-badge.active {
  background: #cfe2ff;
  color: #084298;
}

.status-badge.done {
  background: #d1e7dd;
  color: #0f5132;
}

.todo-edit-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.edit-input,
.edit-textarea,
.edit-select {
  width: 100%;
  padding: 10px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
}

.edit-input:focus,
.edit-textarea:focus,
.edit-select:focus {
  outline: none;
  border-color: #667eea;
}

.todo-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.btn-action {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-edit {
  background: #0d6efd;
}

.btn-edit:hover {
  background: #0b5ed7;
  transform: scale(1.1);
}

.btn-save {
  background: #198754;
}

.btn-save:hover {
  background: #157347;
  transform: scale(1.1);
}

.btn-cancel {
  background: #6c757d;
}

.btn-cancel:hover {
  background: #5c636a;
  transform: scale(1.1);
}

.btn-delete {
  background: #dc3545;
}

.btn-delete:hover {
  background: #bb2d3b;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .todo-item {
    flex-direction: column;
  }

  .todo-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>

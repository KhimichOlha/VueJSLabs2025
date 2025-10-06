<template>
  <div class="todo-filters">

    <div class="filters-header">
      <h3>🔍 Фільтри</h3>
      <button @click="$emit('clear-filters')" class="btn-clear">
        ✖️ Очистити фільтри
      </button>
    </div>

 
    <div class="filters-grid">
      
      <div class="filter-group">
        <label for="filter-title">Пошук по назві</label>
        <input 
          id="filter-title"
          v-model="localFilters.title"
          type="text" 
          placeholder="Введіть назву..."
        />
      </div>

     
      <div class="filter-group">
        <label for="filter-description">Пошук по опису</label>
        <input 
          id="filter-description"
          v-model="localFilters.description"
          type="text" 
          placeholder="Введіть опис..."
        />
      </div>

      
      <div class="filter-group">
        <label for="filter-status">Статус</label>
        <select id="filter-status" v-model="localFilters.status">
          <option value="">Усі статуси</option>
          <option value="active">Активні</option>
          <option value="done">Виконані</option>
        </select>
      </div>


      <div class="filter-group">
        <label for="filter-priority">Пріоритет</label>
        <select id="filter-priority" v-model="localFilters.priority">
          <option value="">Усі пріоритети</option>
          <option value="low">🟢 Низький</option>
          <option value="medium">🟡 Середній</option>
          <option value="high">🔴 Високий</option>
        </select>
      </div>


      <div class="filter-group">
        <label for="filter-date-from">Дата від</label>
        <input 
          id="filter-date-from"
          v-model="localFilters.dateFrom"
          type="date"
        />
      </div>

      <div class="filter-group">
        <label for="filter-date-to">Дата до</label>
        <input 
          id="filter-date-to"
          v-model="localFilters.dateTo"
          type="date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'TodoFilters',
  props: {

    filters: {
      type: Object,
      required: true
    }
  },
  emits: ['update:filters', 'clear-filters'],
  setup(props, { emit }) {

    const localFilters = ref({ ...props.filters })


    watch(localFilters, (newFilters) => {
      emit('update:filters', newFilters)
    }, { deep: true })

    watch(() => props.filters, (newFilters) => {
      localFilters.value = { ...newFilters }
    }, { deep: true })

    return {
      localFilters
    }
  }
}
</script>

<style scoped>
.todo-filters {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 2px solid #e9ecef;
}


.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filters-header h3 {
  color: #495057;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.btn-clear {
  padding: 8px 16px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-clear:hover {
  background: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}

.btn-clear:active {
  transform: translateY(0);
}


.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  color: #495057;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.filter-group input,
.filter-group select {
  padding: 10px 12px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

.filter-group input:focus,
.filter-group select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.filter-group input:hover,
.filter-group select:hover {
  border-color: #667eea;
}

.filter-group input[type="date"] {
  cursor: pointer;
}

.filter-group input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: opacity(0.6);
  transition: filter 0.3s ease;
}

.filter-group input[type="date"]::-webkit-calendar-picker-indicator:hover {
  filter: opacity(1);
}


.filter-group select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23495057' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 35px;
}


.filter-group input::placeholder {
  color: #adb5bd;
}


@media (max-width: 768px) {
  .filters-grid {
    grid-template-columns: 1fr;
  }

  .filters-header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .btn-clear {
    width: 100%;
  }
}


@media (max-width: 480px) {
  .todo-filters {
    padding: 20px;
  }

  .filters-header h3 {
    font-size: 1.1rem;
  }

  .filter-group label {
    font-size: 0.85rem;
  }

  .filter-group input,
  .filter-group select {
    font-size: 0.9rem;
    padding: 8px 10px;
  }
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.todo-filters {
  animation: fadeIn 0.3s ease;
}
</style>
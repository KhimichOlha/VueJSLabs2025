<template>
  <div class="todo-list">
    <div v-if="tasks.length === 0" class="empty-state">
      <div class="empty-icon">📭</div>
      <h3>Немає завдань</h3>
      <p>Додайте нове завдання, щоб почати!</p>
    </div>

    
    <div v-else>
      
      <TodoItem 
        v-for="task in tasks" 
        :key="task.id"
        :task="task"
        @toggle-status="$emit('toggle-status', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        @edit-task="$emit('edit-task', $event)"
      />

      
      <div v-if="totalPages > 1" class="pagination">
        
        <button 
          @click="$emit('page-change', currentPage - 1)"
          :disabled="currentPage === 1"
          class="pagination-btn"
        >
          ← Попередня
        </button>

        
        <div class="pagination-numbers">
          <button
            v-for="page in displayPages"
            :key="page"
            @click="$emit('page-change', page)"
            :class="['pagination-number', { active: page === currentPage }]"
          >
            {{ page }}
          </button>
        </div>

       
        <button 
          @click="$emit('page-change', currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="pagination-btn"
        >
          Наступна →
        </button>
      </div>

      
      <div v-if="totalPages > 1" class="pagination-info">
        Сторінка {{ currentPage }} з {{ totalPages }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    
    tasks: {
      type: Array,
      required: true
    },
    
    currentPage: {
      type: Number,
      required: true
    },
    
    totalPages: {
      type: Number,
      required: true
    }
  },
  emits: ['toggle-status', 'delete-task', 'edit-task', 'page-change'],
  setup(props) {
   
    const displayPages = computed(() => {
      const pages = []
      const maxVisible = 5 

      
      let start = Math.max(1, props.currentPage - Math.floor(maxVisible / 2))
      let end = Math.min(props.totalPages, start + maxVisible - 1)

      
      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1)
      }

      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    })

    return {
      displayPages
    }
  }
}
</script>

<style scoped>
.todo-list {
  margin-bottom: 30px;
}


.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 15px;
  border: 2px dashed #dee2e6;
  animation: fadeIn 0.5s ease;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 15px;
  animation: swing 2s infinite;
}

@keyframes swing {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

.empty-state h3 {
  color: #495057;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.empty-state p {
  color: #6c757d;
  font-size: 1rem;
}


.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  flex-wrap: wrap;
}


.pagination-btn {
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.pagination-btn:hover:not(:disabled) {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.pagination-btn:active:not(:disabled) {
  transform: translateY(0);
}

.pagination-btn:disabled {
  background: #dee2e6;
  color: #6c757d;
  cursor: not-allowed;
  transform: none;
  opacity: 0.6;
}


.pagination-numbers {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
}


.pagination-number {
  width: 40px;
  height: 40px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-number:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.pagination-number:active {
  transform: translateY(0);
}


.pagination-number.active {
  background: #667eea;
  color: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  cursor: default;
}

.pagination-number.active:hover {
  transform: none;
}


.pagination-info {
  text-align: center;
  margin-top: 15px;
  color: #6c757d;
  font-size: 0.9rem;
  font-weight: 500;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 768px) {
  .pagination {
    gap: 8px;
  }

  .pagination-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .pagination-number {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  .empty-state {
    padding: 40px 15px;
  }

  .empty-icon {
    font-size: 3rem;
  }

  .empty-state h3 {
    font-size: 1.3rem;
  }

  .empty-state p {
    font-size: 0.95rem;
  }
}


@media (max-width: 480px) {
  .pagination {
    flex-direction: column;
    gap: 10px;
  }

  .pagination-btn {
    width: 100%;
    max-width: 300px;
  }

  .pagination-numbers {
    width: 100%;
    max-width: 300px;
  }

  .pagination-number {
    flex: 1;
    min-width: 36px;
  }

  .empty-state {
    padding: 30px 15px;
  }

  .empty-icon {
    font-size: 2.5rem;
  }

  .empty-state h3 {
    font-size: 1.2rem;
  }

  .empty-state p {
    font-size: 0.9rem;
  }
}


.todo-list > div > * {
  animation: slideInLeft 0.3s ease;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>

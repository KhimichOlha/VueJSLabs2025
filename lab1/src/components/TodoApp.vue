<template>
  <div class="todo-app">
    <h1 class="app-title">📝 Список завдань </h1>
    
  
    <TodoStats 
      :total="totalTasks" 
      :active="activeTasks" 
      :completed="completedTasks" 
    />

    
    <TodoForm @add-task="addTask" />

    
    <TodoFilters 
      v-model:filters="filters"
      @clear-filters="clearFilters"
    />

  
    <TodoList 
      :tasks="paginatedTasks"
      :current-page="currentPage"
      :total-pages="totalPages"
      @toggle-status="toggleStatus"
      @delete-task="deleteTask"
      @edit-task="editTask"
      @page-change="changePage"
    />
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './ToDoList.vue'
import TodoFilters from './TodoFilters.vue'
import TodoStats from './TodoStats.vue'

export default {
  name: 'TodoApp',
  components: {
    TodoForm,
    TodoList,
    TodoFilters,
    TodoStats
  },
  setup() {
    const tasks = ref([])
    const currentPage = ref(1)
    const tasksPerPage = 5
    
    const filters = ref({
      title: '',
      description: '',
      status: '',
      priority: '',
      dateFrom: null,
      dateTo: null
    })

    
    onMounted(() => {
      const saved = localStorage.getItem('todo-tasks')
      if (saved) {
        try {
          tasks.value = JSON.parse(saved)
        } catch (e) {
          console.error('Помилка завантаження даних:', e)
        }
      }
    })

    
    watch(tasks, (newTasks) => {
      localStorage.setItem('todo-tasks', JSON.stringify(newTasks))
    }, { deep: true })

    
    const addTask = (task) => {
      const newTask = {
        id: Date.now(),
        title: task.title,
        description: task.description,
        status: 'active',
        priority: task.priority,
        createdAt: new Date().toISOString()
      }
      tasks.value.unshift(newTask)
      currentPage.value = 1
    }

    
    const toggleStatus = (id) => {
      const task = tasks.value.find(t => t.id === id)
      if (task) {
        task.status = task.status === 'active' ? 'done' : 'active'
      }
    }

    
    const deleteTask = (id) => {
      tasks.value = tasks.value.filter(t => t.id !== id)
    }

    
    const editTask = (updatedTask) => {
      const index = tasks.value.findIndex(t => t.id === updatedTask.id)
      if (index !== -1) {
        tasks.value[index] = { ...tasks.value[index], ...updatedTask }
      }
    }

    
    const filteredTasks = computed(() => {
      return tasks.value.filter(task => {
        
        if (filters.value.title && !task.title.toLowerCase().includes(filters.value.title.toLowerCase())) {
          return false
        }

        
        if (filters.value.description && !task.description.toLowerCase().includes(filters.value.description.toLowerCase())) {
          return false
        }

        
        if (filters.value.status && task.status !== filters.value.status) {
          return false
        }

        
        if (filters.value.priority && task.priority !== filters.value.priority) {
          return false
        }

        
        if (filters.value.dateFrom) {
          const taskDate = new Date(task.createdAt)
          const fromDate = new Date(filters.value.dateFrom)
          if (taskDate < fromDate) {
            return false
          }
        }

        
        if (filters.value.dateTo) {
          const taskDate = new Date(task.createdAt)
          const toDate = new Date(filters.value.dateTo)
          toDate.setHours(23, 59, 59, 999)
          if (taskDate > toDate) {
            return false
          }
        }

        return true
      })
    })
    
    const totalPages = computed(() => {
      return Math.ceil(filteredTasks.value.length / tasksPerPage)
    })

    const paginatedTasks = computed(() => {
      const start = (currentPage.value - 1) * tasksPerPage
      const end = start + tasksPerPage
      return filteredTasks.value.slice(start, end)
    })

    const changePage = (page) => {
      currentPage.value = page
    }

    
    const totalTasks = computed(() => tasks.value.length)
    const activeTasks = computed(() => tasks.value.filter(t => t.status === 'active').length)
    const completedTasks = computed(() => tasks.value.filter(t => t.status === 'done').length)

    
    const clearFilters = () => {
      filters.value = {
        title: '',
        description: '',
        status: '',
        priority: '',
        dateFrom: null,
        dateTo: null
      }
      currentPage.value = 1
    }

    
    watch(filters, () => {
      currentPage.value = 1
    }, { deep: true })

    return {
      tasks,
      filters,
      currentPage,
      totalPages,
      paginatedTasks,
      totalTasks,
      activeTasks,
      completedTasks,
      addTask,
      toggleStatus,
      deleteTask,
      editTask,
      changePage,
      clearFilters
    }
  }
}
</script>

<style scoped>
.todo-app {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.app-title {
  text-align: center;
  color: #667eea;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 700;
}
</style>
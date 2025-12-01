<template>
  <div class="todo-stats">

    <div class="stat-card total">
      <div class="stat-icon">📊</div>
      <div class="stat-content">
        <div class="stat-value">{{ total }}</div>
        <div class="stat-label">Усього завдань</div>
      </div>
    </div>

 
    <div class="stat-card active">
      <div class="stat-icon">⚡️</div>
      <div class="stat-content">
        <div class="stat-value">{{ active }}</div>
        <div class="stat-label">Активних</div>
      </div>
    </div>


    <div class="stat-card completed">
      <div class="stat-icon">✅</div>
      <div class="stat-content">
        <div class="stat-value">{{ completed }}</div>
        <div class="stat-label">Виконано</div>
      </div>
    </div>

 
    <div class="stat-card progress">
      <div class="stat-icon">📈</div>
      <div class="stat-content">
        <div class="stat-value">{{ progressPercent }}%</div>
        <div class="stat-label">Прогрес</div>
 
        <div class="progress-bar-container">
          <div 
            class="progress-bar-fill" 
            :style="{ width: progressPercent + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'TodoStats',
  props: {
    
    total: {
      type: Number,
      required: true
    },
    
    active: {
      type: Number,
      required: true
    },
  
    completed: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    
    const progressPercent = computed(() => {
      if (props.total === 0) return 0
      return Math.round((props.completed / props.total) * 100)
    })

    return {
      progressPercent
    }
  }
}
</script>

<style scoped>

.todo-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}


.stat-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: white;
  position: relative;
  overflow: hidden;
}


.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}


.stat-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.5s ease;
}

.stat-card:hover::before {
  top: -60%;
  right: -60%;
}


.stat-card.total {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}


.stat-card.active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}


.stat-card.completed {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}


.stat-card.progress {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}


.stat-icon {
  font-size: 2.5rem;
  line-height: 1;
  flex-shrink: 0;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}


.stat-content {
  flex: 1;
  position: relative;
  z-index: 1;
}


.stat-value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}


.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}


.progress-bar-container {
  margin-top: 10px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: white;
  border-radius: 3px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}


@media (max-width: 768px) {
  .todo-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-card {
    padding: 15px;
  }

  .stat-icon {
    font-size: 2rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }
}


@media (max-width: 480px) {
  .todo-stats {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 20px;
  }

  .stat-icon {
    font-size: 2.5rem;
  }

  .stat-value {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}


@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card:nth-child(1) {
  animation: slideInUp 0.4s ease 0.1s both;
}

.stat-card:nth-child(2) {
  animation: slideInUp 0.4s ease 0.2s both;
}

.stat-card:nth-child(3) {
  animation: slideInUp 0.4s ease 0.3s both;
}

.stat-card:nth-child(4) {
  animation: slideInUp 0.4s ease 0.4s both;
}


.stat-card.progress:has(.progress-bar-fill[style*="width: 100%"]) {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 8px 30px rgba(67, 233, 123, 0.5);
  }
}
</style>
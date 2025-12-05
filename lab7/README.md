# lab7 - Testing Vue.js Todo Application

This lab demonstrates unit testing, component testing, and end-to-end (E2E) testing for a Vue 3 Todo application using Vitest and Playwright.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

---

## Тестування (Testing)

### Запуск тестів Unit/Component

#### 1. Запуск одноразового проходження всіх тестів
```sh
npm run test:unit
```
- Запускає всі unit тести в headless режимі
- Показує результати в консолі

#### 2. Запуск UI інтерфейсу для тестів
```sh
npm run test:unit:ui
```
- Відкриває інтерактивний UI для перегляду та запуску тестів
- Дозволяє переглядати результати тестів в зручному форматі
- Можна запускати окремі тести та фільтрувати їх

### Покриття коду (Coverage)

#### Команда для отримання звіту про покриття
```sh
npm run test:coverage
```
- Генерує детальний звіт про покриття коду
- Показує статистику в консолі (Statements, Branches, Functions, Lines)

#### Де дивитися результати
- **Консоль**: Статистика зразу видна в терміналі після запуску команди
- **HTML звіт**: Детальний інтерактивний звіт знаходиться в `coverage/index.html`
  - Відкрийте файл в браузері для перегляду покриття по кожному файлу
  - Можна переглядати підсвітлений код з показанням покритих і непокритих рядків

### Запуск E2E тестів

#### 1. Запуск без глави браузера (headless)
```sh
npm run test:e2e
```
- Запускає всі E2E тести в фоновому режимі
- Швидше, але важче для налагодження

#### 2. Запуск з видимим браузером
```sh
npm run test:e2e:headed
```
- Відкриває браузер і показує виконання кожного кроку тесту
- Зручно для налагодження та перевірки поведінки

#### 3. Запуск UI для E2E тестів
```sh
npm run test:e2e:ui
```
- Запускає Playwright Inspector з повним UI
- Дозволяє взаємодіяти з браузером під час тестування
- Можна паузувати, налагоджувати, редагувати тести в реальному часі

---

## Покриття Коду

### Загальна Статистика
- **Statements (Вирази)**: 67.64% (46/68)
- **Branches (Гілки)**: 62.85% (44/70)
- **Functions (Функції)**: 39.28% (11/28)
- **Lines (Рядки)**: 68.75% (44/64)

### Покриття компонентів Todo

#### ✅ Покриті компоненти:

**1. TodoFilters.vue**
- Coverage: 70.83% Statements, 100% Branches, 36.36% Functions, 69.56% Lines
- **Що протестовано**: Перевірка оновлення v-model при змінах фільтрів, емітування подій, валідація вводу
- Добре покриває основне функціонування фільтрації

**2. TodoItem.vue**
- Coverage: 63.88% Statements, 26.66% Branches, 33.33% Functions, 63.88% Lines
- **Що протестовано**: Рендеринг пропсів, емітування подій видалення завдання, відображення статусу
- Базове тестування, але потребує розширення для повної обробки всіх сценаріїв

#### ❌ Непокриті компоненти:

**TodoApp.vue**, **TodoForm.vue**, **ToDoList.vue**, **TodoStats.vue**
- **Причина**: Вимагають більш складного мокування рідних залежностей (localStorage, timers тощо)
- **Рекомендація**: Додати тести для валідації форми, управління списком, статистики

---

## Реалізовані Тести

### Unit/Component Тести

#### TodoFilters Component (`src/components/__tests__/TodoFilters.spec.js`)
```javascript
✓ updates v-model value correctly
```
- Перевіряє, що компонент правильно оновлює значення фільтра
- Перевіряє, що емітується подія 'update:filters' з правильними даними
- Валідує передачу даних для фільтрації по назві завдання

#### TodoItem Component (`src/components/__tests__/TodoItem.spec.js`)
```javascript
✓ renders props correctly
✓ emits delete event
```
- **Test 1**: Перевіряє рендеринг завдання з вірними пропсами (назва, приорітет, тип)
- **Test 2**: Перевіряє емітування подій при натисканні на кнопку видалення
- Забезпечує, що компонент правильно відображає та реагує на взаємодію користувача

### E2E Сценарії (`e2e/todo.spec.js`)

#### Scenario 1: Open main page and check elements
```javascript
✓ Check page title and main UI elements
```
- Перейти на головну сторінку додатку
- Перевірити наявність заголовку сторінки (Vite App або Todo)
- Перевірити видимість основного рядка "Список завдань"
- Створити скріншот домашньої сторінки

#### Scenario 2: CRUD Operations (Create, Read, Update, Delete)
```javascript
✓ Create a new task
✓ Delete the task
```
- Заповнити форму новим завданням ("Playwright Task")
- Обрати приорітет "high"
- Натиснути кнопку додавання
- Перевірити, що завдання видно в списку
- Натиснути кнопку видалення
- Перевірити, що завдання видалено

#### Scenario 3: Filtering tasks
```javascript
✓ Create task and filter by status
```
- Додати активне завдання "Active Task"
- Встановити приорітет "low"
- Обрати фільтр статусу "done"
- Перевірити, що активне завдання приховується при фільтрації на "done"
- Валідує коректну роботу фільтрування за статусом

---

## Рекомендовані IDE та Browser Setup

### IDE Setup
[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Browser Setup
- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

---

## Корисні посилання

- [Vite Configuration Reference](https://vite.dev/config/)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)

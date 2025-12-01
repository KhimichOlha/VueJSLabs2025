# Лабораторна робота №6: Nuxt 4 та Nuxt UI

## 1. Запуск проєкту
1. Встановити залежності: `npm install`
2. Запустити в режимі розробки: `npm run dev`
3. Для перевірки SEO (sitemap/robots): `npm run build` -> `npm run preview`

## 2. Опис функціоналу
- **API:** Реалізовано у папці `server/api`. Використовується `defineEventHandler` для імітації бази даних.
- **Fetch:** Дані завантажуються через `useFetch`.
  - Список: `app/pages/blog/index.vue` (рядок 3)
  - Стаття: `app/pages/blog/[slug].vue` (рядок 5)

## 3. SEO Налаштування
- Використано `useSeoMeta` для генерації Title та Description на всіх сторінках.
- **Sitemap:** Доступний за адресою `/sitemap.xml`. Генерує маршрути автоматично.
- **Robots:** Доступний за адресою `/robots.txt`. Заборонено індексацію `/api/*`.

## 4. Nuxt UI
Використані компоненти:
- `UContainer`, `UCard`, `UButton`, `UBadge` (сторінки блогу)
- `USkeleton`, `UAlert` (стани завантаження та помилки)
- `UIcon` (іконки)

## 5. Знімки екрану

### Головна сторінка
![alt text](/lab6/potp/home.png)
###  Про нас
![alt text](/lab6/potp/adout.png)
### Стаття
![alt text](/lab6/potp/art.png)
### Блог
![alt text](/lab6/potp/blog.png)
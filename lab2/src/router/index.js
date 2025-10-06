import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-link', 
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 }; 
  },
  routes: [
    { path: '/', component: () => import('@/views/Home.vue'), meta: { public: true } }, 
    { path: '/login', component: () => import('@/views/Login.vue'), meta: { public: true } },
    { path: '/register', component: () => import('@/views/Register.vue'), meta: { public: true } },
    {
      path: '/admin',
      component: () => import('@/views/Admin.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: 'dashboard', component: () => import('@/views/Dashboard.vue') }, 
        { path: 'users', component: () => import('@/views/Users.vue') },
        { path: 'user/:id', component: () => import('@/views/UserDetail.vue') },
        { path: 'reports', component: () => import('@/views/Reports.vue') },
      ],
    },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue') },
  ],
});


router.beforeEach((to, from, next) => {
  const auth = useAuth();
  if (to.meta.requiresAuth && !auth.isAuthenticated.value) {
    next('/login');
  } else {
    next();
  }
});

export default router;
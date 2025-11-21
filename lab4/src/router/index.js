import { createRouter, createWebHistory } from 'vue-router';
import ProfileView from '../views/ProfileView.vue';
import CartView from '../views/CartView.vue';
import ProductsView from '../views/ProductsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/products' 
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
});

export default router;

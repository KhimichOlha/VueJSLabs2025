import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    { id: 1, title: 'Vue 3 Guide', price: 500 },
    { id: 2, title: 'Pinia Masterclass', price: 300 },
    { id: 3, title: 'VeeValidate Pro', price: 250 },
    { id: 4, title: 'JS Fundamentals', price: 100 },
  ]);

  return { products };
});
<script setup>
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';

const productsStore = useProductsStore();
const cartStore = useCartStore();
</script>

<template>
  <div>
    <h2>{{ $t('products.title') }}</h2>
    <div class="products-grid">
      <div v-for="product in productsStore.products" :key="product.id" class="card">
        <h3>{{ product.title }}</h3>
        <p>{{ $t('products.price') }}: {{ product.price }} UAH</p>
        <button @click="cartStore.add(product)">{{ $t('products.add') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.card { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
</style>

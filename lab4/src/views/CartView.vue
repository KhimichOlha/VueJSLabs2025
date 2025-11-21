<script setup>
import { useCartStore } from '../stores/cart';
import { storeToRefs } from 'pinia'; 

const cartStore = useCartStore();
const { items, totalPrice, totalCount } = storeToRefs(cartStore);
</script>

<template>
  <div>
    <h2>{{ $t('cart.title.quoted') }}</h2> 

    <div v-if="items.length === 0">
      <p>{{ $t('cart.empty') }}</p>
    </div>

    <div v-else>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.title }} — {{ item.qty }} x {{ item.price }} = {{ item.qty * item.price }}
          <button @click="cartStore.remove(item.id)">❌</button>
        </li>
      </ul>
      <hr />
      <p>Items: {{ totalCount }}</p>
      <h3>{{ $t('cart.total') }}: {{ totalPrice }} UAH</h3>
      <button @click="cartStore.clear()">{{ $t('cart.clear') }}</button>
    </div>
  </div>
</template>

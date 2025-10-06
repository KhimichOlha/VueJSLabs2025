<script setup>
import { ref } from 'vue';
const reports = ref([{ id: 1, title: 'Звіт 1' }, { id: 2, title: 'Звіт 2' }]);
</script>

<template>
  <table>
    <tr v-for="item in reports" :key="item.id">
      <slot name="row" :item="item">
        <td>{{ item.title }}</td> 
      </slot>
    </tr>
  </table>
</template>
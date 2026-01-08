<template>
  <div class="app">
    <h1>Shopping Cart</h1>

    <Product_List :products="products" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import Product_List from './Product_List.vue';


export default {
  components: { ProductList },
  setup() {
    const products = reactive([
      { id: 1, name: 'T-Shirt', price: 500 },
  { id: 2, name: 'Jeans', price: 1200 },
  { id: 3, name: 'Jacket', price: 2500 },
  { id: 4, name: 'Hoodie', price: 1800 },
  { id: 5, name: 'Sweater', price: 1600 },
  { id: 6, name: 'Shorts', price: 700 },
  { id: 7, name: 'Track Pants', price: 1400 },
  { id: 8, name: 'Formal Shirt', price: 1500 },
  { id: 9, name: 'Casual Shirt', price: 1300 },
  { id: 10, name: 'Blazer', price: 3500 },

  { id: 11, name: 'Kurta', price: 2000 },
  { id: 12, name: 'Saree', price: 4500 },
  { id: 13, name: 'Lehenga', price: 6500 },
  { id: 14, name: 'Salwar Suit', price: 3000 },
  { id: 15, name: 'Skirt', price: 1200 },
  { id: 16, name: 'Dress', price: 2800 },
  { id: 17, name: 'Coat', price: 4000 },
  { id: 18, name: 'Rain Jacket', price: 2200 },
  { id: 19, name: 'Pajamas', price: 900 },
  { id: 20, name: 'Socks (Pack)', price: 300 }
    ])

    return { products }
  }
}
</script>

<style>
.app {
  font-family: Arial;
  margin: 20px;
}
</style>

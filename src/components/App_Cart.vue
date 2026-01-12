<template>
  <Navbar :totalItems="totalItems" />

  <div class="container mt-4">
    <div class="row">
      <div class="col-md-8">
        <ProductList
          :products="products"
          @add-to-cart="addToCart"
        />
      </div>

      <div class="col-md-4">
        <CartSummary
          :cart="cart"
          :total="totalAmount"
          @remove="removeItem"
          @increase="increaseQty"
          @decrease="decreaseQty"
          @checkout="goToBill"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store.js'
import ProductList from './ProductList.vue'
import CartSummary from './CartSummary.vue'
import Navbar from './Navbar.vue'

export default {
  name: 'AppCart',
  components: { ProductList, CartSummary, Navbar },

  setup() {
    const router = useRouter()

 const products = reactive([
  // Shirts
  { id: 1, name: 'T-Shirt', category: 'Shirt', price: 500 },
  { id: 2, name: 'Casual Shirt', category: 'Shirt', price: 800 },
  { id: 3, name: 'Formal Shirt', category: 'Shirt', price: 1200 },
  { id: 4, name: 'Polo Shirt', category: 'Shirt', price: 700 },
  { id: 5, name: 'Hawaiian Shirt', category: 'Shirt', price: 900 },

  // Pants
  { id: 6, name: 'Jeans', category: 'Pant', price: 1200 },
  { id: 7, name: 'Chinos', category: 'Pant', price: 1000 },
  { id: 8, name: 'Shorts', category: 'Pant', price: 600 },
  { id: 9, name: 'Cargo Pants', category: 'Pant', price: 1100 },

  // Jackets
  { id: 10, name: 'Jacket', category: 'Jacket', price: 2500 },
  { id: 11, name: 'Hoodie', category: 'Jacket', price: 2000 },
  { id: 12, name: 'Leather Jacket', category: 'Jacket', price: 3500 },

  // Shoes
  { id: 13, name: 'Running Shoes', category: 'Shoes', price: 3000 },
  { id: 14, name: 'Sneakers', category: 'Shoes', price: 2800 },
  { id: 15, name: 'Formal Shoes', category: 'Shoes', price: 3200 },
  { id: 16, name: 'Sandals', category: 'Shoes', price: 900 },

  // Hoodies / Sweaters
  { id: 17, name: 'Crew Neck Hoodie', category: 'Hoodie', price: 1800 },
  { id: 18, name: 'Zip Hoodie', category: 'Hoodie', price: 2000 },
  { id: 19, name: 'Sweater', category: 'Hoodie', price: 1500 },

  // Accessories (Optional)
  { id: 20, name: 'Cap', category: 'Accessories', price: 500 },
  { id: 21, name: 'Belt', category: 'Accessories', price: 700 }
])


    const cart = store.cart
    const totalAmount = computed(() =>
      cart.reduce((sum, i) => sum + i.price * i.qty, 0)
    )

    const addToCart = (product) => {
      const found = cart.find(p => p.id === product.id)
      found ? found.qty++ : cart.push({ ...product, qty: 1 })
      store.total = totalAmount.value
    }

    const removeItem = (id) => {
      const index = cart.findIndex(i => i.id === id)
      cart.splice(index, 1)
      store.total = totalAmount.value
    }

    const increaseQty = (item) => {
      item.qty++
      store.total = totalAmount.value
    }

    const decreaseQty = (item) => {
      if (item.qty > 1) item.qty--
      store.total = totalAmount.value
    }

    const totalItems = computed(() =>
      cart.reduce((sum, i) => sum + i.qty, 0)
    )

    const goToBill = () => {
      store.total = totalAmount.value
      router.push('/bill')
    }

    return {
      products,
      cart,
      addToCart,
      removeItem,
      increaseQty,
      decreaseQty,
      totalItems,
      totalAmount,
      goToBill
    }
  }
}
</script>

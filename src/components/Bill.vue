<template>
  <div class="container mt-5">
    <div class="card shadow-lg mx-auto" style="max-width: 600px;">
      <div class="card-header bg-primary text-white text-center">
        <h4 class="mb-0">
          <i class="bi bi-receipt"></i> Bill Summary
        </h4>
      </div>

      <div class="card-body">
        <ul class="list-group mb-3">
          <li
            v-for="item in store.cart"
            :key="item.id"
            class="list-group-item d-flex justify-content-between"
          >
            {{ item.name }} x {{ item.qty }}
            <span>Rs {{ item.price * item.qty }}</span>
          </li>
        </ul>

        <div class="d-flex justify-content-between fs-5 fw-bold">
          <span>Total</span>
          <span>Rs {{ store.total }}</span>
        </div>

        <router-link to="/" class="btn btn-outline-primary w-100 mt-3">
          <i class="bi bi-arrow-left"></i> Back to Cart
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'Bill',
  setup() {
    return { store }
  }
}
</script>

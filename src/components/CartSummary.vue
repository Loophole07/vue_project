<template>
  <div class="card shadow-sm">
    <div class="card-header bg-white fw-bold">

      <i class="bi bi-receipt me-1"></i> Cart Summary
    </div>

    <div class="card-body">
      <p v-if="cart.length === 0" class="text-center text-muted">
        Your cart is empty
      </p>

      <div
        v-for="item in cart"
        :key="item.id"
        class="border rounded p-3 mb-3"
      >
        <div class="d-flex justify-content-between align-items-center">
          <strong>{{ item.name }}</strong>

          <button
            class="btn btn-sm btn-outline-danger"
            @click="$emit('remove', item.id)"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="btn-group">
            <button
              class="btn btn-outline-secondary"
              @click="$emit('decrease', item)"
            >
              −
            </button>

            <button class="btn btn-light fw-bold" disabled>
              {{ item.qty }}
            </button>

            <button
              class="btn btn-outline-secondary"
              @click="$emit('increase', item)"
            >
              +
            </button>
          </div>

          <span class="fw-bold">
            Rs {{ item.price * item.qty }}
          </span>
        </div>
      </div>

      <hr>

      <div class="d-flex justify-content-between fs-5">
        <span>Total</span>
        <strong>Rs {{ total }}</strong>
      </div>

      <button
        class="btn btn-primary w-100 mt-3"
        @click="$emit('checkout')"
      >
        <i class="bi bi-credit-card"></i> Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart', 'total']
}
</script>

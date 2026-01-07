<template>
  <div class="structure">
    <p>Price: {{ price }}</p>
    <p>Quantity: {{ qty }}</p>
    <p><b>Total: {{ total }}</b></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      qty: 2
    }
  },
  computed: {
    total() {
      return this.price * this.qty
    }
  }
}
</script>
<style>
    .structure {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
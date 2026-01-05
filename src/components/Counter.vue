<template>
  <div class="counter">
    <p>Counter: {{ count }}</p>
    <button @click="increment">Increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style scoped>
.counter {
  border: 1px solid green;
  padding: 10px;
}
p {
  color: green;
  font-weight: bold;
}
button {
  margin-top: 5px;
  padding: 5px 10px;
}
</style>

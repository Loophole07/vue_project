<template>
  <div class="structure">
    <p>Name: {{ name }}</p>
    <p>Count: {{ count }}</p>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Samip",
      count: 0
    }
  },
  methods: {
    increase() {
      this.count++
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
button {
  margin-top: 5px;
  padding: 5px 10px;
}
</style>

<template>
  <div class="structure">
    <input type="number" v-model="count">
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count(newValue) {
      if (newValue > 5) {
        alert('Count is greater than 5')
      }
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
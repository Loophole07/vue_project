<template>
  <div class="structure">
    <p>{{message}}</p>
    <button @click="message ='Hello Change'">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue '
    }
  }
}
</script>

<style scoped>
.structure {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

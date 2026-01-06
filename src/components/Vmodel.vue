<template>
  <div class="structure">
    <input v-model="name" placeholder="Enter your name" />
    <p>Your name is: {{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
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
p {
  color: black;
  font-weight: bold;
}
</style>
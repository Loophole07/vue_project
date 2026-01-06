<template>
  <div class="structure">
    <p>Click Button :</p>
    <button @click="showAlert">Show Alert</button>
    <button @click="showAnotherAlert">Show Another Alert</button>

  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      alert('Hello! This is an alert')
    },
    showAnotherAlert() {
      alert('This is another alert button 😊')
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
p{
  color: black;
  font-weight: bold;
}
</style>

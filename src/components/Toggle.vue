<template>
  <div class="structure">
    <button @click="toggleText">Show / Hide</button>
    <p>Click to See :</p>
    <p v-if="isVisible">Hello User</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    toggleText() {
      this.isVisible = !this.isVisible
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
<template>
  <div class="structure">
    <button @click="isLoggedIn = !isLoggedIn">
      Toggle Login
    </button>

    <p v-if="isLoggedIn">Welcome User</p>
    <p v-else>Please Login</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
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

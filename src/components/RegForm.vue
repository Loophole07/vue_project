<template>
  <div class="register">
    <h2>Registration Form</h2>

    <!-- Name -->
    <input type="text" v-model="name" placeholder="Enter name" />
    <br /><br />

    <!-- Email -->
    <input type="email" v-model="email" placeholder="Enter email" />
    <br /><br />

    <!-- Password -->
    <input type="password" v-model="password" placeholder="Enter password" />
    <br /><br />

    <!-- Submit Button -->
    <button @click="register">Register</button>

    <br /><br />

    <!-- v-if / v-else -->
    <p v-if="isRegistered" style="color: green;">
      Registration Successful ✅
    </p>
    <p v-else style="color: red;">
      Please fill all fields 
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isRegistered: false
    }
  },
  methods: {
    register() {
      if (this.name && this.email && this.password) {
        this.isRegistered = true
        alert('Registered Successfully!')
      } else {
        this.isRegistered = false
        alert('Please fill all fields')
      }
    }
  }
}
</script>

<style scoped>
.register {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
}
input {
  width: 100%;
  padding: 6px;
}
button {
  padding: 6px 12px;
}
</style>

<template>
  <div class="structure">
    <h2>Composition API Example 1</h2>

    <p>Count: {{ count }}</p>
    <button @click="count++">Increase</button>

    <br><br>

    <input v-model="user.name" placeholder="Enter name" />
    <p>User Name: {{ user.name }}</p>
  </div>
</template>

<script>
import { ref, reactive, watchEffect } from 'vue'

export default {
  setup() {
    // ref (single value)
    const count = ref(0)

    // reactive (object)
    const user = reactive({
      name: ''
    })

    // watchEffect (auto watch)
    watchEffect(() => {
      if (count.value > 3) {
        console.log('Count is greater than 3')
      }

      if (user.name) {
        console.log('User name changed:', user.name)
      }
    })

    return {
      count,
      user
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
  
  p ,h1{
  color: black;
  font-weight: bold;
}
}
</style>
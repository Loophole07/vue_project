<template>
  <div class="structure">
    <p>Name: {{ user.name }}</p>
    <button @click="user.name = 'Ram'">Change Name</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const user = reactive({
      name: 'Samip'
    })
    return { user }
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
  
  p{
  color: black;
  font-weight: bold;
}
}
</style>

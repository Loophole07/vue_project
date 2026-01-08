<template>
  <div class="structure">
    <p>Message: {{ message }}</p>
    <button @click="changeMessage">Change</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('Hello Vue')

    const changeMessage = () => {
      message.value = 'Message Updated'
    }

    return { message, changeMessage }
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

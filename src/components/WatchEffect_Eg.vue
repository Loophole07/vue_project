<template>
  <div class="structure">
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0)

    watchEffect(() => {
      console.log('Count changed:', count.value)
    })

    return { count }
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
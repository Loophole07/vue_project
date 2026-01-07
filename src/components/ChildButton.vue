<template >
    <div class="structure">
  <button @click="$emit('change-message')">
    Change Message
  </button>
    </div>
</template>

<script>
export default {
  props: ['text']
}
</script>
<style>
    .structure {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
<template>
  <div class="structure">
    <h3>Message: {{ message }}</h3>

    <!-- props + emit -->
    <ChildButton 
      :text="message"
      @change-message="updateMessage"
    />
  </div>
</template>

<script>
import ChildButton from './ChildButton.vue'

export default {
  components: { ChildButton },
  data() {
    return {
      message: 'Hello Vue'
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Message changed by child'
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
</style>
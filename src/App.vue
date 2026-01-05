<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <Structure />
    <Counter />
  </div>
</template>

<script>
import Structure from './components/Structure.vue'
import Counter from './components/Counter.vue'

export default {
  components: {
    Structure,
    Counter
  },
  data() {
    return {
      title: 'My First Vue App'
    }
  }
}
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  margin: 20px;
}
h1 {
  color: blue;
}
</style>

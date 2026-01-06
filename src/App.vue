<template>
  <div class="app">
    <h1>{{ title }}</h1>

    <Vmodel />
    <Toggle />
    <Method />
    <Alert />
    <V_if_else />
    <Structure />
    <Counter />
    
    
    
  </div>
</template>

<script>
  import Vmodel from './components/Vmodel.vue';
  import Toggle from './components/Toggle.vue'
  import Method from './components/Method.vue';
  import V_if_else from './components/V_if_else.vue';
  import Alert from './components/Alert.vue'
import Structure from './components/Structure.vue'
import Counter from './components/Counter.vue'




export default {
  components: {
    Vmodel,
    Toggle,
    Method,
    V_if_else,
    Alert,
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

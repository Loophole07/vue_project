<template>
  <div class="app">
    <h1>{{ title }}</h1>

    <Ref_Eg/>
    <Reactive_Eg/>
    <WatchEffect_Eg/>
    <Composition_Eg/>
    <Comp_Eg1/>
  
    <!-- <Vfor/>
    <Bind/>
    <Computed/>
    <ParentBox/>
    <ChildButton/>
    <Watch/>
    <RegForm />
    <Vmodel />
    <Toggle />
    <Method />
    <Alert />
    <V_if_else />
    <Structure />
    <Counter /> -->
    
    
    
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
import RegForm from './components/RegForm.vue';
import Vfor from './components/Vfor.vue';
import Bind from './components/Bind.vue';
import Computed from './components/Computed.vue';
import ParentBox from './components/ParentBox.vue';
import ChildButton from './components/ChildButton.vue';
import Watch from './components/Watch.vue';
import Ref_Eg from './components/Ref_Eg.vue';
import Reactive_Eg from './components/Reactive_Eg.vue';
import WatchEffect_Eg from './components/WatchEffect_Eg.vue';
import Composition_Eg from './components/Composition_Eg.vue';
import Comp_Eg1 from './components/Comp_Eg1.vue';




export default {
  components: {
    Ref_Eg,
    Reactive_Eg,
    WatchEffect_Eg,
    Composition_Eg,
    Comp_Eg1,
    Vfor,
    Bind,
    Computed,
    ParentBox,
    ChildButton,
    Watch,
    Vmodel,
    RegForm,
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

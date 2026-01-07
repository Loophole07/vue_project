<template>
  <div class="structure">
    <h3>Image Example</h3>
    <img :src="imageUrl" width="200">
  </div>
</template>

<script>
import myImage from '../assets/IMG_0090.JPG'

export default {
  data() {
    return {
      imageUrl: myImage
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

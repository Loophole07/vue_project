<template>
  <div>
    <h3>Products</h3>

    <ul>
      <li v-for="item in products" :key="item.id">
        {{ item.name }} - Rs {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products']
}
</script>

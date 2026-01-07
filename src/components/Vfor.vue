<template>
  <div class="structure">
    <h3>Student List</h3>
    <ul>
      <li v-for="student in students" :key="student">
        {{ student }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: ['Ram', 'Shyam', 'Hari']
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

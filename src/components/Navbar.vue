<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
    <a class="navbar-brand fw-bold text-primary">
      <i class="bi bi-cart4"></i> Vue Cart
    </a>

    <div class="ms-auto">
      <span class="badge bg-primary fs-6">
        <i class="bi bi-bag"></i> {{ totalItems }}
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['totalItems']
}
</script>

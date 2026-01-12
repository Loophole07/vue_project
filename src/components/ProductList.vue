<template>
  <div>
    <div v-for="category in categories" :key="category" class="mb-4">
      <h5 class="text-primary mb-3">{{ category }}</h5>

      <div class="row g-3">
        <div
          v-for="item in groupedProducts[category]"
          :key="item.id"
          class="col-6 col-md-4 col-lg-3"
        >
          <div class="card h-100 text-center shadow-sm">
            <!-- Icon instead of image -->
            <div class="card-body d-flex flex-column justify-content-between">
              <h6 class="card-title">{{ item.name }}</h6>
              <p class="card-text fw-bold">Rs {{ item.price }}</p>

              <button
                class="btn btn-sm btn-primary mt-auto"
                @click="$emit('add-to-cart', item)"
              >
                <i class="bi bi-plus-circle"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['products'],

  setup(props) {
    // Unique categories
    const categories = computed(() => {
      const unique = new Set(props.products.map(p => p.category))
      return Array.from(unique)
    })

    // Group products by category
    const groupedProducts = computed(() => {
      const group = {}
      props.products.forEach(p => {
        if (!group[p.category]) group[p.category] = []
        group[p.category].push(p)
      })
      return group
    })

    return { categories, groupedProducts }
  }
}
</script>

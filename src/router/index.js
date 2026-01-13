import { createRouter, createWebHistory } from 'vue-router'
import AppCart from '../components/App_Cart.vue'
import Bill from '../components/Bill.vue'

const routes = [
  { path: '/', component: AppCart },
  { path: '/bill', component: Bill }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

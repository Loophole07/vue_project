import { createRouter, createWebHashHistory } from 'vue-router'
import AppCart from '../components/App_Cart.vue'
import Bill from '../components/Bill.vue'

const routes = [
  { path: '/', component: AppCart },
  { path: '/bill', component: Bill }
]

const router = createRouter({
  
  history: createWebHashHistory(),
  routes
})

export default router

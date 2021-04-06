import {createRouter, createWebHistory} from 'vue-router'

import Homepage from '../main/homepage/Homepage.vue'
// import Product from '../main/product/Product.vue'
import ProductDetail from '../components/productDetail/ProductDetail.vue'

const routes = [
    {path: '/', component: Homepage},
    // {path: '/', component: Homepage}
    
    {path: '/purchase/:items/:id/:id1/:id2', component: ProductDetail}
]
const router = createRouter({
    history:  createWebHistory(),
    routes
})
export default router
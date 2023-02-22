import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import Cart from "../views/Cart.vue"
import Mine from "../views/Mine.vue"
import Classfiy from "../views/Classfiy.vue"
import ProductDatil from "../views/ProductDatil.vue"
import ProductList from "../views/ProductList.vue"

const routes = [
  {
    path: '/',
    name: '/auto',
    component: HomePage
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomePage
  },
  {
    path: '/Cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart
  },
  {
    path: '/Classfiy',
    name: 'Classfiy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Classfiy
  },
  {
    path: '/Mine',
    name: 'Mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mine
  },
  {
    path: '/ProductDatil',
    name: 'ProductDatil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductDatil
  },
  {
    path: '/ProductList',
    name: 'ProductList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'empty' },
      component: () => import('./views/Register.vue')
    },
    {
      path: '/category',
      name: 'category',
      meta: { layout: 'main' },
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/order',
      name: 'order',
      meta: { layout: 'main' },
      component: () => import('./views/Order.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { layout: 'main' },
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: { layout: 'main' },
      component: () => import('./views/History.vue')
    },
    {
      path: '/detail-record',
      name: 'detail-record',
      meta: { layout: 'main' },
      component: () => import('./views/Detail-record.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      meta: { layout: 'main' },
      component: () => import('./views/Analytics.vue')
    },
    {
      path: '/add-categori/:id',
      name: 'edit-category',
      meta: { layout: 'main' },
      component: () => import('./views/Add-category.vue')
    },
    {
      path: '/order-position',
      name: 'order-position',
      meta: { layout: 'main' },
      component: () => import('./views/Order-position.vue')
    },
    {
      path: '/new',
      name: 'new',
      meta: { layout: 'main' },
      component: () => import('./views/New.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { layout: 'main' },
      component: () => import('./views/Cart.vue')
    },

  ]
})

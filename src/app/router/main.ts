import { createRouter, createWebHistory } from 'vue-router'
import Main from '../../pages/main.vue'
import Login from '../../pages/login.vue'
import AuthLayout from '../layout/auth.vue'


const routes = [
  { path: '/', component: Main },
  { path: '/auth', component: AuthLayout, children: [
    { path: 'login', component: Login }
  ] }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
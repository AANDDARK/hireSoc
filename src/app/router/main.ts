import { createRouter, createWebHistory } from 'vue-router'
import Main from '../../pages/main.vue'
import Login from '../../pages/login.vue'
import AuthLayout from '../layout/auth.vue'
import Singup from '@/pages/singup.vue'
import Account from '@/pages/account.vue'

const routes = [
  { path: '/', component: Main },
  {path: "/account/:id", component: Account},
  { path: '/auth', component: AuthLayout, children: [
    { path: '/login', component: Login },
    {path: "/singup", component: Singup},    
  ] }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
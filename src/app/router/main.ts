import { createRouter, createWebHistory } from 'vue-router'
import Main from '../../pages/main.vue'
import Login from '../../pages/login.vue' 
import Singup from '@/pages/singup.vue'
import Account from '@/pages/account.vue'
import Auth from '../layout/auth.vue'
import Edit from '@/pages/edit.vue'

const routes = [
  { path: '/', component: Main },
  {path: "/account/:id", component: Account},
  {path: '/auth', component: Auth, children: [
    {
      path: "login", component: Login
    }
  ]},
  {path: "/edit", component: Edit}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
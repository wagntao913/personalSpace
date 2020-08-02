import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

  const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        name: 'userList',
        path: 'users/userList',
        component: () => import('@/views/user/usersList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

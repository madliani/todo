import { Routes } from '@/types/routes'
import HomeView from '@/views/HomeView.vue'
import TodoViewVue from '@/views/TodoView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      name: 'home',
      path: Routes.HOME
    },
    {
      component: TodoViewVue,
      name: 'todo',
      path: Routes.TODO
    }
  ]
})

export default router

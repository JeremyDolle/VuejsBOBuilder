import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import navigationGuards from './navigationGuards'
import DataTableEntity from '@/views/DataTableEntity'
import EditEntity from '@/views/EditEntity'
import CreateEntity from '@/views/CreateEntity'
import NotFound from '@/views/NotFound'
import ViewEntity from '@/views/ViewEntity'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:resource/list',
    name: 'DataTableEntity',
    component: DataTableEntity,
  },
  {
    path: '/:resource/view/:id',
    name: 'ViewEntity',
    component: ViewEntity,
  },
  {
    path: '/:resource/edit/:id',
    name: 'EditEntity',
    component: EditEntity,
  },
  {
    path: '/:resource/create',
    name: 'CreateEntity',
    component: CreateEntity,
  },
  // ADD Route above
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

navigationGuards(router)

export default router

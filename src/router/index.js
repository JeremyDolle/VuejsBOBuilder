import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import navigationGuards from './navigationGuards'
import DataTableEntity from '@/views/DataTableEntity'
import EditEntity from '@/views/EditEntity'
import CreateEntity from '@/views/CreateEntity'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

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
    path: '/*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

navigationGuards(router)

export default router

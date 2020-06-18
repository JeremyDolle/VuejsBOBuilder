import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import navigationGuards from './navigationGuards'
import DataTableEntity from '@/views/DataTableEntity'
import EditEntity from '@/views/EditEntity'
import CreateEntity from '@/views/CreateEntity'

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
    name: 'DefaultDataTableEntity',
    component: DataTableEntity,
  },
  {
    path: '/:resource/edit/:id',
    name: 'DefaultEditEntity',
    component: EditEntity,
  },
  {
    path: '/:resource/create',
    name: 'DefaultCreateEntity',
    component: CreateEntity,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

navigationGuards(router)

export default router

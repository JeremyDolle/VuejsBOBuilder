import router from '@/router'

export default async ({ commit }) => {
  commit('logout_success')
  return router.push({ name: 'Login' })
}

import api from '@/service/api'
import router from '@/router'

export default async ({ commit }, { email, password }) => {
  commit('login_loading')
  try {
    const { data: { token } } = await api.post('/login', { email: email, password: password })

    commit('login_success', token)

    return router.push({ name: 'Home' })
  } catch (e) {
    commit('login_error', 'Error during loading')
  }
}

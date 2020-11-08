import api from '@/service/api'

export default async ({ commit, getters }) => {
  commit('me_loading')
  try {
    const token = getters.getTokenHeader
    const { data: { data } } = await api.get('/auth/me', { headers: { Authorization: token } })
    commit('me_success', data)
  } catch (e) {
    commit('me_error', 'Error during loading')
  }
}

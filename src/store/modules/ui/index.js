export default {
  namespaced: true,
  state: {
    toasts: [],
  },
  getters: {},
  mutations: {
    pushToast (state, payload) {
      state.toasts.push(payload)
    },
    popToast (state, key) {
      state.toasts = state.toasts.filter(toast => toast.key !== key)
    },
  },
  actions: {
    async showToast ({ commit }, { variant = 'info', title, description }) {
      commit('pushToast', { key: `toast_${Date.now()}`, variant, title, description })
    },
    async popToast ({ commit }, key) {
      commit('popToast', key)
    },
  },
}

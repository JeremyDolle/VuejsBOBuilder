export default {
  namespaced: true,
  state: {
    toasts: [],
    modals: [],
  },
  getters: {},
  mutations: {
    pushToast (state, payload) {
      state.toasts.push(payload)
    },
    popToast (state, key) {
      state.toasts = state.toasts.filter(toast => toast.key !== key)
    },
    pushModal (state, payload) {
      state.modals.push(payload)
    },
    popModal (state) {
      state.modals.pop()
    },
  },
  actions: {
    async showToast ({ commit }, { variant = 'info', title, description }) {
      commit('pushToast', { key: `toast_${Date.now()}`, variant, title, description })
    },
    async popToast ({ commit }, key) {
      commit('popToast', key)
    },
    async showModal ({ commit }, { variant = 'info', title, component, componentProps }) {
      commit('pushModal', { key: `modal_${Date.now()}`, variant, title, component, componentProps })
    },
    async popModal ({ commit }) {
      commit('popModal')
    },
  },
}

export default {
  login_success (state, token) {
    state.token = token
    state.login_loading = false
    state.login_error = null
  },
  login_error (state, error) {
    state.token = null
    state.login_loading = false
    state.login_error = error
  },
  login_loading (state) {
    state.login_error = null
    state.login_loading = true
  },
}

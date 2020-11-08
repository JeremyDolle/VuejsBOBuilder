export default {
  me_success (state, data) {
    state.me = data
    state.me_loading = false
    state.me_error = null
  },
  me_error (state, error) {
    state.me = null
    state.me_loading = false
    state.me_error = error
  },
  me_loading (state) {
    state.me_error = null
    state.me_loading = true
  },
}

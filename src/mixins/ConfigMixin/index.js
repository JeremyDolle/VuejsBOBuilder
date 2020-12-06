import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      config (state) {
        return state.config
      },
    }),
  },
}

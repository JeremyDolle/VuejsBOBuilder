import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      email: 'admin@tcm.fr',
      password: 'secret',
    },
  }),
  methods: {
    ...mapActions('auth', ['login']),
    ...mapActions('auth', ['logout']),
    submit () {
      const { email, password } = this.form
      this.login({ email, password })
    },
  },
}

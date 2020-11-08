import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      email: 'admin@tcm.fr',
      password: 'secret',
    },
  }),
  methods: {
    ...mapActions('auth', ['me']),
    ...mapActions('auth', ['login']),
    ...mapActions('auth', ['logout']),
    async submit () {
      const { email, password } = this.form
      await this.login({ email, password })
      await this.me()
    },
  },
}

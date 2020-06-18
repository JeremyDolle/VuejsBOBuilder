import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
  }),
  methods: {
    ...mapActions('auth', ['login']),
    submit () {
      const { email, password } = this.form
      this.login({ email, password })
    },
  },
}

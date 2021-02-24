import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'

export default function useAuthLogin () {
  const store = useStore()

  const form = reactive({
    email: 'admin@tcm.fr',
    password: 'secret',
  })

  const login = async () => {
    const { email, password } = form
    await store.dispatch('auth/login', { email, password })
    await store.dispatch('auth/me')
  }

  return {
    form,
    login,
  }
}

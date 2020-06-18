import store from '@/store'

export default function (to, from, next) {
  if (to.name !== 'Login' && !store.getters['auth/isConnected']) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

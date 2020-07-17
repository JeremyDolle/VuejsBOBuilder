import loginMutations from './login'
import clearModule from './logout'

export default {
  ...loginMutations,
  ...clearModule,
}

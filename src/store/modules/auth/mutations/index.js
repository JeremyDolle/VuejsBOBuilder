import meMutations from './me'
import loginMutations from './login'
import clearModule from './logout'

export default {
  ...meMutations,
  ...loginMutations,
  ...clearModule,
}

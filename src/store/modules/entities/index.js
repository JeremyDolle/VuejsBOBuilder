import buildState from './buildState'
import buildMutations from './buildMutations'
import buildActions from './buildActions'

export default function (key, apiConfig) {
  return {
    namespaced: true,
    state: buildState(key),
    mutations: buildMutations(key),
    actions: buildActions(key, apiConfig),
  }
}

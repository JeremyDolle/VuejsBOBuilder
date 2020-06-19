import api from '@/service/api'

const buildState = (key) => {
  return {
    [`${key}s`]: {
      entities: {},
      $status: {
        loading: false,
        error: null,
      },
    },
  }
}

const buildMutations = (key) => {
  return {
    [`set_${key}`] (state, entity) {
      state[`${key}s`].entities[entity.id] = {
        ...entity,
        $status: {
          loading: false,
          error: null,
        },
      }
    },
    [`set_${key}s`] (state, entities) {
      state[`${key}s`] = {
        entities: entities.reduce((acc, entity) => ({
          ...acc,
          [entity.id]: {
            ...entity,
            $status: {
              loading: false,
              error: null,
            },
          },
        }), {}),
        $status: {
          loading: false,
          error: null,
        },
      }
    },
    [`pop_${key}s`] (state, entity) {
      const entities = state[`${key}s`].entities
      delete entities[entity.id]
      state[`${key}s`].entities = entities
    },
    [`set_${key}_loading`] (state, { id, bool }) {
      state[`${key}s`].entities = {
        ...state[`${key}s`].entities,
        [id]: {
          ...state[`${key}s`].entities ? state[`${key}s`].entities[id] : {},
          $status: {
            loading: bool,
            error: null,
          },
        },
      }
    },
    [`set_${key}_error`] (state, { id, error }) {
      state[`${key}s`].entities = {
        ...state[`${key}s`].entities,
        [id]: {
          ...state[`${key}s`].entities ? state[`${key}s`].entities[id] : {},
          $status: {
            loading: false,
            error: error,
          },
        },
      }
    },
    [`set_${key}s_loading`] (state, bool) {
      state[`${key}s`].$status.loading = bool
    },
    [`set_${key}s_error`] (state, error) {
      state[`${key}s`].$status.error = error
    },
  }
}

const buildActions = (key, apiConfig) => {
  return {
    // Get one
    async [`fetch_${key}`] ({ commit, dispatch }, id) {
      commit(`set_${key}_loading`, { id, bool: true })
      // API CALL
      try {
        const url = `${apiConfig.url}/${apiConfig.endpoints.fetchOne.url.replace(':id', id)}`
        const { data } = await api.get(url)
        // commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}`, data)
      } catch (e) {
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}_error`, { id, error: 'Oh noooooooooo' })
      }
    },
    // Get all
    async [`fetch_${key}s`] ({ commit }) {
      commit(`set_${key}s_loading`, true)
      // // API CALL
      try {
        const url = `${apiConfig.url}/${apiConfig.endpoints.fetchAll.url}`
        const { data } = await api.get(url)
        // commit(`set_${key}s_loading`, false)
        commit(`set_${key}s`, data)
      } catch (e) {
        commit(`set_${key}s_loading`, false)
        commit(`set_${key}s_error`, 'Oh noooooooooo')
      }
    },
    // Create one
    async [`create_${key}`] ({ commit, dispatch }, payload) {
      // API CALL(payload)
      try {
        const url = `${apiConfig.url}/${apiConfig.endpoints.create.url}`
        await api.post(url, payload)
        dispatch('ui/showToast', { title: 'Creation', description: 'L\'entité à été crée', variant: 'success' }, { root: true })
      } catch (e) {
        dispatch('ui/showToast', { title: 'Erreur', description: 'erreur pendant la création', variant: 'danger' }, { root: true })
      }
    },
    // update one
    async [`update_${key}`] ({ commit, dispatch }, { id, payload }) {
      commit(`set_${key}_loading`, { id, bool: true })
      // API CALL(payload)
      try {
        const url = `${apiConfig.url}/${apiConfig.endpoints.update.url.replace(':id', id)}`
        await api.put(url, payload)
        commit(`set_${key}_loading`, { id, bool: false })
        dispatch('ui/showToast', { title: 'Update', description: 'L\'entité à été mise à jour', variant: 'success' }, { root: true })
      } catch (e) {
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}_error`, { id, error: 'Oh noooooooooo' })
        dispatch('ui/showToast', { title: 'Erreur', description: 'erreur pendant la mise à jour', variant: 'danger' }, { root: true })
      }
    },
    // delete one
    async [`delete_${key}`] ({ commit, dispatch }, { id }) {
      commit(`set_${key}_loading`, { id, bool: true })
      // API CALL(payload)
      try {
        const url = `${apiConfig.url}/${apiConfig.endpoints.delete.url.replace(':id', id)}`
        await api.delete(url)
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`pop_${key}s`, { id })
        dispatch('ui/showToast', { title: 'Update', description: 'L\'entité à été supprimée', variant: 'success' }, { root: true })
      } catch (e) {
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}_error`, { id, error: 'Oh noooooooooo' })
        dispatch('ui/showToast', { title: 'Erreur', description: 'erreur pendant la suppression', variant: 'danger' }, { root: true })
      }
    },
  }
}

export default function (key, apiConfig) {
  return {
    namespaced: true,
    state: buildState(key),
    mutations: buildMutations(key),
    actions: buildActions(key, apiConfig),
  }
}

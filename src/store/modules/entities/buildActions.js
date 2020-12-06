import api from '@/service/api'
import handlePagination from '@/utils/handlePagination'
import i18n from '@/i18n'

export default (key, apiConfig) => {
  return {
    // Get one
    async [`fetch_${key}`] ({ commit, dispatch, rootGetters }, id) {
      commit(`set_${key}_loading`, { id, bool: true })
      // API CALL
      try {
        const url = `${apiConfig.url}/${apiConfig.endpoints.fetchOne.url.replace(':id', id)}`
        const token = rootGetters['auth/getTokenHeader']
        const { data } = await api.get(url, { headers: { Authorization: token } })
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}`, data.data)
      } catch (e) {
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}_error`, { id, error: 'Oh noooooooooo' })
      }
    },
    // Get all
    async [`fetch_${key}s`] ({ commit, rootGetters }, { page = 1, search, sortBy }) {
      commit(`set_${key}s_loading`, true)
      // // API CALL
      try {
        let querySort = Object.entries(sortBy || {}).reduce((acc, [key, value]) => {
          return [
            ...acc,
            `${key}=${value}`,
          ]
        }, []).join('&')
        if (querySort !== '') {
          querySort = `&${querySort}`
        }

        const querySearch = search === '' ? querySort : `&search=${search}${querySort}`
        const url = `${apiConfig.url}/${apiConfig.endpoints.fetchAll.url}?page=${page}${querySearch}`
        const token = rootGetters['auth/getTokenHeader']
        const response = await api.get(url, { headers: { Authorization: token } })
        const { data, total } = handlePagination(response)
        commit(`set_${key}s`, { data, total, page, search, sortBy })
      } catch (e) {
        commit(`set_${key}s_loading`, false)
        commit(`set_${key}s_error`, 'Oh noooooooooo')
      }
    },
    // Create one
    async [`create_${key}`] ({ commit, dispatch, rootGetters }, payload) {
      // API CALL(payload)
      try {
        const formData = new FormData()
        Object.entries(payload).forEach(([key, value]) => formData.append(key, value))
        const url = `${apiConfig.url}/${apiConfig.endpoints.create.url}`
        const token = rootGetters['auth/getTokenHeader']
        await api.post(url, formData, { headers: { Authorization: token } })
        dispatch('ui/showToast', { title: i18n.t('toasts.create.title'), description: i18n.t('toasts.create.success'), variant: 'success' }, { root: true })
      } catch (e) {
        dispatch('ui/showToast', { title: i18n.t('toasts.error'), description: i18n.t('toasts.create.error'), variant: 'danger' }, { root: true })
      }
    },
    // update one
    async [`update_${key}`] ({ commit, dispatch, rootGetters }, { id, payload }) {
      commit(`set_${key}_loading`, { id, bool: true })
      // API CALL(payload)
      try {
        const formData = new FormData()
        Object.entries(payload).forEach(([key, value]) => formData.append(key, value))
        const url = `${apiConfig.url}/${apiConfig.endpoints.update.url.replace(':id', id)}`
        const token = rootGetters['auth/getTokenHeader']
        await api.put(url, formData, { headers: { Authorization: token } })
        commit(`set_${key}_loading`, { id, bool: false })
        dispatch('ui/showToast', { title: i18n.t('toasts.edit.title'), description: i18n.t('toasts.edit.success'), variant: 'success' }, { root: true })
      } catch (e) {
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}_error`, { id, error: 'Oh noooooooooo' })
        dispatch('ui/showToast', { title: i18n.t('toasts.error'), description: i18n.t('toasts.edit.error'), variant: 'danger' }, { root: true })
      }
    },
    // delete one
    async [`delete_${key}`] ({ commit, dispatch, rootGetters }, { id }) {
      commit(`set_${key}_loading`, { id, bool: true })
      // API CALL(payload)
      try {
        const url = `${apiConfig.url}/${apiConfig.endpoints.delete.url.replace(':id', id)}`
        const token = rootGetters['auth/getTokenHeader']
        await api.delete(url, { headers: { Authorization: token } })
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`pop_${key}s`, { id })
        dispatch('ui/showToast', { title: i18n.t('toasts.delete.title'), description: i18n.t('toasts.delete.success'), variant: 'success' }, { root: true })
      } catch (e) {
        commit(`set_${key}_loading`, { id, bool: false })
        commit(`set_${key}_error`, { id, error: 'Oh noooooooooo' })
        dispatch('ui/showToast', { title: i18n.t('toasts.error'), description: i18n.t('toasts.delete.error'), variant: 'danger' }, { root: true })
      }
    },
    // search
    async [`set_${key}s_search`] ({ commit, dispatch, rootGetters }, { search }) {
      commit(`set_${key}s_search`, { search })
    },
    // sort
    async [`set_${key}s_sort`] ({ commit, dispatch, rootGetters }, { sortBy, sortDesc }) {
      commit(`set_${key}s_sort`, { sortBy, sortDesc })
    },
  }
}

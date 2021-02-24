import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'

export default function useFetchEntities ({ module, entity, page, id, convertToString }) {
  const store = useStore()

  const moduleState = computed(() => store.state[module])

  const search = computed(() => moduleState.value[`${entity}s`].search)

  const sortBy = computed(() => moduleState.value[`${entity}s`].sortBy)

  // const getEntityFieldByName = computed(() => store.getters['config/getEntityFieldByName'])

  const data = computed(() => {
    let { [`${entity}s`]: { entities: data } = {} } = moduleState.value
    if (Object.values(data).length > 0) {
      // FetchOne
      if (id) {
        if (convertToString) {
          return buildToString(data[id], convertToString)
        }
        data = [data[id]]
      } else {
        // FetchAll
        data = Object.values(data)
      }

      return data.map(item => {
        return Object.entries(item).reduce((acc, [key, value]) => {
          // if (value && typeof value === 'object' && key !== '$status') {
          //   const toStringKeys = this.toString
          //   if (toStringKeys) {
          //     return { ...acc, [key]: this.buildToString(value, toStringKeys) }
          //   }
          // } else {
          return { ...acc, [key]: value }
          // }
        }, {})
      })
    }
    return []
  })

  const isLoading = computed(() => {
    let { loading } = moduleState.value[`${entity}s`].$status
    if (id) {
      const { entities: { [id]: { $status: { loading: entityLoading = false } = {} } = {} } = {} } = moduleState.value[`${entity}s`]
      loading = entityLoading
    }
    return loading
  })

  const isError = computed(() => {
    let { error } = moduleState.value[`${entity}s`].$status
    if (id) {
      const { entities: { [id]: { $status: { error: entityError = false } = {} } = {} } = {} } = moduleState.value[`${entity}s`]
      error = entityError
    }
    return error
  })

  const total = computed(() => {
    return moduleState.value[`${entity}s`].total
  })

  const reactivePage = computed(() => page)

  const setSearch = ({ search }) => store.dispatch(`${module}/set_${entity}s_search`, { search })

  const fetch = () => {
    if (id) {
      return store.dispatch(`${module}/fetch_${entity}`, id)
    }
    return store.dispatch(`${module}/fetch_${entity}s`, {
      page: reactivePage.value,
      search: search.value,
      sortBy: sortBy.value,
    })
  }

  watch(reactivePage, () => {
    fetch()
  })

  const buildToString = (item, keys) => {
    return Object.entries(item).reduce((acc, [key, value]) => {
      if (keys.includes(key)) {
        return [...acc, value]
      }
      return acc
    }, []).join(' ')
  }

  onMounted(() => fetch())

  return {
    data,
    isLoading,
    isError,
    total,
    setSearch,
    refresh: fetch,
  }
}

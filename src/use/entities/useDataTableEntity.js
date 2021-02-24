import { useStore } from 'vuex'
import useAppConfig from '@/use/useAppConfig'
import { useRoute } from 'vue-router'
// import { useI18n } from 'vue-i18n'
import { computed, reactive, toRefs } from '@vue/reactivity'

export default function useDataTableEntity () {
  const route = useRoute()
  const store = useStore()
  // const { t } = useI18n()

  const data = reactive({
    page: 1,
    sortBy: null,
    sortDesc: false,
  })

  const { entitiesConfig } = useAppConfig()

  const entity = computed(() => {
    if (!entitiesConfig.value) {
      return null
    }
    return entitiesConfig.value.find(item => item.name === route.params.resource)
  })

  const slotDataTableWellHeader = computed(() => {
    return {
      title: entity.value.name,
      to: { name: 'CreateEntity', params: { resource: route.params.resource } },
    }
  })

  const search = computed(() => {
    const { resource } = route.params
    return store.state[resource][`${resource}s`].search
  })

  const deleteEntity = () => {
    // this.$bvModal.msgBoxConfirm(t('actions.deleteConfirm.description'), {
    //   title: t('actions.deleteConfirm.title'),
    //   cancelVariant: 'default',
    //   okTitle: t('actions.delete'),
    //   cancelTitle: t('actions.cancel'),
    //   hideHeaderClose: true,
    //   centered: true,
    //   headerClass: 'border-0 d-flex justify-content-center',
    //   bodyClass: 'text-center',
    //   footerClass: 'border-0',
    // })
    //   .then(value => {
    //     if (value) {
    //       const { resource } = route.params
    //       store.dispatch(`${resource}/delete_${resource}`, { id })
    //     }
    //   })
    //   .catch(err => {
    //     console.error(err)
    //     // An error occurred
    //   })
  }

  const setSearch = (search, callback = () => {}) => {
    const { resource } = route.params
    store.dispatch(`${resource}/set_${resource}s_search`, { search })
    if (search === '') {
      callback()
    }
  }

  const setSort = ({ sortBy, sortDesc }, callback = () => {}) => {
    data.sortBy = sortBy
    data.sortDesc = sortDesc
    const { resource } = route.params
    store.dispatch(`${resource}/set_${resource}s_sort`, {
      sortBy,
      sortDesc: sortDesc ? 'desc' : 'asc',
    })
    callback()
  }

  return {
    ...toRefs(data),
    entity,
    slotDataTableWellHeader,
    search,
    deleteEntity,
    setSearch,
    setSort,
  }
}

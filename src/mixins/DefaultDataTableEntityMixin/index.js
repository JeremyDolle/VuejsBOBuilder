import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      page: 1,
    }
  },
  computed: {
    entity () {
      if (!this.entities) {
        return null
      }
      return this.entities.find(item => item.name === this.$route.params.resource)
    },
    ...mapState('config', ['entities']),
    slotDataTableWellHeader () {
      return {
        title: this.entity.name,
        to: { name: 'CreateEntity', params: { resource: this.$route.params.resource } },
      }
    },
    ...mapState({
      search (state) {
        const { resource } = this.$route.params
        return state[resource][`${resource}s`].search
      },
    }),
  },
  methods: {
    ...mapActions({
      async deleteEntity (dispatch, id) {
        this.$bvModal.msgBoxConfirm(this.$t('actions.deleteConfirm.description'), {
          title: this.$t('actions.deleteConfirm.title'),
          cancelVariant: 'default',
          okTitle: this.$t('actions.delete'),
          cancelTitle: this.$t('actions.cancel'),
          hideHeaderClose: true,
          centered: true,
          headerClass: 'border-0 d-flex justify-content-center',
          bodyClass: 'text-center',
          footerClass: 'border-0',
        })
          .then(value => {
            if (value) {
              const { resource } = this.$route.params
              dispatch(`${resource}/delete_${resource}`, { id })
            }
          })
          .catch(err => {
            console.error(err)
            // An error occurred
          })
      },
    }),
    setSearch (search, callback = () => {}) {
      const { resource } = this.$route.params
      this.$store.dispatch(`${resource}/set_${resource}s_search`, { search })
      if (search === '') {
        callback()
      }
    },
  },
}

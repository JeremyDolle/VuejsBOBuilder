import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    entity () {
      if (!this.getEntitiesConfig) {
        return null
      }
      console.log(this.getEntitiesConfig)
      return this.getEntitiesConfig.find(item => item.name === this.$route.params.resource)
    },
    ...mapGetters('config', ['getEntitiesConfig']),
  },
  methods: {
    ...mapActions({
      async createEntity (dispatch, form) {
        const { resource } = this.$route.params
        await dispatch(`${resource}/create_${resource}`, form)
        await this.$router.push({
          name: 'DataTableEntity',
          params: {
            resource: this.$route.params.resource,
          },
        })
      },
    }),
  },
}

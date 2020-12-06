import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    entity () {
      if (!this.entities) {
        return null
      }
      return this.entities.find(item => item.name === this.$route.params.resource)
    },
    ...mapState('config', ['entities']),
  },
  methods: {
    ...mapActions({
      async editEntity (dispatch, form, id) {
        const { resource } = this.$route.params
        await dispatch(`${resource}/update_${resource}`, { id, payload: form })
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

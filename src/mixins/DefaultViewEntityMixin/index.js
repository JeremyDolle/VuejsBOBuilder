import { mapGetters } from 'vuex'

export default {
  computed: {
    entity () {
      if (!this.getEntitiesConfig) {
        return null
      }

      // Spread to clone and don't affect the getters
      const entity = {
        ...this.getEntitiesConfig
          .find(item => item.name === this.$route.params.resource),
      }

      entity.schema = entity.schema.map((field) => ({ ...field, readonly: true, disabled: true }))

      return entity
    },
    ...mapGetters('config', ['getEntitiesConfig']),
  },
}

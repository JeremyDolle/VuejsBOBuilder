import registerEntitiesConfig from '@/utils/registerEntitiesConfig'

export default {
  namespaced: true,
  state: {
    application: null,
    entities: null,
  },
  getters: {
    getEntitiesConfig: (state) => {
      return state.entities
    },
    getEntitySchemaByName: (state) => (name) => {
      return state.entities.find(entity => entity.name === name).schema
    },
    getEntityPermissionsByName: (state) => (name) => {
      if (!state.entities) {
        return []
      }
      return (state.entities.find(entity => entity.name === name) || {}).needPermissions || []
    },
    getEntityFieldByName: (state) => (entityName, field) => {
      return state.entities.find(entity => entity.name === entityName).schema.find(({ key }) => key === field)
    },
  },
  mutations: {
    setEntitiesConfig (state, entities) {
      state.entities = entities
    },
  },
  actions: {
    async registerApplication ({ commit }) {
      const entities = await registerEntitiesConfig()
      commit('setEntitiesConfig', entities)
    },
  },
}

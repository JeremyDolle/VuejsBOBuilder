import registerEntitiesConfig from '@/utils/registerEntitiesConfig'

export default {
  namespaced: true,
  state: {
    application: null,
    entities: null,
  },
  getters: {
    getEntitySchemaByName: (state) => (name) => {
      return state.entities.find(entity => entity.name === name).schema
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

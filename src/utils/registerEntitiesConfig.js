import entitiesConfig from '@/config/entities'
import normalizeSchema from '@/utils/normalizeSchema'
import normalizeApi from '@/utils/normalizeApi'

export default function () {
  return Object.values(entitiesConfig).reduce(async (acc, config) => {
    const accConfig = await acc
    const { default: configImport } = await import('@/config/entities/' + config + '.json')
    const api = await normalizeApi(config, configImport.api)
    const schema = await normalizeSchema(configImport.schema)
    const mergedConfig = [
      ...accConfig,
      { ...configImport, api, schema },
    ]

    return new Promise((resolve) => {
      resolve(mergedConfig)
    })
  }, Promise.resolve([]))
}

import entitiesConfig from '@/config/entities'
import normalizeSchema from '@/utils/normalizeSchema'

export default function () {
  return Object.values(entitiesConfig).reduce(async (acc, config) => {
    const accConfig = await acc
    const { default: configImport } = await import('@/config/entities/' + config + '.json')
    const schema = await normalizeSchema(configImport.schema)
    const mergedConfig = [
      ...accConfig,
      { ...configImport, schema },
    ]

    return new Promise((resolve) => {
      resolve(mergedConfig)
    })
  }, Promise.resolve([]))
}

export default function (schema) {
  const promises = schema.map(async field => {
    if (typeof field === 'object') {
      return field
    }
    if (typeof field === 'string') {
      const { default: commonField } = await import('@/config/common/fields/' + field + '.json')
      return commonField
    }
    return null
  })
  return Promise.all(promises)
}

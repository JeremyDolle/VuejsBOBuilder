export default async function (resource, api) {
  if (typeof api === 'undefined') {
    const { default: { url } } = await import('@/config/common/api/default_api.json')

    const endpoints = {
      fetchAll: {
        url: `${resource}s`,
      },
      fetchOne: {
        url: `${resource}s/:id`,
      },
      create: {
        url: `${resource}s`,
      },
      update: {
        url: `${resource}s/:id`,
      },
      delete: {
        url: `${resource}/:id`,
      },
    }

    return {
      url,
      endpoints,
    }
  }
  return api
}

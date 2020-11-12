export default (key) => {
  return {
    [`${key}s`]: {
      entities: {},
      $status: {
        loading: false,
        error: null,
      },
      search: '',
      total: 0,
      page: 1,
      limit: 10,
    },
  }
}

export default (key) => {
  return {
    [`${key}s`]: {
      entities: {},
      $status: {
        loading: false,
        error: null,
      },
      search: '',
      sortBy: null,
      total: 0,
      page: 1,
      limit: 10,
    },
  }
}

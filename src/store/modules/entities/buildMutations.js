export default (key) => {
  return {
    [`set_${key}`] (state, entity) {
      state[`${key}s`].entities[entity.id] = {
        ...entity,
        $status: {
          loading: false,
          error: null,
        },
      }
    },
    [`set_${key}s`] (state, { data, total, page }) {
      state[`${key}s`] = {
        entities: data.reduce((acc, entity) => ({
          ...acc,
          [entity.id]: {
            ...entity,
            $status: {
              loading: false,
              error: null,
            },
          },
        }), {}),
        $status: {
          loading: false,
          error: null,
        },
        total,
        page,
      }
    },
    [`pop_${key}s`] (state, entity) {
      const entities = state[`${key}s`].entities
      delete entities[entity.id]
      state[`${key}s`].entities = entities
    },
    [`set_${key}_loading`] (state, { id, bool }) {
      state[`${key}s`].entities = {
        ...state[`${key}s`].entities,
        [id]: {
          ...state[`${key}s`].entities ? state[`${key}s`].entities[id] : {},
          $status: {
            loading: bool,
            error: null,
          },
        },
      }
    },
    [`set_${key}_error`] (state, { id, error }) {
      state[`${key}s`].entities = {
        ...state[`${key}s`].entities,
        [id]: {
          ...state[`${key}s`].entities ? state[`${key}s`].entities[id] : {},
          $status: {
            loading: false,
            error: error,
          },
        },
      }
    },
    [`set_${key}s_loading`] (state, bool) {
      state[`${key}s`].$status.loading = bool
    },
    [`set_${key}s_error`] (state, error) {
      state[`${key}s`].$status.error = error
    },
  }
}

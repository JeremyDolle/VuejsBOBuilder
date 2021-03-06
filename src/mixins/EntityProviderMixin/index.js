import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  props: {
    entity: {
      type: String,
      required: true,
    },
    module: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: false,
      default: null,
    },
    convertToString: {
      type: [Array],
      default: null,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    page () {
      this.fetch()
    },
  },
  computed: {
    ...mapState({
      search (state) {
        return state[this.module][`${this.entity}s`].search
      },
    }),
    ...mapState({
      sortBy (state) {
        return state[this.module][`${this.entity}s`].sortBy
      },
    }),
    ...mapState({ state (state) { return { ...state[this.module] } } }),
    ...mapGetters('config', ['getEntityFieldByName']),
    data () {
      let { [`${this.entity}s`]: { entities: data } = {} } = this.state
      if (Object.values(data).length > 0) {
        // FetchOne
        if (this.id) {
          if (this.convertToString) {
            return this.buildToString(data[this.id], this.convertToString)
          }
          data = [data[this.id]]
        } else { // FetchAll
          data = Object.values(data)
        }

        return data.map(item => {
          return Object.entries(item).reduce((acc, [key, value]) => {
            // if (value && typeof value === 'object' && key !== '$status') {
            //   const toStringKeys = this.toString
            //   if (toStringKeys) {
            //     return { ...acc, [key]: this.buildToString(value, toStringKeys) }
            //   }
            // } else {
            return { ...acc, [key]: value }
            // }
          }, {})
        })
      }
      return []
    },
    isLoading () {
      let { loading } = this.state[`${this.entity}s`].$status
      if (this.id) {
        const { entities: { [this.id]: { $status: { loading: entityLoading = false } = {} } = {} } = {} } = this.state[`${this.entity}s`]
        loading = entityLoading
      }
      return loading
    },
    isError () {
      let { error } = this.state[`${this.entity}s`].$status
      if (this.id) {
        const { entities: { [this.id]: { $status: { error: entityError = false } = {} } = {} } = {} } = this.state[`${this.entity}s`]
        error = entityError
      }
      return error
    },
    total () {
      return this.state[`${this.entity}s`].total
    },
  },
  methods: {
    ...mapActions({
      setSearch (dispatch, { search }) {
        return dispatch(`${this.module}/set_${this.entity}s_search`, { search })
      },
    }),
    ...mapActions({
      fetch (dispatch) {
        if (this.id) {
          return dispatch(`${this.module}/fetch_${this.entity}`, this.id)
        }
        return dispatch(`${this.module}/fetch_${this.entity}s`, {
          page: this.page,
          search: this.search,
          sortBy: this.sortBy,
        })
      },
    }),
    buildToString (item, keys) {
      return Object.entries(item).reduce((acc, [key, value]) => {
        if (keys.includes(key)) {
          return [...acc, value]
        }
        return acc
      }, []).join(' ')
    },
  },
  mounted () {
    this.fetch()
  },
}

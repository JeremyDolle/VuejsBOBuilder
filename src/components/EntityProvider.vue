<script>
import { useFetchEntities } from '@/use/entities'

export default {
  name: 'EntityProvider',
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
  setup (props, context) {
    const {
      data,
      isLoading,
      isError,
      total,
      setSearch,
      refresh,
    } = useFetchEntities(props)

    return () => context.slots.default({
      data: data.value,
      isLoading: isLoading.value,
      isError: isError.value,
      total: total.value,
      setSearch,
      refresh,
    })
  },
}
</script>

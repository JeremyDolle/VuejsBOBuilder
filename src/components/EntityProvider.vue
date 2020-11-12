<script>
import { EntityProviderMixin } from '@/mixins'

export default {
  name: 'EntityProvider',
  mixins: [EntityProviderMixin],
  render () {
    return this.$scopedSlots.default({
      data: this.data,
      isLoading: this.isLoading,
      isError: this.isError,
      total: this.total,
      setSearch: this.setSearch,
      refresh: this.fetch,
    })
  },
}
</script>

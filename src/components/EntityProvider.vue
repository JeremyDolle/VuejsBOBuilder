<script>
import { EntityProviderMixin } from '@/mixins'

export default {
  name: 'EntityProvider',
  mixins: [EntityProviderMixin],
  render () {
    // if ((this.data === null || this.data.length === 0) && !this.isLoading) {
    //   this.fetch()
    // }
    return this.$scopedSlots.default({
      data: this.data,
      isLoading: this.isLoading,
      isError: this.isError,
    })
  },
}
</script>

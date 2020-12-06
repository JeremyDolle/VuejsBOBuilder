<script>
export default {
  name: 'FileToBase64',
  props: {
    file: {
      type: File,
      required: true,
    },
  },
  data () {
    return {
      isLoading: true,
      data: null,
    }
  },
  mounted () {
    this.toBase64(this.file)
  },
  methods: {
    toBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.isLoading = false
          this.data = reader.result
          return resolve(reader.result)
        }
        reader.onerror = error => reject(error)
      })
    },
  },
  render () {
    return this.$scopedSlots.default({
      data: this.data,
      isLoading: this.isLoading,
    })
  },
}
</script>

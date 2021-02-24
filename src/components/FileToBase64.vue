<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'FileToBase64',
  props: {
    file: {
      type: File,
      required: true,
    },
  },
  setup (props, context) {
    const data = reactive({
      isLoading: true,
      data: null,
    })

    const toBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          data.isLoading = false
          data.data = reader.result
          return resolve(reader.result)
        }
        reader.onerror = error => reject(error)
      })
    }

    onMounted(() => toBase64(props.file))

    return () => context.slots.default({
      data: data.data,
      isLoading: data.isLoading,
    })
  },
}
</script>

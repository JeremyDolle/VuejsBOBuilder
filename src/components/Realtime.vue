<template>
  <div
    v-if="clockFeatureIsAvailable"
    class="realtime"
  >
    <div class="realtime-hours"> {{ hours }} </div>
    <div class="realtime-day"> {{ day }} </div>
  </div>
</template>

<script>
import moment from 'moment'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'
import { useFeatures } from '@/use'

export default {
  name: 'Realtime',
  setup () {
    const { clockFeatureIsAvailable } = useFeatures()

    const data = reactive({ hours: null, day: null, interval: null })
    onMounted(() => {
      if (!data.interval) {
        data.interval = setInterval(() => {
          data.hours = moment().format('HH:mm')
          data.day = moment().format('MMMM, Do YYYY')
        }, 1000)
      }
    })

    onUnmounted(() => {
      if (data.interval) {
        clearInterval(data.interval)
        data.interval = null
      }
    })

    return {
      ...toRefs(data),
      clockFeatureIsAvailable,
    }
  },
}
</script>

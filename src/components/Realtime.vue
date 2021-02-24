<template>
  <div
    v-if="clockFeatureIsAvailable"
    class="realtime"
  >
    <span class="realtime-hours"> {{ hours }} </span>
    <span class="realtime-day"> {{ day }} </span>
  </div>
</template>

<script>
import moment from 'moment'
import { reactive } from '@vue/reactivity'
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

    return { clockFeatureIsAvailable }
  },
}
</script>

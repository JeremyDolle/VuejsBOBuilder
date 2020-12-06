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
import { FeaturesMixin } from '@/mixins'

export default {
  name: 'Realtime',
  mixins: [FeaturesMixin],
  data () {
    return {
      hours: null,
      day: null,
    }
  },
  mounted () {
    setInterval(() => {
      this.hours = moment().format('HH:mm')
      this.day = moment().format('MMMM, Do YYYY')
    }, 1000)
  },
}
</script>

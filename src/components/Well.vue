<template>
  <div class="well">
    <div class="well-header">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div class="well-content">
      <slot />
    </div>
    <div class="well-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Well',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

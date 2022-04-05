<template>
  <p
    class=""
    :class="{
      'font-bold text-xs text-gray-500': isNormal,
      'text-xs text-red-500': isError
    }"
  >
    {{ $props.msg }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: { type: String, required: false, default: 'normal' },
    msg: { type: String, required: false, default: '' }
  },
  computed: {
    isNormal (): boolean {
      return this.$props.type === 'normal'
    },
    isError (): boolean {
      return this.$props.type === 'error'
    }
  }
})
</script>
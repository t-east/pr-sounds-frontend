<template>
  <div class="text-lg font-bold">
      {{ $props.label }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: { type: String, required: true },
  },
})
</script>
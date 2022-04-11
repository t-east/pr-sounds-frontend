<template>
  <p class="font-bold text-md">
    {{ $props.label }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: { required: true, type: String, default: '' }
  }
})
</script>
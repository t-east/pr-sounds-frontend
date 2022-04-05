<template>
    <div class="flex mb-4">
      <div class="text-lg mr-4">
        {{ $props.label }}
      </div>
      <div class="text-lg font-bold">
        {{ $props.value }}
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  },
  props: {
    label: { type: String, required: true },
    value: { type: String, required: false, default: '' },
  },

})
</script>
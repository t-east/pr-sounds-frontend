<template>
  <button
      class="bg-wheat hover:bg-wheat border-2 border-white text-white hover:opacity-80 font-bold text-sm focus:outline-none px-3 sm:px-6 py-2 rounded-full"
      @click="$emit('click')"
  >
      {{ $props.val }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    val: { type: String, required: true }
  }
})
</script>
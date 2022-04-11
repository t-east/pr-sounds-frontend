<template>
  <div
    class="flex p-1 font-bold border border-dotted text-gray-600 border-gray-600 rounded-lg cursor-pointer"
    @click="$emit('new-tag')"
  >
    <p>+ New</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
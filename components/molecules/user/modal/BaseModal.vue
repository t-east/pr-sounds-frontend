
<template>
  <div class="fixed inset-0 top-32 bg-gray h-full justify-center z-3">
    <div class="bg-white text-black rounded-2xl px-8 relative">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
  }

})
</script> 
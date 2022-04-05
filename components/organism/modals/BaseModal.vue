<template>
  <div class="fixed inset-0 bg-opacity-30 bg-black flex shadow-lg items-center justify-center z-10">
    <div :class="`bg-white text-black opacity-100 py-4 px-12 w-${$props.size} rounded-2xl relative`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    size: { type: String, required: false, default: ''},
  }
});
</script>

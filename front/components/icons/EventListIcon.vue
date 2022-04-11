<template>
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" :class="`h-${$props.height} w-${$props.width}`" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
  </svg>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    height: { type: Number, required: false, default: 5 },
    width: { type: Number, required: false, default: 5 }
  }
});
</script>

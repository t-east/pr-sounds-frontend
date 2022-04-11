<template>
    <NuxtLink :to="$props.link" class="text-md">
        {{ $props.label}}
    </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
  },
  props: {
    label: { type: String, required: true },
    link: { type: String, required: true }
  },

})
</script>
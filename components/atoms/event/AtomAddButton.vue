<template>
  <button
    class="bg-gray-300 w-full h-8 flex justify-center hover:bg-wheat text-gray-600 hover:opacity-80 font-bold text-sm focus:outline-none rounded-sm"
    @click="$emit('click')"
  >
    <PlusIcon class="my-1 mx-auto w-2/3 h-2/3" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import PlusIcon from '~/components/icons/PlusIcon.vue'
export default Vue.extend({
  components: {
    PlusIcon
  },
  data() {
    return {
      isHovered: false
    }
  }
})
</script>
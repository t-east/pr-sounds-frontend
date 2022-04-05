<template>
  <div
    class="my-1"
    @mouseover="$data.isHovered = true"
    @mouseleave="$data.isHovered = false"
  >
    <p v-if="!$data.isHovered" class="text-lg">{{ $props.day }}</p>
    <AtomAddButton v-if="$data.isHovered" @click="$emit('create', $props.day)" />
  </div>     
</template>

<script lang="ts">
import Vue from 'vue';
import AtomAddButton from "~/components/atoms/event/AtomAddButton.vue"

export default Vue.extend({
  components: {
    AtomAddButton
  },
  props: {
    day: { type: [String,Number], required: true}
  },
  data() {
    return {
      isHovered: false
    }
  }
})
</script>
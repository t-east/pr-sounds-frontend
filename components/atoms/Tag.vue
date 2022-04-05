<template>
  <div class="flex p-1 rounded-lg" :style="dynamicStyle">
      <p class="mr-1">{{ $props.tag.label }}</p>
      <div
        class="cursor-pointer"
        @click="$emit('delete',$props.tag.id)"
      >
        <CloseIcon @click="deleteTag" />
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { EventTag } from "~/interfaces/tag"

import CloseIcon from '~/components/icons/CloseIcon.vue';
export default Vue.extend({
  components: {
		CloseIcon
  },
  computed : {
    dynamicStyle(): object {
      return {
        backgroundColor : this.$props.tag.color
      };
    },
  },
  props: {
    tag: { type: Object as Vue.PropType<EventTag>, required: true }
  },
})
</script>
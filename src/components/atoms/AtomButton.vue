<template>
  <button
    :class="{
      'bg-red-600 text-white border border-red-600 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isRed,
      'bg-col_13 text-white border border-col_13 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isPurple,
      'bg-indigo-500 text-white border border-indigo-500 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isIndigo,
      'bg-white text-gray-800 border border-gray-300 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isWhite,
      'bg-gray-400 text-white border border-gray-400 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isGray,
      'bg-red-400 text-white border border-red-400 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isPink,
      'bg-gray-200 text-gray-600 border border-gray-200 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isLightGray,
      'bg-blue-500 text-white border border-blue-500 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isBlue,
      'bg-col_04 text-col_09 border border-col_05 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol04,
      'bg-col_12 text-gray-600 border border-col_12 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol12,
      'bg-col_13 text-white border border-col_13 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol13,
      'bg-white text-col_13 border border-col_13 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol13Line,
      'bg-col_14 text-white border border-col_14 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol14,
      'bg-col_18 text-white border border-col_18 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol18,
      'bg-col_19 text-white border border-col_19 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol19,
      'bg-white text-col_19 border border-col_19 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol19Line,
      'bg-col_21 text-white border border-col_21 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol21,
      'bg-col_28 text-white border border-col_28 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol28,
      'bg-white text-col_28 border border-col_28 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol28Line,
      'bg-col_29 text-white border border-col_29 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol29,
      'bg-col_30 text-white border border-col_30 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol30,
      'bg-col_34 text-white border border-col_34 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol34,
      'bg-white text-col_34 border border-col_34 hover:opacity-80 shadow-sm hover:shadow-md': !$props.disabled && isCol34Line,
      'bg-col_07 text-white border border-col_07 cursor-not-allowed': $props.disabled,
    }"
    class="text-sm focus:outline-none px-3 py-2 rounded"
    :disabled="$props.disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: { type: String, required: false, default: 'white' },
    disabled: { type: Boolean, required: false, default: false }
  },
  computed: {
    isRed (): boolean {
      return this.$props.color === 'red'
    },
    isPurple (): boolean {
      return this.$props.color === 'purple'
    },
    isIndigo (): boolean {
      return this.$props.color === 'indigo'
    },
    isWhite (): boolean {
      return this.$props.color === 'white'
    },
    isGray (): boolean {
      return this.$props.color === 'gray'
    },
    isPink (): boolean {
      return this.$props.color === 'pink'
    },
    isLightGray (): boolean {
      return this.$props.color === 'light_gray'
    },
    isBlue (): boolean {
      return this.$props.color === 'blue'
    },
    isCol04 (): boolean {
      return this.$props.color === 'col_04'
    },
    isCol12 (): boolean {
      return this.$props.color === 'col_12'
    },
    isCol13 (): boolean {
      return this.$props.color === 'col_13'
    },
    isCol13Line (): boolean {
      return this.$props.color === 'col_13_line'
    },
    isCol14 (): boolean {
      return this.$props.color === 'col_14'
    },
    isCol18 (): boolean {
      return this.$props.color === 'col_18'
    },
    isCol19 (): boolean {
      return this.$props.color === 'col_19'
    },
    isCol19Line (): boolean {
      return this.$props.color === 'col_19_line'
    },
    isCol21 (): boolean {
      return this.$props.color === 'col_21'
    },
    isCol28 (): boolean {
      return this.$props.color === 'col_28'
    },
    isCol28Line (): boolean {
      return this.$props.color === 'col_28_line'
    },
    isCol29 (): boolean {
      return this.$props.color === 'col_29'
    },
    isCol30 (): boolean {
      return this.$props.color === 'col_30'
    },
    isCol34 (): boolean {
      return this.$props.color === 'col_34'
    },
    isCol34Line (): boolean {
      return this.$props.color === 'col_34_line'
    }
  }
})
</script>

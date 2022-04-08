<template>
  <input
    ref="input"
    class="rounded px-1 py-1 w-full"
    :placeholder="$props.placeholder"
    :disabled="$props.disabled"
    :value="$props.value"
    :type="$props.type"
    :step="$props.step"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
    @keydown.enter="$emit('on-enter')"
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    disabled: { type: Boolean, required: false, default: false },
    step: { type: Number, required: false, default: 1 },
    value: { type: [String,Date], required: false, default: null },
    placeholder: { type: String, required: false, default: '' },
    type: { type: String, required: false, default: '' },
  },
  methods: {
    focus (): void {
      const input: any = this.$refs.input
      input.focus()
    }
  }
})
</script>
<template>
  <textarea
    ref="area"
    :value="$props.value"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: { type: String, required: false, default: '' },
    placeholder: { type: String, required: false },
    rows: { type: Number, required: false },
    cols: { type: Number, required: false }
  },
  watch: {
    textareaVal() {
      this.adjustHeight();
    }
  },
  methods: {
    adjustHeight() {
      const textarea: any = this.$refs.area;
      const resetHeight = new Promise(function(resolve) {
        resolve(textarea.style.height = 'auto')
      });
      resetHeight.then(function(){
        textarea.style.height = textarea.scrollHeight + 'px'
      });
    },
    update(text:string) {
      this.$emit('input', text)
    }
  }
})
</script>
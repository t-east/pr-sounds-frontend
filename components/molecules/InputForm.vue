<template>
    <div>
      <AtomInputLabel
        class="mb-2"
        :label="$props.label"
      />
      <AtomInput
        class="mb-2"
        :value="$props.value"
        :type="$props.type"
        @input="$emit('input', $event)"
        :placeholder="$props.placeholder"
      />
      <AtomInputMessage
        :msg="$props.msg"
      />       
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AtomButton from '~/components/atoms/AtomButton.vue'
import AtomInput from '~/components/atoms/AtomInput.vue'
import AtomInputLabel from '~/components/atoms/AtomInputLabel.vue'
import AtomInputMessage from '~/components/atoms/AtomInputMessage.vue'
export default Vue.extend({
  components: {
    AtomButton,
    AtomInput,
    AtomInputLabel,
    AtomInputMessage
  },
  props: {
    value: { type: String, required: false, default: '' },
    placeholder: { type: String, required: false, default: '' },
    label: { type: String, required: false, default: '' },
    msg: { type: String, required: false, default: '' },
    type: { type: String, required: false, default: '' }
  },

})
</script>
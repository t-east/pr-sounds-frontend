
<template>
<div>
  <div
    @click="$data.isNewTagActive=true"
  >
    <NewTag v-if="!$data.isNewTagActive" />
  </div>
  <div v-if="$data.isNewTagActive" class="flex justify-center">
    <div class="border border-dotted border-black text-black rounded-lg">
      <AtomInput
      v-model="$data.newTag"
      @blur="cancelCreateTag"
      @on-enter="addTag"
      />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

import CloseIcon from '~/components/icons/CloseIcon.vue';
import AtomLabel from '~/components/atoms/AtomLabel.vue';
import AtomButton from '~/components/atoms/AtomButton.vue';
import AtomInput from '~/components/atoms/AtomInput.vue'
import AtomInputLabel from '~/components/atoms/AtomInputLabel.vue'
import AtomInputMessage from '~/components/atoms/AtomInputMessage.vue'
import BaseModal from '~/components/molecules/user/modal/BaseModal.vue'
import NewTag from '~/components/atoms/NewTag.vue'
export default Vue.extend({
  components: {
    BaseModal,
    CloseIcon,
    AtomLabel,
    AtomButton,
    AtomInput,
    AtomInputLabel,
    AtomInputMessage,
    NewTag
  },
  props: {
  },
  data() {
    return {
      newTag: '',
      isNewTagActive: false
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    addTag() {
      // TODO tagを作成するPOSt
      this.$emit('add-tag',this.$data.newTag)
      this.$data.newTag=''
      this.$data.isNewTagActive=false
    },
    cancelCreateTag() {
      this.$data.newTag=''
      this.$data.isNewTagActive=false
    }
  }

})
</script> 
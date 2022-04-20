<template>
  <div class="px-12">
    <div class="my-2">
      <h>AtomButton</h>
      <AtomButton>aa</AtomButton>
    </div>
    <div class="my-2">
      <h>AtomButton</h>
      <AtomButton color="red">
        red
      </AtomButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AtomButton from '~/components/atoms/AtomButton.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    AtomButton
  }
})
</script>

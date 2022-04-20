<template>
  <div class="flex justify-center">
    <div class="py-16 px-24">
      <div class="my-8">
        <h1 class="text-4xl font-bold my-2">
          Atoms
        </h1>
        <div class="my-2">
          <h1>AtomButton</h1>
          <AtomButton>button</AtomButton>
        </div>
        <div class="my-2">
          <h1 class="text-red-600">
            AtomButton
          </h1>
          <AtomButton color="red">
            red
          </AtomButton>
        </div>
      </div>
      <div class="my-8">
        <h1 class="text-4xl font-bold my-2">
          Molecules
        </h1>
      </div>
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

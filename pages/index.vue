<template>
  <div>
    <div class="full bg-wheat">
      <div class="py-96 flex justify-center">
        <div>
          <h1 class="mb-4 text-8xl">Calendar App</h1>
          <div class="flex justify-center">
            <!-- <AtomButton
              val=""
              class="mr-4"
              @click="$data.isRegisterModalActive=true"
            /> -->
            <AtomButton
              val="ユーザ登録"
              class="mr-4 text-lg"
              @click="$data.isRegisterModalActive=true"
            />
          </div>
        </div>
      </div>
    </div>
    <RegisterModal
      v-if="$data.isRegisterModalActive"
      @close="$data.isRegisterModalActive=false"
      @register="register"
    />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import InputForm from '~/components/molecules/InputForm.vue'
import AtomButton from '~/components/atoms/AtomButton.vue'
import RegisterModal from '~/components/organism/RegisterModal.vue'
export default Vue.extend({
  layout: 'welcome',
  components: {
    AtomButton,
    InputForm,
    RegisterModal
  },
  data() {
    return {
      isRegisterModalActive: false
    }
  },
  methods: {
    register(user_id: number) {
      this.$data.isRegisterModalActive=false
      console.log(`/event/${user_id}`)
      this.$router.push(`/event/${user_id}`)
    }
  }

})
</script>

<style>
  .full {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

</style>
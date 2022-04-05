
<template>
    <div @click.self="$emit('close')">
      <div class="fixed top-16 right-4 bg-wheat shadow-lg w-auto">
        <div>
          <div
            class="w-full flex text-left px-8 py-4 cursor-pointer text-moca hover:opacity-20 border-b border-opacity-20 border-white"
            @click="$emit('close'); $router.push('/')"
          >
            マイページ
          </div>
          <div
            class="w-full flex text-left px-8 py-4 cursor-pointer text-moca hover:opacity-20 border-b border-opacity-20 border-white"
            @click="$emit('close'); $router.push('/event')"
          >
            スケジュール
          </div>
        </div>
        <div
          class="w-full flex text-left px-8 py-4 cursor-pointer text-moca hover:opacity-20"
          @click="$emit('logout')"
        >
          ログアウト
        </div>
      </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import UserMenuItem from '~/components/atoms/user/UserMenuItem.vue'
import BaseModal from '~/components/molecules/user/modal/BaseModal.vue'
export default Vue.extend({
  components: {
    UserMenuItem,
    BaseModal,
  }

})
</script> 
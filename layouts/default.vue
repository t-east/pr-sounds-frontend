<template>
  <div class="font-family">
    <header class="fixed w-full top-0 flex items-center bg-wheat flex-wrap z-50">
      <div class="flex-1 ml-4 my-4">
        <NuxtLink to="/" class="text-col_14 text-moca font-bold text-xl">
          Calendar App
        </NuxtLink>
      </div>
      <div class="inline-flex pr-4 md:pr-8">
        <div class="inline-flex cursor-pointer text-white " @click="$data.isUserMenuActive=!$data.isUserMenuActive">
          <div class="hidden md:inline-flex md:w-auto">
            ユーザ名
          </div>
					<ChevronDownIcon />
        </div>
      </div>
    </header>
    <div class="flex">
			<UserMenuModal
			  v-if="$data.isUserMenuActive"
				class="absolute"
				@close="$data.isUserMenuActive=false"
			/>
      <Nuxt class="mt-16" />
    </div>
    <footer class="bg-wheat pt-8">
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import UserMenuModal from '~/components/molecules/user/modal/UserMenuModal.vue'
import ChevronDownIcon from '~/components/icons/ChevronDownIcon.vue'
export default Vue.extend({
  components: {
		UserMenuModal,
		ChevronDownIcon
  },
  data() {
    return {
      isUserMenuActive: false,
    };
  },
});
</script>

<style scoped>
</style>

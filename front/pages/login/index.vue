<template>
    <div>
      <div class="flex justify-center">
        <div class="my-12 py-8 px-16 rounded-lg bg-gray-100 w-1/2 shadow-2xl border">
            <h1 class="text-2xl font-bold mb-8 text-wheat-600">
                ユーザ登録
            </h1>
            <div>
              <InputForm
                label="ユーザ名"
                placeholder="◎◎文字以内で入力してください"
                msg="注意書きです！！！！！！！！！！！！！！！！！！！！！！"
                class="mb-4"
              />
              <InputForm
                label="asdf"
                placeholder="◎◎文字以内で入力してください"
                class="mb-4"
              />
              <InputForm
                label="asdf"
                placeholder="◎◎文字以内で入力してください"
                msg="注意書きです！！！！！！！！！！！！！！！！！！！！！！"
                class="mb-4"
              />
              <InputForm
                label="asdf"
                placeholder="◎◎文字以内で入力してください"
                msg="注意書きです！！！！！！！！！！！！！！！！！！！！！！"
                class="mb-4"
              />
              <AtomButton
                val="送信"
              />
            </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputForm from '~/components/molecules/InputForm.vue'
import AtomButton from '~/components/atoms/AtomButton.vue'
export default Vue.extend({
  components: {
    AtomButton,
    InputForm
  }

})
</script>
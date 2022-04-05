<template>
    <BaseModal size="3/5" class="py-auto">
      <div class="flex justify-end">
        <div
          class="cursor-pointer"
          @click="$emit('close')"
        >
          <CloseIcon />
        </div>
      </div>
      <p class="flex justify-center text-2xl font-bold mb-4 text-wheat-600">
          ユーザ登録
      </p>
      <div class="px-4">
        <InputForm
          v-model="$data.user.user_name"
          label="ユーザネーム"
          placeholder="Taro"
          msg=""
          class="mb-2"
        />
        <InputForm
          v-model="$data.user.email"
          label="メールアドレス"
          placeholder="xxx@xxxx.com"
          type="email"
          class="mb-2"
        />
        <InputForm
          v-model="$data.user.password"
          label="パスワード"
          placeholder="8文字以上で入力してください"
          msg=""
          type="password"
          class="mb-2"
        />
        <InputForm
          v-model="$data.password_confirm"
          label="パスワード確認"
          placeholder="◎◎文字以内で入力してください"
          msg=""
          type="password"
          class="mb-2"
        />
        <div class="flex justify-center">
          <AtomButton
            val="送信"
            @click="register"
          />
        </div>
        <div v-for="(err, i) in $data.errMsg" :key="i">
          <div class="text-red-600">{{ err }}</div>
        </div>
      </div>
    </BaseModal>
</template>

<script lang="ts">
import Vue from 'vue'
import {RegisteredUser, User} from '~/interfaces/user'
import InputForm from '~/components/molecules/InputForm.vue'
import CloseIcon from '~/components/icons/CloseIcon.vue';
import AtomButton from '~/components/atoms/AtomButton.vue'
import BaseModal from '~/components/organism/modals/BaseModal.vue'
export default Vue.extend({
  components: {
    AtomButton,
    InputForm,
    BaseModal,
    CloseIcon
  },
  data() {
    return {
      user: {
        user_name: '',
        email: '',
        password: ''
      } as User,
      password_confirm: '',
      errMsg: []
    }
  },
  methods: {
    validate(): boolean {
      let isValid: boolean = true
      this.$data.errMsg = []
      if (this.$data.user.user_name === "" || this.$data.user.email === "" || this.$data.user.password === "") {
        this.$data.errMsg.push("フォームを記入してください")
        isValid = false
      }
      if (this.$data.user.password !== this.$data.password_confirm) {
        this.$data.errMsg.push("パスワードが一致していません")
        isValid = false
      }
      return isValid
    },
    async register(): Promise<void> {
      if (this.validate()) {
        await this.$axios.$post('api/user/', this.$data.user)
          .then((res: RegisteredUser) => {
            this.$store.commit('user/register', res)
            const user_id = this.$store.state.user.user.user_id
            console.log(user_id)
            this.$emit('register', user_id)
          })
          .catch((error: Error) => {
            console.error(error);
          });
      }
    }
  }

})
</script>
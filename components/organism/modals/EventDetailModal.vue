<template>
    <BaseModal size="5/6">
      <div class="flex justify-end">
        <div
          class="cursor-pointer mr-4"
          @click="deleteEvent"
        >
          <TrashIcon />
        </div>
        <div
          class="cursor-pointer"
          @click="$emit('close')"
        >
          <CloseIcon />
        </div>
      </div>
      <div class="flex justify-between">
        <AtomInput
          v-model="$data.event.title"
          class="text-2xl w-1/2 font-bold mb-4"
          placeholder="タイトル"
          type="text"
        />
      </div>
      <div class="flex">
        <TagIcon class="mx-2" />
        <p>タグ</p>
      </div>
        <EventTags
          :event-id="$props.eventId"
          class="mb-4"
        />
        <div class="flex">
          <ClockIcon class="mx-2" />
          <p>時間</p>
        </div>
        <div class="flex">
        <div class="mr-2">
          <AtomInput
            v-model="$data.event.from_date"
            type="datetime-local"
            :value="60"
            class="w-2/3"
          />
        </div>
        <div class="flex">
        </div>
      </div>
      <div class="flex">
        <div class="mr-2">
          <AtomInput
            v-model="$data.event.to_date"
            type="datetime-local"
            :value="60"
          />
        </div>
        <div class="flex">
        </div>
      </div>
      <div class="text-red-600 mb-4">{{ $data.dateErrMsg }}</div>
      <div class="flex">
          <LinkIcon class="mx-2" />
          <p>URL</p>
        </div>
      <div>
        <AtomInput
          v-model="$data.event.url"
          class="text-lg mb-4 border-gray-400"
          placeholder="http://xxxx.xxx.xx.com"
          type="url"
          :is-for-name="true"
        />
        <div class="border my-2 border-gray-500 w-full" />
        <AtomTextArea
          v-model="$data.event.description_text"
          class="text-md w-full"
          placeholder="詳細"
        />
        <div class="flex justify-center">
          <AtomButton
            val="キャンセル"
            class="mr-4"
            @click="$emit('close')"
          />
          <AtomButton
            val="更新"
            class="mr-4"
            @click="updateEvent"
          />
        </div>
      </div>
    </BaseModal>
</template>

<script lang="ts">
import Vue from 'vue'

import {Event, CreatedEvent} from "~/interfaces/event"

import CloseIcon from '~/components/icons/CloseIcon.vue';
import TrashIcon from '~/components/icons/TrashIcon.vue';
import LinkIcon from '~/components/icons/LinkIcon.vue';
import TagIcon from '~/components/icons/TagIcon.vue';
import ClockIcon from '~/components/icons/ClockIcon.vue';
import AtomLabel from '~/components/atoms/AtomLabel.vue';
import AtomButton from '~/components/atoms/AtomButton.vue';
import AtomInput from '~/components/atoms/AtomInput.vue'
import AtomTextArea from '~/components/atoms/AtomTextArea.vue'
import AtomInputLabel from '~/components/atoms/AtomInputLabel.vue'
import AtomInputMessage from '~/components/atoms/AtomInputMessage.vue'
import AtomCheckbox from '~/components/atoms/AtomCheckbox.vue';
import ViewForm from '~/components/molecules/ViewForm.vue';
import EventTags from '~/components/molecules/events/EventTags.vue';
import BaseModal from '~/components/organism/modals/BaseModal.vue'
import NewTagModal from '~/components/molecules/user/modal/NewTagModal.vue'
export default Vue.extend({
  components: {
    BaseModal,
    CloseIcon,
    AtomLabel,
    TrashIcon,
    TagIcon,
    LinkIcon,
    ClockIcon,
    ViewForm,
    AtomButton,
    AtomCheckbox,
    AtomInput,
    AtomInputLabel,
    AtomInputMessage,
    EventTags,
    NewTagModal,
    AtomTextArea
  },
  props: {
    eventId: { type: Number, required: true }
  },
  data() {
    return {
      event: {
        title: '',
        description_text: '',
        url: '',
        from_date: new Date(),
        to_date: new Date(),
        is_all_day: false,
        tags: []
      } as Event,
      isCreateTagModalActive: false,
      dateErrMsg: ''
    }
  },
  watch: {
    eventId () {
      this.getEvent()
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    getEvent (): Promise<void> {
      return this.$axios.$get(`/api/event/${this.$route.params.id}/${this.$props.eventId}`)
        .then((res: CreatedEvent) => {
          this.$data.event = res
        })
        .catch(() => {
        })
    },
    updateEvent (): Promise<void> {
      return this.$axios.$put(`/api/event/${this.$route.params.id}/${this.$props.eventId}`, this.$data.event)
        .then((res: CreatedEvent) => {
          this.$data.dateErrMsg = ''
          this.$emit('close')
        })
        .catch((error:Error) => {
          console.log(error.message)
          this.$data.dateErrMsg = '日付の指定に誤りがあります'
        });
    },
    deleteEvent() {
      this.$axios.$delete(`/api/event/${this.$route.params.id}/${this.$props.eventId}`, this.$data.event)
        .then(() => {
          this.$emit('close')
        })
        .catch(() => {
        })
		}
  }
})
</script> 

<style>
textarea:focus {
    outline: none;
}
</style>
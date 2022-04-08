<template>
  <div class="w-full">
    <div class="flex">
      <div class="p-4" :class="{'w-2/3': $data.isCalendarShow}">
        <Calendar
          v-if="$data.isCalendarShow"
          :events="$data.events"
          @detail="selectEvent"
        />
      </div>
      <div class="p-4" :class="{'w-1/3': $data.isCalendarShow}">
        <EventList
          v-if="$data.isListShow"
          :events="$data.events"
          @detail="selectEvent"
        />
      </div>
    </div>
    <EventDetailModal v-if="$data.isDetailModalActive" :input-event="$data.selectedEvent" @close="$data.isDetailModalActive=false" />
    <EventSelectView class="my-12" @select-view="selectView" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AtomButton from '~/components/atoms/AtomButton.vue';
import Calendar from '~/components/organism/events/Calendar.vue';
import EventList from '~/components/organism/events/EventList.vue';
import EventDetailModal from '~/components/organism/modals/EventDetailModal.vue';
import EventSelectView from "~/components/molecules/events/EventSelectView.vue"

export default Vue.extend({
  components: {
    AtomButton,
    Calendar,
    EventList,
    EventDetailModal,
    EventSelectView
  },
  data() {
    return {
      isCalendarShow: true,
      isListShow: true,
      events: [
        {
          title: '予定1',
          date: {
            fromDate: new Date(2022,2,18, 1, 14),
            toDate: new Date(2022,2,18, 1,30),
            hasRange: false,
            isAllday: false
          },
          tags: [
            {
              id: 1,
              label: 'タグ1'
            },
            {
              id: 2,
              label: 'タグ2'
            },
            {
              id: 3,
              label: 'タグ3'
            }
          ]
        },
        {
          title: '予定2',
          date: {
            fromDate: new Date(2022,2,18, 4, 24),
            toDate: new Date(2022,2,18, 1,30),
            hasRange: true,
            isAllday: false
          },
          tags: [
            {
              id: 1,
              label: 'タグ1'
            },
            {
              id: 2,
              label: 'タグ2'
            },
            {
              id: 3,
              label: 'タグ3'
            }
          ]
        },
      ],
      isDetailModalActive: false,
      selectedEvent: {}
    };
  },
  methods: {
    selectEvent(event: Event) {
      this.$data.isDetailModalActive=true;
      this.$data.selectedEvent=event;
    } ,
    selectView(viewId: number) {
      this.$data.isCalendarShow =false
      this.$data.isListShow =false
      if (viewId === 1) {
        this.$data.isCalendarShow = true
      } else if (viewId === 2) {
        this.$data.isCalendarShow = true
        this.$data.isListShow = true
      } else {
        this.$data.isListShow = true
      }
    }
  }
});
</script>

<style scoped>
  .error {
    border: 1px solid rgba(248, 113, 113, var(--tw-text-opacity));
  }
</style>

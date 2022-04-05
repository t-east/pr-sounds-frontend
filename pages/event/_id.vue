<template>
  <div class="w-full">
    <div class="flex">
      <div class="p-4" :class="{'w-2/3': $data.isCalendarShow}">
        <Calendar
          v-if="$data.isCalendarShow"
          :events="$data.eventList.events"
          @detail="selectEvent"
          @create="createEvent"
        />
      </div>
      <div class="p-4" :class="{'w-1/3': $data.isCalendarShow}">
        <EventList
          v-if="$data.isListShow"
          :events="$data.eventList.events"
          @detail="selectEvent"
        />
      </div>
    </div>
    <EventDetailModal
      v-if="$data.isDetailModalActive"
      :event-id="$data.selectedEvent.event_id"
      @close="closeDetalModal"
      @input="updateEvent"
    />
    <EventSelectView class="my-12" @select-view="selectView" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Events, CreatedEvent} from '~/interfaces/event'

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
      eventList: {} as Events,
      isDetailModalActive: false,
      selectedEvent: {} as CreatedEvent
    };
  },
  mounted() {
    this.getEvent()
  },
  methods: {
    selectEvent(event: Event) {
      this.$data.selectedEvent=event;
      this.$data.isDetailModalActive=true;
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
    },
    getEvent() {
      this.$axios.$get(`api/event/${this.$route.params.id}`)
        .then((res: Events) => {
          this.$data.eventList = res;
        })
        .catch((error: Error) => {
          console.error(error);
        });
    },
    createEvent(year:number, month:number, day:number) {
      console.log(this.$data.event)
      this.$axios.$post(`/api/event/`, {
        title: '無題',
        description_text: '',
        to_date: new Date(year, month, day, 9, 0),
        from_date: new Date(year, month, day, 9, 0),
        is_all_day: false,
        user_id: this.$route.params.id
      })
        .then((res: CreatedEvent) => {
          this.$data.selectedEvent=res;
          this.$data.isDetailModalActive=true;
        })
        .catch(() => {
        })
    },
    closeDetalModal() {
      this.$data.isDetailModalActive=false
      this.getEvent()
    }
  }
});
</script>

<style scoped>
  .error {
    border: 1px solid rgba(248, 113, 113, var(--tw-text-opacity));
  }
</style>

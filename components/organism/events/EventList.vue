<template>
  <div class="w-full p-4 border-2 shadow">
    <div v-for="(event, i) in $props.events" :key="i">
      <div class="cursor-pointer" @click="$emit('detail', event)">
        <EventItem :event="event" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {Event} from "~/interfaces/event"

import ChevronLeftIcon from "~/components/icons/ChevronLeftIcon.vue"
import ChevronRightIcon from "~/components/icons/ChevronRightIcon.vue"
import EventItem from "~/components/molecules/events/EventItem.vue"

export default Vue.extend({
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    EventItem
  },
  props: {
    events: { type: Array as Vue.PropType<Event[]>, required: false, default: []}
  },
  data() {
    return {
    };
  },
  methods: {
  }
});
</script>

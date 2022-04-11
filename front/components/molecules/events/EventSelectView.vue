<template>
    <div class="fixed right-2 bottom-0 flex border-4 border-black justify-between">
      <div @click="$emit('select-view', 1)" class="cursor-pointer my-2 mx-4 p-4">
        <CalendarIcon :height="8" :width="8" />
      </div>
      <div @click="$emit('select-view', 2)" class="cursor-pointer my-2 mx-4 p-4 flex">
        <CalendarIcon :height="8" :width="4"/>
        <EventListIcon :height="8" :width="4"/>
      </div>
      <div @click="$emit('select-view', 3)" class="cursor-pointer my-2 mx-4 p-4">
        <EventListIcon :height="8" :width="8"/>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CalendarIcon from "~/components/icons/CalendarIcon.vue"
import EventListIcon from "~/components/icons/EventListIcon.vue"

export default Vue.extend({
  components: {
    CalendarIcon,
    EventListIcon
  },
  methods: {
  }

})
</script>
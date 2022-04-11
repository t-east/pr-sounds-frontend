<template>
    <div class="flex border-4 rounded-lg m-4 py-2 px-8 justify-between">
      <div class="text-xl font-bold mr-8">{{ event.title}}</div>
      <div>{{ eventDate }}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Event } from '~/interfaces/event';

export default Vue.extend({
  components: {
  },
  props: {
    event: { type: Object as Vue.PropType<Event>, required: false, default: {} as Event }
  },
  computed: {
    eventDate():string{
      const date = new Date(this.$props.event.from_date);
      if (this.$props.event.from_date !== null){
        return date.getFullYear().toString() + '/' + (date.getMonth()+1).toString() + '/' + date.getDate().toString();
      } else {return ''}
    }
  },
  methods: {
  }

})
</script>
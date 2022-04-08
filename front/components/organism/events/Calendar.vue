<template>
  <div class="w-full p-4 border-2 shadow">
    <div class="flex justify-between">
      <div
        class="mx-16"
        @click="prevMonth"
      >
          <ChevronLeftIcon
            class="text-2xl"
          />
      </div>
      <div>
        <div>
          <span class="font-bold text-xl">{{ $data.year }}</span>
          <span class="text-xs">年</span>
        </div>
        <div class="w-full mb-4 text-center">
          <span class="font-bold text-xl">{{ $data.month }}</span>
          <span class="text-xs">月</span>
        </div>
      </div>
      <div
        class="mx-16"
        @click="nextMonth"
      >
          <ChevronRightIcon
            class="text-2xl"
          />
      </div>
    </div>
    <div class="grid w-full grid-cols-7 mt-3 text-center">
      <div v-for="(text, i) in $data.dayOfWeek" :key="i">
        <span :class="{'text-gray-400': text === '日' || text === '土'}" class="font-bold">{{ text }}</span>
      </div>
    </div>
    <div v-for="(week, j) in calendars" :key="j" class="grid grid-cols-7 w-full mx-1 my-3 text-center">
      <div v-for="(day, k) in week" :key="k" @click="selectedDay(day.date)" class="h-32">
        <div
          class="m-auto p-auto w-full rounded cursor-pointer"
        >
          <CalendarDate :day="day.day" @create="createEvent" />
          <div v-for="(event, i) in putEvent($data.year, $data.month, day.day)" :key="i">
            <div class="p-1 my-1 text-black bg-wheat" @click="$emit('detail', event)">
              {{event.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {Event, CreatedEvent} from "~/interfaces/event"
import AtomAddButton from "~/components/atoms/event/AtomAddButton.vue"
import CalendarDate from "~/components/molecules/events/CalendarDate.vue"

import ChevronLeftIcon from "~/components/icons/ChevronLeftIcon.vue"
import ChevronRightIcon from "~/components/icons/ChevronRightIcon.vue"

export default Vue.extend({
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    AtomAddButton,
    CalendarDate
  },
  props: {
    events: { type: Array as Vue.PropType<CreatedEvent[]>, required: false, default: []}
  },
  data() {
    return {
      selectedDate: new Date(),
      dayOfWeek: ['月', '火', '水', '木', '金', '土', '日'],
      currentDate: new Date(),
      year: 0,
      month: 0
    };
  },
  computed: {
    calendars():any[] {
      return this.getCalendar(this.$data.year, this.$data.month);
    }
  },
  mounted() {
    this.$data.currentDate = new Date(
      this.$data.selectedDate.getFullYear(),
      this.$data.selectedDate.getMonth()
    );
    this.$data.year = this.$data.selectedDate.getFullYear();
    this.$data.month = this.$data.selectedDate.getMonth() + 1;
  },
  methods: {
    getCalendar(year:number, month:number):any[] {
      const startDate:any = new Date(year, month - 1, 1);
      const endDate:any = new Date(year, month, 0);
      const endDayCount:any = endDate.getDate();
      const startDay:number = startDate.getDay();
      const lastMonthEndDate:any = new Date(year, month - 1, 0);
      const lastMonthendDayCount:any = lastMonthEndDate.getDate();
      const calendar:any[] = [];
      let dayCount = 1;
      for (let week = 0; week < 6; week++) {
        const weekRow:object[] = [];
        for (let day = 0; day < 7; day++) {
          if (week === 0 && day < startDay - 1) {
            const num:number = lastMonthendDayCount - startDay + day + 2;
            weekRow.push({ date: '', month: null, day: num });
          } else if (dayCount > endDayCount) {
            weekRow.push({ date: '', month: null, day: '' });
          } else {
            const dateOfMonth:any = new Date(year, month - 1, dayCount);
            weekRow.push({
              date: dateOfMonth,
              month: dateOfMonth.getMonth() + 1,
              day: dateOfMonth.getDate()
            });
            dayCount++;
          }
        }
        calendar.push(weekRow);
      }
      return calendar;
    },
    nextMonth():void {
      this.$data.currentDate.setMonth(this.$data.currentDate.getMonth() + 1);
      this.$data.year = this.$data.currentDate.getFullYear();
      this.$data.month = this.$data.currentDate.getMonth() + 1;
    },
    prevMonth():void {
      this.$data.currentDate.setMonth(this.$data.currentDate.getMonth() - 1);
      this.$data.year = this.$data.currentDate.getFullYear();
      this.$data.month = this.$data.currentDate.getMonth() + 1;
    },
    putEvent(year:number, month:number, date:number):any {
      const event:Event[] = this.$props.events.filter(
        (e:Event) => 
        new Date(e.from_date).getFullYear() == year &&
        new Date(e.from_date).getMonth()+1 == month &&
        new Date(e.from_date).getDate() == date
      );
      if (event.length) {
        return event
      }
      return;
    },
    selectedDay(date:any):void {
      this.$emit('click', date);
    },
    createEvent(day: number):void {
      this.$emit('create', this.$data.year, this.$data.month-1, day)
    }
  }
});
</script>

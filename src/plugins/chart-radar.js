import Vue from 'vue'
import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('RadarChart', {
  extends: Radar,
  mixins: [Radar, reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})

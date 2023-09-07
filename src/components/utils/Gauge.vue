<template>
  <div id="gauge">
    <div class="image-detail">
      <canvas
        :id="this._uid"
        class="image-detail-canvas"
      ></canvas>
    </div>
    <div id="inner">
      <span>{{ title }}: </span>
      <span :id="this.gaugeValueID"></span>
      /
      <span :id="this.targetEL">{{ target.toLocaleString() }}</span>
    </div>
  </div>
</template>

<script>
import *  as gaugeJS from 'gaugeJS';

export default {
  name: 'gauge',
  data () {
    return {
      gauge: null,
      label: null,
      gaugeValueID: 'gval' + this._uid,
      targetEL: 'gval' + this._uid
    }
  },
  props: {
    colour: String,
    title: String,
    current: Number,
    target: Number,
  },
  mounted () {
    this.initGauge(this.current, this.colour)
  },
  methods: {
    initGauge: function (current, colour) {
      var opts = this.getOpts(colour)

      var el = document.getElementById(this._uid); // your canvas element
      this.gauge = new gaugeJS.Donut(el).setOptions(opts); // create sexy gauge!
      this.gauge.maxValue = this.target; // set max gauge value
      this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
      this.gauge.animationSpeed = 32; // set animation speed (32 is default value)
      this.gauge.set(0); // set actual value
      el.title = this.title + ": " + this.gauge.value;
      this.gauge.setTextField(document.getElementById(this.gaugeValueID));
      this.gauge.set(current);
    },
    getOpts: function (colour) {
      return {
        angle: 0.35, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: 1, // Relative radius
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: colour,   // Colors
        colorStop: colour,    // just experiment with them
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
          font: "30px sans-serif",  // Specifies font
          labels: [1250, 130, 150, 220.1, 260, 300],  // Print labels at these values
          color: "#000000",  // Optional: Label text color
          fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        }
      }
    }
  },
  watch: {
    current: function (current) {
      this.gauge.set(current);
      this.gauge.setTextField(document.getElementById(this.gaugeValueID));

      var target = document.getElementById(this._uid); // your canvas element
      target.title = this.title + ": " + current;
    },
    target: function (target) {
      this.gauge.maxValue = target;
    },
    colour: function (colour) {
      this.initGauge(this.current, colour)
    }
  }
}
</script>

<style>
#inner {
  display: table;
  margin: 0 auto;
}

.image-detail {
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
}
canvas {
  display: block;
}
.image-detail-canvas {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -0%);
}
</style>
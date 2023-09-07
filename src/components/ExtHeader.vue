<template>
  <div
    id="ext-header"
  >
    <div class="header">
      <font-awesome-icon icon="chart-bar"></font-awesome-icon> | {{ extensionName }}
      <template v-if="page">
        | {{ page }}
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ext-header',
  props: {
    bkgColour: String,
    fontColour: String,
    page: String
  },
  computed: {},
  data () {
    return {
      extensionName: 'Stat-Milestones',
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  text-align: left;
  color: v-bind(fontColour);
  font-size: 20px;
  padding: 10px;
  background-color: v-bind(bkgColour);
}
</style>
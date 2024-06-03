<template>
  <div id="panel" :style="style">
        <BToastOrchestrator />
    <div class="custom">
      <BNavbar toggleable="lg">
        <BNavbarBrand :style="{ color: appFontColour }">
          <font-awesome-icon icon="chart-bar" /> | Stat-Milestones-Playground
        </BNavbarBrand>
      </BNavbar>
    </div>

    <BContainer class="bv-example-row" fluid>
      <BRow>
        <BCol>
          <div>
            <CustomMetric
              :title="title"
              :description="description"
              :target="parseInt(target)"
              :count="parseInt(count)"
              :gauge_colour="gauge_colour"
              :displaySubButton="displaySubButton"
              :displayFollowButton="displayFollowButton"
              :buttonTxtColour="appFontColour"
              :buttonBkgColour="backgroundColour"
              :channelName="channelName"
            /></div
        ></BCol>
        <BCol>
          <BContainer class="text-center" fluid>
            <BCard header-tag="header" style="color: black">
              <template #header>
                <h1 style="color: black">Configuration Options:</h1></template
              >
              <BListGroup flush>
                <BListGroupItem>
                  <BInputGroup prepend="Twitch Username">
                    <BFormInput v-model="channelName"></BFormInput>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Metric Title">
                    <BFormInput v-model="title"></BFormInput>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Metric Description">
                    <BFormInput v-model="description"></BFormInput>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Progress" :append="count" class="mt-3">
                    <BCol sm="1"></BCol>
                    <BCol alignSelf="center" lg="4">
                      <BFormInput
                        v-model="count"
                        type="range"
                        min="0"
                        :max="target"
                      ></BFormInput>
                    </BCol>
                    <BCol lg="1"></BCol>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Metric Gauge Colour">
                    <BInputGroupAppend id="colourPos">
                      <color-picker
                        format="hex"
                        shape="square"
                        v-model:pureColor="gauge_colour"
                      />
                    </BInputGroupAppend>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Background Colour">
                    <BInputGroupAppend id="colourPos">
                      <color-picker
                        format="hex"
                        shape="square"
                        v-model:pureColor="backgroundColour"
                      />
                    </BInputGroupAppend>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Font Colour">
                    <BInputGroupAppend id="colourPos">
                      <color-picker
                        format="hex"
                        shape="square"
                        v-model:pureColor="appFontColour"
                      />
                    </BInputGroupAppend>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Display follower button">
                    <BInputGroupAppend style="margin-left: 10px">
                      <BFormRadioGroup
                        v-model="displayFollowButton"
                        size="sm"
                        buttons
                      >
                        <BFormRadio
                          v-for="option in radioOpts"
                          v-bind:key="option.text"
                          v-bind:button-variant="option.buttonVariant"
                          v-bind:value="option.value"
                        >
                          {{ option.text }}
                        </BFormRadio>
                      </BFormRadioGroup>
                    </BInputGroupAppend>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Display Subscriber button">
                    <BInputGroupAppend style="margin-left: 10px">
                      <BFormRadioGroup
                        v-model="displaySubButton"
                        button-variant="outline-success"
                        size="sm"
                        buttons
                      >
                        <BFormRadio
                          v-for="option in radioOpts"
                          v-bind:key="option.text"
                          v-bind:button-variant="option.buttonVariant"
                          v-bind:value="option.value"
                        >
                          {{ option.text }}
                        </BFormRadio>
                      </BFormRadioGroup>
                    </BInputGroupAppend>
                  </BInputGroup>
                </BListGroupItem>

                <BListGroupItem>
                  <BInputGroup prepend="Alerts">
                    <BInputGroupAppend style="margin-left: 10px">
                      <BButton
                        @click="
                          notification(
                            'New Follower!',
                            'crazyjack12 has followed example_user',
                            10000,
                            true
                          )
                        "
                        variant="success"
                        >New Follower</BButton
                      >
                    </BInputGroupAppend>
                    <BInputGroupAppend style="margin-left: 10px">
                      <BButton
                        @click="
                          notification(
                            'New Subscriber!',
                            'crazyjack12 has subscribed to example_user',
                            10000,
                            true
                          )
                        "
                        variant="success"
                        >New Subscriber!</BButton
                      >
                    </BInputGroupAppend>
                  </BInputGroup>
                </BListGroupItem>
              </BListGroup>
            </BCard>
          </BContainer></BCol
        >
      </BRow>
    </BContainer>
  </div>
</template>

<script>
import CustomMetric from "@/components/utils/CustomMetric.vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

export default {
  name: "panel",
  data() {
    return {
      title: "Followers",
      description: "❤️ Thank you for following! ❤️",
      count: 50,
      target: 100,
      gauge_colour: "#26a59a",
      displaySubButton: true,
      displayFollowButton: true,
      backgroundColour: "#ffb74e",
      controlBkgColour: "#086347",
      fontColour: "white",
      appFontColour: "black",
      radioOpts: [
        { text: "Enabled", value: true, buttonVariant: "outline-success" },
        { text: "Disabled", value: false, buttonVariant: "outline-danger" },
      ],
      channelName: "crazyjack12",
    };
  },
  props: {
    locale: String,
  },
  methods: {
    notification: function (title, message, delay, append) {},
  },
  computed: {
    style() {
      return {};
    },
  },
  components: {
    CustomMetric,
    ColorPicker,
  },
};
</script>

<style>
.btn-secondary {
  background-color: v-bind(backgroundColour);
  color: v-bind(fontColour);
}
</style>

<style scoped>
body {
  background-color: v-bind(appBkgColour);
  color: v-bind(appFontColour);
}

div {
  background-color: v-bind(appBkgColour);
  color: v-bind(appFontColour);
}

.list-group .list-group-item {
  background-color: v-bind(appBkgColour);
  color: v-bind(appFontColour);
}

.popover {
  max-width: none;
  width: 100%;
}

.footer-fade-enter-active,
.footer-fade-leave-active {
  transition: opacity 0.3s ease;
}

.footer-fade-enter,
.footer-fade-leave-to {
  opacity: 0;
}

.custom {
  text-align: center;
  background-color: v-bind(backgroundColour);
  color: v-bind(fontColour);
}

.navbar {
  background-color: v-bind(backgroundColour);
  color: v-bind(fontColour);
}

.navbar .navbar-brand {
  background-color: v-bind(backgroundColour);
  color: v-bind(fontColour);
}

.navbar .navbar-text {
  color: v-bind(fontColour);
}

.nav-link {
  color: black;
}

.navbar .navbar-brand {
  color: v-bind(fontColour);
}

.navbar-light .navbar-nav .nav-link {
  color: unset;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: black;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.btn-secondary {
  background-color: v-bind(backgroundColour);
  color: v-bind(fontColour);
}
</style>

<style>
.b-sidebar-header {
  background-color: v-bind(backgroundColour);
  color: v-bind(fontColour);
}

.list-group .list-group-item {
  background-color: v-bind(appBkgColour);
  color: v-bind(appFontColour);
}

.card .card-header {
  background-color: v-bind(appBkgColour);
  color: v-bind(appFontColour);
}

.card .card-body {
  background-color: v-bind(appBkgColour);
  color: v-bind(appFontColour);
}

/* 
#configuration-opts {
  padding-top: 30px;
} */
</style>

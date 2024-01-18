<template>
  <div id="panel" :style="style">
    <div class="custom">
      <b-navbar toggleable="lg">
        <b-navbar-brand :style="{ color: appFontColour }">
          <font-awesome-icon icon="chart-bar" /> | Stat-Milestones-Playground
        </b-navbar-brand>
      </b-navbar>
    </div>

    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col>
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
        ></b-col>
        <b-col>
          <b-container class="text-center" fluid>
            <b-card header-tag="header" title="Configuration Options">
              <b-list-group flush>
                <b-list-group-item>
                  <b-input-group prepend="Twitch Streamer">
                    <b-form-input v-model="channelName"></b-form-input>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Title">
                    <b-form-input v-model="title"></b-form-input>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Description">
                    <b-form-input v-model="description"></b-form-input>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group
                    prepend="Progress"
                    :append="count"
                    class="mt-3"
                  >
                    <b-form-input
                      v-model="count"
                      type="range"
                      min="0"
                      :max="target"
                    ></b-form-input>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Gauge Colour">
                    <b-input-group-append id="colourPos">
                      <color-picker
                        format="hex"
                        shape="square"
                        v-model:pureColor="gauge_colour"
                      />
                    </b-input-group-append>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Background Colour">
                    <b-input-group-append id="colourPos">
                      <color-picker
                        format="hex"
                        shape="square"
                        v-model:pureColor="backgroundColour"
                      />
                    </b-input-group-append>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Font Colour">
                    <b-input-group-append id="colourPos">
                      <color-picker
                        format="hex"
                        shape="square"
                        v-model:pureColor="appFontColour"
                      />
                    </b-input-group-append>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Display follower button">
                    <b-input-group-append style="margin-left: 100px">
                      <b-form-radio-group
                        v-model="displayFollowButton"
                        button-variant="outline-success"
                        size="sm"
                        buttons
                      >
                        <b-form-radio
                          v-for="option in radioOpts"
                          v-bind:key="option.text"
                          v-bind:button-variant="option.buttonVariant"
                          v-bind:value="option.value"
                        >
                          {{ option.text }}
                        </b-form-radio>
                      </b-form-radio-group>
                    </b-input-group-append>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Display Subscriber button">
                    <b-input-group-append style="margin-left: 100px">
                      <b-form-radio-group
                        v-model="displaySubButton"
                        button-variant="outline-success"
                        size="sm"
                        buttons
                      >
                        <b-form-radio
                          v-for="option in radioOpts"
                          v-bind:key="option.text"
                          v-bind:button-variant="option.buttonVariant"
                          v-bind:value="option.value"
                        >
                          {{ option.text }}
                        </b-form-radio>
                      </b-form-radio-group>
                    </b-input-group-append>
                  </b-input-group>
                </b-list-group-item>

                <b-list-group-item>
                  <b-input-group prepend="Alerts">
                    <b-input-group-append style="margin-left: 10px">
                      <b-button
                        @click="
                          notification(
                            'New Follower!',
                            'crazyjack12 has followed example_user',
                            10000,
                            true
                          )
                        "
                        variant="success"
                        >New Follower</b-button
                      >
                    </b-input-group-append>
                    <b-input-group-append style="margin-left: 10px">
                      <b-button
                        @click="
                          notification(
                            'New Subscriber!',
                            'crazyjack12 has subscribed to example_user',
                            10000,
                            true
                          )
                        "
                        variant="success"
                        >New Subscriber!</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-container></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CustomMetric from "@/components/page-panel/CustomMetric";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

export default {
  name: "panel",
  data() {
    return {
      title: "Followers",
      description: "❤️ Thank you for following! ❤️",
      count: 50,
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
    notification: function (title, message, delay, append) {
      this.$bvToast.toast(message, {
        title: title,
        toaster: "b-toaster-top-full",
        solid: true,
        appendToast: append,
        noAutoHide: true,
      });
    },
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

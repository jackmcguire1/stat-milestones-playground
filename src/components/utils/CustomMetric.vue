<template>
  <div id="custommetric">
    <BCard id="title" class="text-center">
      <span class="text-center">
        <h3 style="color: black">{{ title }}</h3>
      </span>
      <div v-if="count < target">
        <br />
        <gauge
          id="gauge-id"
          :title="title"
          :current="count"
          :target="target"
          :colour="gauge_colour"
        ></gauge>
      </div>
      <div v-else>
        <br />
        <BContainer>
        <BImg :src="image" width="340.12" height="150"></BImg>
        </BContainer>
        <BListGroup flush>
          <BListGroupItem>Achievement Complete!</BListGroupItem>
          <BListGroupItem
            ><strong style="color: black">Target:</strong>
            <div style="color: black">{{ target.toLocaleString() }}</div>
          </BListGroupItem>
          <BListGroupItem
            ><strong style="color: black">Current:</strong>
            <div style="color: black">{{ count.toLocaleString() }}</div>
          </BListGroupItem>
        </BListGroup>
      </div>

      <BListGroup flush>
        <div v-if="displayFollowButton">
          <BListGroupItem>
            <BContainer class="text-center">
              <BButton @click="followUser()">Follow {{ channelName }} </BButton>
            </BContainer>
          </BListGroupItem>
        </div>

        <div v-if="displaySubButton">
          <BListGroupItem>
            <div>
              <BContainer class="text-center">
                <BButton id="subscribeBtn" @click="subscribeToUser()"
                  >Subscribe to {{ channelName }}</BButton
                >
              </BContainer>
            </div>
          </BListGroupItem>
        </div>
      </BListGroup>

      <BListGroupItem>
        <BContainer class="text-center">
          <strong style="color: black">Featured Follower:</strong>
        </BContainer>
        <BContainer class="text-center">
          <BAvatar
            class="mr-2"
            :src="profileUrl"
            variant="warning"
            size="3.5em"
          >
          </BAvatar>
          <span style="color: black" class="mr-auto"
            ><strong>crazyjack12</strong></span
          >
        </BContainer>
      </BListGroupItem>

      <BListGroup flush>
        <BListGroupItem>
          <div :style="style">
            <BCard align="center" id="customMetricCard" class="">
              <template #header>
                <span style="color: black">
                  Message To Followers:
                </span></template
              >
              <BCard-text style="color: black">{{ description }}</BCard-text>
            </BCard>
          </div>
        </BListGroupItem>
      </BListGroup>
    </BCard>
  </div>
</template>

<script>
import Gauge from "@/components/utils/Gauge.vue";
import trophy from "@/assets/trophy.gif";

export default {
  name: "custommetric",
  props: {
    title: String,
    count: Number,
    target: Number,
    description: String,
    gauge_colour: String,
    displaySubButton: Boolean,
    displayFollowButton: Boolean,
    buttonTxtColour: String,
    buttonBkgColour: String,
    channelName: String,
  },
  data() {
    return {
      image: trophy,
      // images
      gif: "",
      trophy: trophy,
      profileUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/ea0bf955-255a-4eca-ad80-460b88162910-profile_image-300x300.png",

      userFollows: false,
    };
  },
  methods: {
    followChannel: function () {
      return;
    },
    userFollowed: function () {
      this.userFollows = true;
    },
    subscribeToUser: function () {
      window.open("https://subs.twitch.tv/" + this.channelName, "_blank");
    },
    followUser: function () {
      window.open("https://twitch.tv/" + this.channelName, "_blank");
    },
  },
  watch: {
    gauge_colour: function (value) {
      this.$forceUpdate();
    },
  },
  components: {
    Gauge,
  },
};
</script>

<style scoped>
.btn-secondary {
  background-color: v-bind(buttonBkgColour);
  color: v-bind(buttonTextColour);
}

.card .card-body {
  background-color: v-bind(buttonBkgColour);
  color: v-bind(buttonTxtColour);
}

.card {
  border-color: v-bind(buttonBkgColour);
  border-style: none;
}

.card-header {
  background-color: v-bind(buttonBkgColour);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.card .card-body,
.card .card-header,
.list-group .list-group-item {
  background-color: none;
}
</style>

<style>
.popover {
  max-width: none;
}

.card-header {
  color: v-bind(buttonTxtColour);
  background-color: v-bind(buttonBkgColour);
  color: v-bind(buttonTxtColour);
}

.card .card-body,
.card .card-header,
.list-group .list-group-item {
  background-color: unset;
}
</style>

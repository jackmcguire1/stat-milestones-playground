<template>
  <div id="custommetric">
    <b-card class="text-center">
      <span class="text-center">
        <strong>{{ title }}</strong>
      </span>
      <div v-if="count < target">
        <br />
        <gauge
          :title="title"
          :current="count"
          :target="target"
          :colour="gauge_colour"
        ></gauge>
      </div>
      <div v-else>
        <br />
        <b-img :src="image" height="250" width="500"></b-img>
        <b-list-group flush>
          <b-list-group-item>Achievement Complete!</b-list-group-item>
          <b-list-group-item
            ><strong>Target:</strong> {{ target.toLocaleString() }}
          </b-list-group-item>
          <b-list-group-item
            ><strong>Current:</strong>
            {{ count.toLocaleString() }}
          </b-list-group-item>
        </b-list-group>
      </div>

      <b-list-group flush>
        <div v-if="displayFollowButton">
          <b-list-group-item>
            <b-container class="text-center">
              <b-button @click="followUser()"
                >Follow {{ channelName }}
              </b-button>
            </b-container>
          </b-list-group-item>
        </div>

        <div v-if="displaySubButton">
          <b-list-group-item>
            <div>
              <b-container class="text-center">
                <b-button @click="subscribeToUser()"
                  >Subscribe to {{ channelName }}</b-button
                >
              </b-container>
            </div>
          </b-list-group-item>
        </div>
      </b-list-group>

      <b-list-group-item>
        <b-container class="text-center">
          <strong>Featured Follower:</strong>
        </b-container>
        <b-container class="text-center">
          <b-avatar
            class="mr-2"
            :src="profileUrl"
            variant="warning"
            size="3.5em"
          >
          </b-avatar>
          <span class="mr-auto"><strong>crazyjack12</strong></span>
        </b-container>
      </b-list-group-item>

      <b-list-group flush>
        <b-list-group-item>
          <div :style="style">
            <b-card
              align="center"
              id="customMetricCard"
              class=""
            >
              <template #header> Message To Followers: </template>
              <b-card-text>{{ description }}</b-card-text>
            </b-card>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card>
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
  color: v-bind(buttonTxtColour);
}

.card .card-body, .card .card-header, .list-group .list-group-item {
 background-color: unset;
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

.card .card-body, .card .card-header, .list-group .list-group-item {
 background-color: none;
}
</style>

<style>
.popover {
  max-width: none;
}

.card-header {
  background-color: v-bind(buttonBkgColour);
  color: v-bind(buttonTxtColour);
}

.card .card-body, .card .card-header, .list-group .list-group-item {
 background-color: unset;
}

</style>

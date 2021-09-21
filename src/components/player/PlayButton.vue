<template>
  <v-btn icon class="pause-btn" @click="togglePlay">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PlayButton",
  props: {
    playing: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
    icon() {
      return this.isPlaying ? "mdi-pause" : "mdi-play";
    },
  },
  methods: {
    togglePlay() {
      if (this.currentPlaying.title && this.currentPlaying.artist) {
        this.$store.dispatch("player/setIsPlaying", {
          isPlaying: !this.isPlaying,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 8px;
  height: 34px;
  width: 34px;
}
.pause-btn {
  transition: all 0.3s;
  i {
    font-size: 22px;
  }
  &.theme--dark {
    background: #fff;
    color: #181818 !important;
  }
  &.theme--light {
    background: #181818;
    color: #fff !important;
  }
}
</style>
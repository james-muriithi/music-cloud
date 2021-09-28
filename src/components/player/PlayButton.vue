<template>
  <v-btn icon class="pause-btn" :style="cssProps" @click="togglePlay">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "PlayButton",
  props: {
    playing: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 34,
    },
    height: {
      type: Number,
      default: 34,
    },
    size: {
      type: Number,
      default: 22,
    },
    colors: {
      type: Object,
      default: function () {
        return {
          dark: {
            color: "#181818",
            background: "#fff",
          },
          light: {
            color: "#fff",
            background: "#181818",
          },
        };
      },
    },
  },
  computed: {
    icon() {
      return this.playing ? "mdi-pause" : "mdi-play";
    },
    cssProps() {
      return {
        "--width": this.width + "px",
        "--height": this.height + "px",
        "--dark-bg": this.colors.dark.background,
        "--dark-color": this.colors.dark.color,
        "--light-bg": this.colors.light.background,
        "--light-color": this.colors.light.color,
        "--size": `${this.size}px`,
      };
    },
  },
  methods: {
    togglePlay() {
      this.$emit("play");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 8px;
  height: var(--height) !important;
  width: var(--width) !important;
}
.pause-btn {
  transition: all 0.3s;
  i {
    font-size: var(--size) !important;
  }
  &.theme--dark {
    background: var(--dark-bg);
    color: var(--dark-color) !important;
  }
  &.theme--light {
    background: var(--light-bg);
    color: var(--light-color) !important;
  }
}
</style>
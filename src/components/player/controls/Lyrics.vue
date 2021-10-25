<template>
  <v-btn icon :style="cssProps" :title="title" @click="openLyricsDrawer">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "Lyrics",
  props: {
    size: {
      type: Number,
      default: 18,
    },
    icon: {
      type: String,
      default: "mdi-file-music-outline",
    },
  },
  computed: {
    cssProps() {
      return {
        "--size": `${this.size}px`,
      };
    },
    title() {
      return "Lyrics";
    },
    drawerOpen() {
      return this.$store.getters["lyrics/showDrawer"];
    },
  },
  methods: {
    openLyricsDrawer() {
      this.$store.dispatch("lyrics/setDrawerState", !this.drawerOpen);
      this.$store.dispatch("lyrics/fetchLyrics");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  i.v-icon {
    font-size: var(--size) !important;
  }
}
</style>
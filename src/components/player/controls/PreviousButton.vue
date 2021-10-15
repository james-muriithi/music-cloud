<template>
  <v-btn :style="cssProps" icon @click="playPrevious">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PreviousButton",
  props: {
    size: {
      type: Number,
      default: 18,
    },
    icon: {
      type: String,
      default: "mdi-skip-previous",
    },
  },
  computed: {
    cssProps() {
      return {
        "--size": `${this.size}px`,
      };
    },
  },
  methods: {
    ...mapActions("player", ["playPrevious"]),
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
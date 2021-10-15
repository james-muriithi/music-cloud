<template>
  <v-btn :style="cssProps" icon @click="playNext">
    <v-icon>{{icon}}</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "NextButton",

  props: {
    size: {
      type: Number,
      default: 18,
    },
    icon: {
      type: String,
      default: "mdi-skip-next",
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
      ...mapActions("player", ["playNext"]),
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
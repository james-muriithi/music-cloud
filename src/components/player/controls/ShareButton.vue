<template>
  <v-btn icon :style="cssProps" @click="share">
    <v-icon>mdi-share-variant</v-icon>
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ShareButton",
  props: {
    size: {
      type: Number,
      default: 18,
    },
    icon: {
      type: String,
      default: "mdi-skip-next",
    },
    shareText: {
      type: String,
      default: null,
    },
  },
  computed: {
    cssProps() {
      return {
        "--size": `${this.size}px`,
      };
    },
    supportsShare() {
      return navigator.share;
    },
  },
  methods: {
    ...mapActions("player", ["playNext"]),
    share() {
      if (this.supportsShare) {
        navigator
          .share({ text: this.shareText })
          .then(() => console.log("Text Copied 😄"))
          .catch((e) => console.log(`🙁An error occurred: ${e}`));
      } else {
          console.log(`Your browser does not support share🙁`);
      }
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
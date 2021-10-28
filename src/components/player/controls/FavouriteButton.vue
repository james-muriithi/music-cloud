<template>
  <v-btn icon :style="cssProps" @click="toggleFavourite">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "FavouriteButton",
  emits: ["favourite"],
  props: {
    size: {
      type: Number,
      default: 24,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssProps() {
      return {
        "--size": `${this.size}px`,
      };
    },
    icon() {
      if (!this.isFavourite) {
        return "mdi-heart-outline";
      }
      return "mdi-heart";
    },
  },
  methods: {
    toggleFavourite() {
      this.$emit("favourite");
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
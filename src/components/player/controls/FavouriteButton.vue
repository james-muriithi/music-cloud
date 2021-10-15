<template>
  <v-btn icon :style="cssProps">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "FavouriteButton",
  props: {
    size: {
      type: Number,
      default: 24,
    },
    icon: {
      type: String,
      default: "mdi-heart-outline",
    },
  },
  computed: {
    cssProps(){
      return {
        '--size': `${this.size}px`
      }
    }
  },
};
</script>

<style lang="scss" scoped>
button{
  i.v-icon{
    font-size: var(--size) !important;
  }
}
</style>
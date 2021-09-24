<template>
  <div class="text-center w-100 volume">
    <v-slider
      prepend-icon="mdi-volume-high"
      class="align-center"
      v-model="volume"
    >
    </v-slider>
  </div>
</template>

<script>
export default {
  name: "Volume",
  props: {},
  computed: {
    volume: {
      get() {
        return this.$store.getters['player/volume'];
      },
      set(value) {
        this.$store.dispatch("player/setVolume", {
          volume: value,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.volume {
  max-width: 140px;
}
</style>

<style lang="scss">
.volume {
  .v-input__control {
    margin-top: -13px;
  }
  .v-input__icon--prepend {
    margin-right: -10px;
    i {
      font-size: 19px;
    }
  }
}
</style>
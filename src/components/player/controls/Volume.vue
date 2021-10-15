<template>
  <div class="text-center w-100 volume">
    <v-slider class="align-center" v-model="volume">
      <template v-slot:prepend>
        <v-layout class="alignThis">
          <v-btn icon x-small @click="toggleMute">
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-layout>
      </template>
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
        return this.$store.getters["player/volume"];
      },
      set(value) {
        this.$store.dispatch("player/setVolume", {
          volume: value,
        });
      },
    },
    icon() {
      let icon = "mdi-volume-high";
      if (this.volume == 0) {
        icon = "mdi-volume-mute";
      }
      if (this.volume > 0 && this.volume < 75) {
        icon = "mdi-volume-medium";
      }
      if (this.volume > 75) {
        icon = "mdi-volume-high";
      }
      return icon;
    },
  },
  methods: {
    toggleMute() {
      if (this.volume != 0) {
        this.volume = 0;
      } else {
        this.volume = 100;
      }
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
  .alignThis {
    margin-right: -10px !important;
    i {
      font-size: 19px !important;
    }
  }
  .v-slider__thumb::after {
    width: 10px;
    height: 10px;
  }
}
</style>
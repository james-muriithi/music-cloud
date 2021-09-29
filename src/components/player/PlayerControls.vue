<template>
  <div class="player-controls">
    <div class="controls d-flex justify-content-center">
      
      <shuffle-button />

      <previous-button />

      <play-button @play="togglePlay" :playing="isPlaying" />
      
      <next-button />

      <repeat-button />

    </div>
    <song-progress />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NextButton from './NextButton.vue';
import PlayButton from "./PlayButton.vue";
import PreviousButton from './PreviousButton.vue';
import RepeatButton from './RepeatButton.vue';
import ShuffleButton from './ShuffleButton.vue';
import SongProgress from "./SongProgress.vue";
export default {
  components: { SongProgress, PlayButton, RepeatButton, ShuffleButton, NextButton, PreviousButton },
  name: "PlayerControls",
  computed: {
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
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
.player-controls {
  margin-top: -4px;
  .controls {
    justify-content: center;
    button {
      margin-right: 8px;
      height: 34px;
      width: 34px;
    }
    i {
      font-size: 18px;
    }
  }
}
</style>

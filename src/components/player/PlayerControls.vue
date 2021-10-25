<template>
  <div class="player-controls">
    <div class="controls d-flex justify-content-center">
      <shuffle-button />

      <previous-button />

      <play-button @play="togglePlay" :playing="isPlaying" />

      <next-button />

      <repeat-button />

      <lyrics />
    </div>
    <song-progress />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Lyrics from "./controls/Lyrics.vue";
import NextButton from "./controls/NextButton.vue";
import PlayButton from "./controls/PlayButton.vue";
import PreviousButton from "./controls/PreviousButton.vue";
import RepeatButton from "./controls/RepeatButton.vue";
import ShuffleButton from "./controls/ShuffleButton.vue";
import SongProgress from "./controls/SongProgress.vue";
export default {
  components: {
    SongProgress,
    PlayButton,
    RepeatButton,
    ShuffleButton,
    NextButton,
    PreviousButton,
    Lyrics,
  },
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

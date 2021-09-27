<template>
  <div class="player-controls">
    <div class="controls d-flex justify-content-center">
      
      <shuffle-button />

      <v-btn icon @click="playPrevious">
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>
      <play-button @play="togglePlay" :playing="isPlaying" />
      <v-btn icon @click="playNext">
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

      <repeat-button />

    </div>
    <song-progress />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PlayButton from "./PlayButton.vue";
import RepeatButton from './RepeatButton.vue';
import ShuffleButton from './ShuffleButton.vue';
import SongProgress from "./SongProgress.vue";
export default {
  components: { SongProgress, PlayButton, RepeatButton, ShuffleButton },
  name: "PlayerControls",
  computed: {
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
  },
  methods: {
    ...mapActions("player", ["playNext", "playPrevious"]),
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

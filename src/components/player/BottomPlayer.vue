<template>
  <div class="bottom-player">
    <progress-bar :percent="songProgress" class="d-block d-sm-none" />
    <v-container fluid>
      <v-row class="py-0">
        <v-col cols="10" sm="5" class="pr-0">
          <song-info />
        </v-col>
        <v-col sm="5" lg="5" class="d-none d-sm-inline-block">
          <player-controls />
        </v-col>
        <v-col
          cols="2"
          sm="2"
          class="
            d-flex
            align-items-center
            justify-content-end
            pl-0
            pr-1
            pl-sm-3
          "
        >
          <volume class="d-none d-sm-inline-block" />
          <play-button
            class="d-inline-lock d-sm-none"
            @play="togglePlay"
            :playing="isPlaying"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PlayButton from "./PlayButton.vue";
import PlayerControls from "./PlayerControls.vue";
import ProgressBar from "./ProgressBar.vue";
import SongInfo from "./SongInfo.vue";
import Volume from "./Volume.vue";
export default {
  components: { Volume, PlayerControls, PlayButton, SongInfo, ProgressBar },
  name: "BottomPlayer",
  computed: {
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
    songProgress() {
      if (this.currentPlaying.playbackTimeInfo.songDuration > 0) {
        return Math.ceil(
          (this.currentPlaying.playbackTimeInfo.currentTime /
            this.currentPlaying.playbackTimeInfo.songDuration) *
            100
        );
      }
      return 0;
    },
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
.theme--dark {
  .bottom-player {
    border-top: 1px solid rgb(48, 54, 61);
    background: var(--v-cardBackground-base);
  }
}
.theme--light {
  .bottom-player {
    border-top: 1px solid #bfbfbf;
  }
}

.bottom-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: var(--v-background-base);
}
</style>
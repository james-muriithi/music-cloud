<template>
  <div class="player-controls">
    <div class="controls d-flex justify-content-center">
      <v-btn icon>
        <v-icon>mdi-shuffle-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>
      <play-button />
      <v-btn icon>
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-repeat-variant</v-icon>
      </v-btn>
    </div>
    <song-progress />
  </div>
</template>

<script>
import PlayButton from "./PlayButton.vue";
import SongProgress from "./SongProgress.vue";
export default {
  components: { SongProgress, PlayButton },
  name: "PlayerControls",
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

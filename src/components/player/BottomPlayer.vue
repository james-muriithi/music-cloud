<template>
  <div class="bottom-player">
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
          class="d-flex align-items-center justify-content-end pl-0 pl-sm-3"
        >
          <volume class="d-none d-sm-inline-block" />
          <play-button class="d-inline-lock d-sm-none" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlayButton from "./PlayButton.vue";
import PlayerControls from "./PlayerControls.vue";
import SongInfo from "./SongInfo.vue";
import Volume from "./Volume.vue";
export default {
  components: { Volume, PlayerControls, PlayButton, SongInfo },
  name: "BottomPlayer",
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
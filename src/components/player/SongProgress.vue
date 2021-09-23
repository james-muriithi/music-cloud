<template>
  <div class="progress">
    <v-slider :label="songCurrentTime" class="align-center">
      <template v-slot:append>
        <v-layout class="alignThis">
          <div class="align-center">{{totalTime}}</div>
        </v-layout>
      </template>
    </v-slider>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "SongProgress",
  computed: {
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
    totalTime() {
      return this.msToTime(this.currentPlaying.playbackTimeInfo.songDuration)
    },
    songCurrentTime(){
      return this.msToTime(this.currentPlaying.playbackTimeInfo.currentTime)
    }
  }
};
</script>

<style lang="scss" scoped>
.alignThis {
  margin-top: 6px !important;
  font-size: 13px;
}
</style>

<style lang="scss">
.volume,
.progress {
  .v-label {
    font-size: 13px;
  }
  .v-input__control {
    height: 20px !important;
  }

  .v-messages {
    display: none;
  }
  .v-input__slot {
    margin-top: 0px;
    margin-bottom: 0px !important;
  }
}
</style>
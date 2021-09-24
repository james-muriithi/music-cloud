<template>
  <audio
    @ended="pause"
    id="music-palyer"
    preload="metadata"
    ref="music_player"
    :src="src"
    :title="title"
    @timeupdate="updateTime"
  ></audio>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AudioPlayer",
  props: {
    src: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  computed: {
    ...mapGetters("player", [
      "currentPlaying",
      "isPlaying",
      "volume",
      "timeChangedByUser",
      "currentTime"
    ]),
    songData() {
      return (
        this.currentPlaying.artist &&
        this.currentPlaying.id &&
        this.currentPlaying.title
      );
    },
  },
  watch: {
    async songData(newValue) {
      if (newValue) {
        this.$refs.music_player.setAttribute(
          "src",
          this.currentPlaying.preview_url
        );
        this.$refs.music_player.setAttribute(
          "title",
          this.currentPlaying.title
        );

        await this.$refs.music_player.play();
        this.$store.dispatch("player/updateSongDuration", {
          duration: this.$refs.music_player.duration * 1000,
        });

        this.$store.dispatch("player/setVolume", {
          volume: this.$refs.music_player.volume * 100,
        });
      }
    },
    isPlaying(newValue) {
      if (!newValue) {
        this.$refs.music_player.pause();
      } else {
        this.$refs.music_player.play();
      }
    },
    volume(newValue) {
      this.$refs.music_player.volume = newValue / 100;
    },
    timeChangedByUser(newValue) {
      console.log(newValue);
      if (newValue) {
        // this.$refs.music_player.currentTime = this.currentTime;
        this.$store.dispatch("player/setTimeChangedByUser", false);
      }
    },
  },
  methods: {
    pause() {
      this.$store.dispatch("player/setIsPlaying", {
        isPlaying: false,
      });
    },
    updateTime() {
      this.$store.dispatch("player/updateSongCurrentTime", {
        currentTime: this.$refs.music_player.currentTime * 1000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
audio {
  display: none;
}
</style>
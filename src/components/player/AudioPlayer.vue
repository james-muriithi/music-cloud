<template>
  <audio
    @ended="pause"
    id="music-palyer"
    preload="metadata"
    ref="music_player"
    @timeupdate="updateTime"
  ></audio>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AudioPlayer",
  computed: {
    ...mapGetters("player", [
      "currentPlaying",
      "isPlaying",
      "volume",
      "currentTime",
      "timeChangedByUser",
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
        const songNotLoaded =
          (!this.$refs.music_player.getAttribute("src") ||
            !this.$refs.music_player.getAttribute("title")) &&
          this.songData;

        if (songNotLoaded) {
          this.$refs.music_player.setAttribute(
            "src",
            this.currentPlaying.preview_url
          );
          this.$refs.music_player.setAttribute(
            "title",
            this.currentPlaying.title
          );
        }
        this.$refs.music_player.play();
      }
    },
    volume(newValue) {
      this.$refs.music_player.volume = newValue / 100;
    },
    currentTime() {
      if (this.timeChangedByUser) {
        this.$refs.music_player.currentTime = this.currentTime / 1000;
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
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
    ...mapGetters("player", ["currentPlaying", "isPlaying"]),
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
        this.$store.dispatch('player/updateSongDuration', {duration: this.$refs.music_player.duration * 1000})
      }
    },
    isPlaying(newValue) {
      if (!newValue) {
        this.$refs.music_player.pause();
      } else {
        this.$refs.music_player.play();
      }
    },
  },
  methods: {
    pause() {
      this.$store.dispatch("player/setIsPlaying", {
          isPlaying: false,
        });
    },
    updateTime(){
      // console.log(this.$refs.music_player.currentTime);
      this.$store.dispatch("player/updateSongCurrentTime", {
          currentTime: this.$refs.music_player.currentTime * 1000,
        });
    }
  },
};
</script>

<style lang="scss" scoped>
audio {
  display: none;
}
</style>
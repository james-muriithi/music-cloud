<template>
  <audio id="music-palyer" preload="metadata" ref="music_player" :src="src" :title="title"></audio>
</template>

<script>
import { mapGetters } from 'vuex';
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
      ...mapGetters("player", ['currentPlaying', 'isPlaying']),
      songData(){
          return this.currentPlaying.artist && this.currentPlaying.id && this.currentPlaying.title;
      }
  },
  watch: {
      songData(newValue){
          if (newValue) {
              this.$refs.music_player.setAttribute('src', this.currentPlaying.preview.url);
              this.$refs.music_player.setAttribute('title', this.currentPlaying.title);

              this.$refs.music_player.play();
          }
      },
      isPlaying(newValue){
          if (!newValue) {
              this.$refs.music_player.pause();
          }
          else{
              this.$refs.music_player.play();
          }
      }
  },
};
</script>

<style lang="scss" scoped>
audio{
    display: none;
}
</style>
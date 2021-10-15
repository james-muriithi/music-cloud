<template>
  <router-link :to="link" class="fill-height">
    <div class="playlist-card elevation-2" :style="background">
      <div class="playlist-details d-flex">
        <play-button
          @click.native.prevent=""
          class="play-button"
          :playing="isPlaylistPlaying"
          @play="playPlaylist"
          :colors="playButtonColors"
        />

        <div class="details">
          <div class="album-title pl-2 pr-1 pt-0 white--text">
            {{ playlist.title }}
          </div>
          <div class="artist text-caption pl-2">{{ description }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
import PlayButton from "../player/controls/PlayButton.vue";
export default {
  components: { PlayButton },
  name: "PlaylistCard",
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      height: 350,
      width: 350,
    };
  },
  computed: {
    ...mapGetters("playlist", ["currentPlaylist"]),
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
    isPlaylistPlaying() {
      return this.currentPlaylist.id == this.playlist.id && this.isPlaying;
    },
    cover() {
      return this.playlist.cover
        .replace("{w}", this.width)
        .replace("{h}", this.height);
    },
    link() {
      return "/";
    },
    description() {
      return this.playlist?.description?.short || this.playlist.artists;
    },
    background() {
      return {
        background: `linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 90%,rgba(0,0,0,.8) 100%), 
          url("${this.cover}") center center / cover no-repeat`,
        backgroundRepeat: "no-repeat",
        backgroundCenter: "center",
      };
    },
    playButtonColors() {
      return {
        dark: {
          color: "#fff",
          background: "#1db954",
        },
        light: {
          color: "#fff",
          background: "#1db954",
        },
      };
    },
  },
  methods: {
    playPlaylist() {
      if (this.currentPlaylist.id == this.playlist.id) {
        if (this.currentPlaying.title && this.currentPlaying.artist) {
          this.$store.dispatch("player/setIsPlaying", {
            isPlaying: !this.isPlaying,
          });
        }
      } else {
        this.$store.dispatch("playlist/playPlaylist", this.playlist.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist-card {
  border-radius: 15px;
  background: var(--v-cardBackground-base);
  position: relative;
  //   min-height: 180px;
  min-height: 250px;

  .playlist-details {
    position: absolute;
    bottom: 8px;
    left: 10px;
    width: 93%;
    .play-button {
      font-size: 26px;
      background: #1db954;
      height: 40px;
      width: 40px;
    }
    .details {
      white-space: nowrap;
      overflow: hidden;

      .album-title {
        font-size: 17px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .artist {
        color: rgb(179, 179, 179);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 10px;
      }
    }
  }
}
</style>
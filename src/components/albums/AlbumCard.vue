<template>
  <router-link :to="link" class="fill-height">
    <div class="album-card elevation-2" :style="background">
      <div class="album-details d-flex">
        <v-btn class="play-button white--text" fab icon>
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <div class="details">
          <div class="album-title pl-2 pr-1 pt-0 white--text">
            {{ album.title }}
          </div>
          <div class="artist text-caption pl-2">{{ album.artist }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AlbumCard",
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  computed: {
    link(){
      return "/";
    },
    background() {
      return {
        background: `linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 90%,rgba(0,0,0,.8) 100%), 
          url("${this.album.cover}") center center / cover no-repeat`,
        backgroundRepeat: "no-repeat",
        backgroundCenter: "center",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.album-card {
  border-radius: 15px;
  background: var(--v-cardBackground-base);
  position: relative;
  min-height: 180px;
  .album-details {
    position: absolute;
    bottom: 8px;
    left: 10px;
    width: 93%;
    .play-button {
      font-size: 26px;
      background: #772bfb;
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
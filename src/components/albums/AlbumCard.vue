<template>
  <router-link :to="link" class="fill-height">
    <div class="album-card elevation-2" :style="background">
      <div class="album-details d-flex">
        <v-btn class="play-button white--text" fab icon>
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <div class="details">
          <div class="album-title pl-2 pr-1 pt-0 white--text">
            Donda
          </div>
          <div class="artist text-caption pl-2">Kanye</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AlbumCard",
  props: {
    background: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.album-card {
  border-radius: 15px;
  background: var(--v-cardBackground-base);
  position: relative;
  min-height: 250px;
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
      }
    }
  }
}
</style>
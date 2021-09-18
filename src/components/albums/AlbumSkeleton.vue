<template>
  <router-link :to="link" class="fill-height">
    <div class="album-card elevation-2" :style="background">
      <div class="album-details d-flex">
        <div class="play-button white--text">
          <v-skeleton-loader
              class="w-100 rounded-xl"
              type="button"
              height="35"
              max-width="35"
            ></v-skeleton-loader>
        </div>
        <div class="details">
          <div class="album-title pl-2 pr-1 pt-0 white--text">
            <v-skeleton-loader
              class="w-100"
              type="text"
              width="80"
            ></v-skeleton-loader>
          </div>
          <div class="artist text-caption pl-2">
              <v-skeleton-loader
              class="w-100"
              type="text"
              width="50"
            ></v-skeleton-loader>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AlbumCard",
  computed: {
    link(){
      return "/";
    },
    background() {
      return {
        background: `linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 90%,rgba(0,0,0,.8) 100%)`,
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
  min-height: 190px;
  // min-height: 250px;
  .album-details {
    position: absolute;
    bottom: 8px;
    left: 10px;
    width: 93%;
    .play-button {
      font-size: 26px;
      height: 35px;
      width: 35px;
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
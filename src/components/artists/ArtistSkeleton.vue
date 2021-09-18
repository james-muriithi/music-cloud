<template>
    <div class="artist-card elevation-2" :style="background">
      <div class="artist-details d-flex">
        <div class="details">
          <div class="artist-name pl-2 pr-1 pt-0 white--text">
            <v-skeleton-loader
              class="w-100"
              type="text"
              width="80"
            ></v-skeleton-loader>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ArtistCard",
  computed: {
    background() {
      return {
        background: `linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 90%,rgba(0,0,0,.8) 100%)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.artist-card {
  background: var(--v-cardBackground-base);
  position: relative;
  height: 130px;
  min-width: 130px;
  width: 100%;
  border-radius: 5px;
  .artist-details {
    position: absolute;
    bottom: 5px;
    left: 10px;
    width: 93%;
 
    .details {
      white-space: nowrap;
      overflow: hidden;

      .artist-name {
        font-size: 17px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
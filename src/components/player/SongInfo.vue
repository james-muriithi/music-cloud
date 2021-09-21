<template>
  <div class="song-info d-flex">
    <div class="song-image">
      <v-img :lazy-src="cover" fluid :src="cover" class="fill-height rounded">
      </v-img>
    </div>
    <div class="song-details pl-3 d-flex w-100">
      <v-row class="mr-0">
        <v-col cols="9" class="pr-0">
          <div class="w-100">
            <div class="song-title fill-width">Better Better Better Better</div>
            <div class="song-artist">
              <router-link to="/">Khalid</router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="3" class="px-0 text-left">
          <v-btn icon>
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongInfo",
  computed: {
    cover() {
      return "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/bb/1e/c4/bb1ec461-1660-7afa-bc4f-f11a0dca6ac9/075679768889.jpg/200x200bb.jpeg";
    },
  },
};
</script>

<style lang="scss" scoped>
.song-image {
  height: 55px;
  width: 55px;
  @media (max-width: 476px) {
    height: 50px;
    width: 50px;
  }
}
.song-details {
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
  .song-title {
    font-size: 15px;
    font-weight: 450;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .song-artist {
    line-height: 20px;
    a {
      text-decoration: none;
      font-size: 12px;
      color: rgb(179, 179, 179);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
<template>
  <div class="song-info d-flex">
    <div class="song-image" @click="openSmallScreenPlayer">
      <v-img :lazy-src="cover" fluid :src="cover" class="fill-height rounded">
      </v-img>
    </div>
    <div class="song-details pl-3 d-flex w-100">
      <v-row class="mr-0">
        <v-col cols="9" class="pr-0 overflow-x-hidden border-box">
          <div class="w-100">
            <div class="song-title fill-width" @click="openSmallScreenPlayer">
              {{ currentPlaying.title }}
            </div>
            <div class="song-artist">
              <router-link to="/">{{ currentPlaying.artist }}</router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="3" class="px-0 text-left">
          <favourite-button
            @favourite="toggleFavourite"
            :isFavourite="isFavourite"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { fillImageDimensions } from "../../helpers";
import FavouriteButton from "./controls/FavouriteButton.vue";
export default {
  components: { FavouriteButton },
  name: "SongInfo",
  emits: ["openPlayer"],
  computed: {
    cover() {
      return fillImageDimensions(this.currentPlaying.cover, 200, 200);
    },
    ...mapGetters("player", ["currentPlaying"]),
    isFavourite() {
      return this.$store.getters["isSongFavourite"](this.currentPlaying.id);
    },
  },
  methods: {
    openSmallScreenPlayer() {
      this.$emit("openPlayer");
    },
    toggleFavourite() {
      if (this.currentPlaying.id) {
        this.$store.dispatch("toggleFavouriteSong", {
          songId: this.currentPlaying.id,
        });
      }
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
.border-box {
  box-sizing: border-box;
}
</style>
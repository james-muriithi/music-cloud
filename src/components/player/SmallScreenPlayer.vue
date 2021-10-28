<template>
  <div class="text-center h-100">
    <v-bottom-sheet v-model="open" persistent class="h-100" fullscreen>
      <v-sheet class="text-center player-sheet" height="100%">
        <v-container fluid class="upper-part" ref="_upper_part">
          <v-row>
            <v-col cols="2">
              <v-btn icon @click="close" class="close-btn">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-col>
            <v-col
              cols="8"
              class="d-flex justify-content-center align-items-end"
            >
              Playlist
            </v-col>
          </v-row>
          <div class="song-image d-flex justify-content-center mt-5">
            <v-img
              :lazy-src="thumbnail"
              max-height="200"
              max-width="180"
              min-height="200"
              :src="cover"
            ></v-img>
            <v-img class="d-none" :src="cover" ref="img" />
          </div>
        </v-container>
        <v-container fluid class="lower-part mt-0 px-5">
          <div class="center d-flex">
            <div class="shuffle-repeat text-left">
              <shuffle-button />
              <repeat-button />
            </div>
            <div class="share ml-auto">
              <lyrics />
              <share-button :size="22" :shareText="shareData" />
            </div>
          </div>
          <div class="song-info text-left mt-2 px-2">
            <div class="song-title fill-width">
              <router-link to="/">{{ currentPlaying.title }}</router-link>
            </div>
            <div class="song-artist">
              <router-link to="/">{{ currentPlaying.artist }}</router-link>
            </div>
          </div>
          <div class="bottom">
            <song-progress />
            <div class="song-controls mt-5">
              <v-row>
                <v-col cols="12" class="d-flex align-items-center">
                  <favourite-button
                    :size="30"
                    @favourite="toggleFavourite"
                    :isFavourite="isFavourite"
                  />
                  <div
                    class="
                      d-flex
                      justify-content-center
                      align-items-center
                      w-100
                      ml--5
                    "
                  >
                    <previous-button :size="45" class="ml-3" />
                    <play-button
                      :width="55"
                      :height="55"
                      :size="45"
                      class="mx-7"
                      @play="togglePlay"
                      :playing="isPlaying"
                    />
                    <next-button :size="45" class="" />
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vibrant from "node-vibrant";
import { fillImageDimensions } from "../../helpers";
import FavouriteButton from "./controls/FavouriteButton.vue";
import NextButton from "./controls/NextButton.vue";
import PlayButton from "./controls/PlayButton.vue";
import PreviousButton from "./controls/PreviousButton.vue";
import RepeatButton from "./controls/RepeatButton.vue";
import ShareButton from "./controls/ShareButton.vue";
import ShuffleButton from "./controls/ShuffleButton.vue";
import SongProgress from "./controls/SongProgress.vue";
import Lyrics from "./controls/Lyrics.vue";
export default {
  name: "SmallScreenPlayer",
  components: {
    SongProgress,
    FavouriteButton,
    PreviousButton,
    PlayButton,
    NextButton,
    ShuffleButton,
    RepeatButton,
    ShareButton,
    Lyrics,
  },
  emits: ["close"],
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
    cover() {
      return fillImageDimensions(this.currentPlaying.cover, 250, 250);
    },
    thumbnail() {
      return fillImageDimensions(this.currentPlaying.cover, 50, 50);
    },
    shareData() {
      return `${this.currentPlaying.artist} ${this.currentPlaying.title} \n\n\
      ${this.currentPlaying.url}`;
    },
    songData() {
      return (
        this.currentPlaying.artist &&
        this.currentPlaying.id &&
        this.currentPlaying.title
      );
    },
    isFavourite() {
      return this.$store.getters["isSongFavourite"](this.currentPlaying.id);
    },
  },
  watch: {
    open: function (val) {
      document.querySelector("html").style.overflow = val ? "hidden" : "auto";
      if (val) {
        this.setColor();
      }
    },
    songData(newValue) {
      if (newValue) {
        this.setColor();
      }
    },
  },
  methods: {
    togglePlay() {
      if (this.currentPlaying.title && this.currentPlaying.artist) {
        this.$store.dispatch("player/setIsPlaying", {
          isPlaying: !this.isPlaying,
        });
      }
    },
    close() {
      this.$emit("close");
    },
    setColor() {
      this.$nextTick(() => {
        const self = this;
        Vibrant.from(this.thumbnail)
          .getPalette()
          .then(function (palette) {
            if (self.$refs._upper_part && self.$vuetify.theme.dark) {
              self.$refs._upper_part.style.backgroundColor =
                palette.Vibrant.hex;
            }
          })
          .catch((e) => console.log(e));
      });
    },
    toggleFavourite() {
      if (this.currentPlaying.id) {
        this.$store.dispatch("toggleFavouriteSong", {
          songId: this.currentPlaying.id,
        });
      }
    },
  },
  mounted() {
    this.setColor();
  },
};
</script>

<style lang="scss" scoped>
.theme--dark .upper-part {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #1e1e1e 100%);
}
.player-sheet {
  .upper-part {
    padding-top: 10px;
    border-bottom: none !important;
    background-size: 100% 100%;
    background-position: center center;
  }
  .close-btn {
    i {
      font-size: 35px;
    }
  }

  .song-title {
    font-size: 28px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    a {
      text-overflow: ellipsis;
      color: var(--v-songTitleColor-base);
    }
  }

  .song-artist {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    a {
      color: var(--v-artistColor-base);
      text-overflow: ellipsis;
    }
  }

  .bottom {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
  }

  a {
    text-decoration: none;
  }
  .ml--5 {
    margin-left: -45px;
  }
}
</style>
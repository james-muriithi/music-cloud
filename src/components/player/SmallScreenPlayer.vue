<template>
  <div class="text-center h-100">
    <v-bottom-sheet v-model="open" persistent class="h-100" fullscreen>
      <v-sheet class="text-center player-sheet" height="100%">
        <v-container fluid class="upper-part">
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
          <div class="song-image d-flex justify-content-center mt-9">
            <v-img
              :lazy-src="thumbnail"
              max-height="250"
              max-width="250"
              min-height="200"
              :src="cover"
            ></v-img>
          </div>
        </v-container>
        <v-container fluid class="lower-part mt-3 px-1">
          <div class="center d-flex">
            <div class="shuffle-repeat text-left">
              <shuffle-button />
              <repeat-button />
            </div>
            <div class="share ml-auto">
              <share-button :size="22" />
            </div>
          </div>
          <div class="song-info text-left px-8">
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
                  <favourite-button :size="30" />

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
import { fillImageDimensions } from '../../helpers';
import FavouriteButton from "./FavouriteButton.vue";
import NextButton from "./NextButton.vue";
import PlayButton from "./PlayButton.vue";
import PreviousButton from "./PreviousButton.vue";
import RepeatButton from './RepeatButton.vue';
import ShareButton from './ShareButton.vue';
import ShuffleButton from './ShuffleButton.vue';
import SongProgress from "./SongProgress.vue";
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
    thumbnail(){
        return fillImageDimensions(this.currentPlaying.cover, 50, 50);
    }
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
  },
};
</script>

<style lang="scss" scoped>
.player-sheet {
  padding-top: 20px;
  .close-btn {
    i {
      font-size: 35px;
    }
  }
  .song-title {
    font-size: 30px;
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
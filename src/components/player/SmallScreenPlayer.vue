<template>
  <div class="text-center h-100">
    <v-bottom-sheet v-model="sheet" persistent class="h-100" fullscreen>
      <v-sheet class="text-center player-sheet" height="100%">
        <v-container fluid class="upper-part">
          <v-row>
            <v-col cols="2">
              <v-btn icon @click="sheet = !sheet" class="close-btn">
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
          <div class="song-image d-flex justify-content-center mt-12">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="250"
              max-width="250"
              min-height="200"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </div>
        </v-container>
        <v-container fluid class="lower-part mt-5 px-8">
          <div class="song-info text-left">
            <div class="song-title fill-width">
              <router-link to="/">Better</router-link>
            </div>
            <div class="song-artist">
              <router-link to="/">Khalid</router-link>
            </div>
          </div>
          <div class="bottom">
              <song-progress />
              <div class="song-controls mt-5">
                  <v-row class="align-items-center">
                      <v-col cols="2">
                          <favourite-button :size="30" />
                      </v-col>
                      <v-col cols="10" class="text-left">
                          <previous-button :size="45" class="ml-3" />
                          <play-button :width="55" :height="55" :size="45" class="mx-7" />
                          <next-button :size="45" class="" />
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
import FavouriteButton from './FavouriteButton.vue';
import NextButton from './NextButton.vue';
import PlayButton from './PlayButton.vue';
import PreviousButton from './PreviousButton.vue';
import SongProgress from './SongProgress.vue';
export default {
  name: "SmallScreenPlayer",
  components: { SongProgress, FavouriteButton, PreviousButton, PlayButton, NextButton },
  data: () => ({
    sheet: true,
  }),
};
</script>

<style lang="scss" scoped>
.player-sheet {
  padding-top: 30px;
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

  .bottom{
      position: absolute;
      bottom: 15px;
      left: 15px;
      right: 15px;
  }

  a {
    text-decoration: none;
  }
}
</style>
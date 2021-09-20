<template>
  <v-container class="home px-5">
    <div class="top-songs">
      <v-row class="mx-0">
        <v-col cols="12" lg="8" class="px-md-3 px-0">
          <div class="text-h5 font-weight-bold">Top Songs</div>
          <div class="pa-md-2 pa-0 mt-3 songs elevation-0">
            <span v-if="isLoading">
              <song-skeleton v-for="n in 6" :key="n" />
            </span>
            <span class="" v-else>
              <song-card
                v-for="song in recentSongs"
                :key="song.id"
                :song="song"
              />
            </span>
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="text-lg-center">
            <div class="text-h5 font-weight-bold">Top Artists</div>
            <div
              :class="`py-3 mt-3 artists fill-width
            ${
              $vuetify.breakpoint.smAndUp && $vuetify.breakpoint.mdAndDown
                ? 'sm'
                : ''
            }`"
            >
              <v-row class="d-flex justify-content-end">
                <v-col cols="12" lg="10">
                  <v-row v-if="isLoading">
                    <v-col
                      cols="6"
                      sm="3"
                      lg="6"
                      class="artist pa-1"
                      v-for="n in 4"
                      :key="n"
                    >
                      <artist-skeleton />
                    </v-col>
                  </v-row>

                  <v-row v-else>
                    <v-col
                      cols="6"
                      sm="3"
                      lg="6"
                      class="artist pa-1"
                      v-for="artist in topArtists"
                      :key="artist.id"
                    >
                      <artist-card :artist="artist" />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="top-albums mt-5">
      <div class="text-h5 font-weight-bold">New Albums</div>
      <div class="pt-5 albums">
        <v-row v-if="isLoading">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="n in 4"
            :key="n"
            class="pr-0"
          >
            <album-skeleton />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="album in topAlbums"
            :key="album.id"
            class="pr-0"
          >
            <album-card :album="album" />
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="top-playlists mt-7">
      <div class="text-h5 font-weight-bold">Top Playlists</div>
      <div class="pt-5 playlists">
        <v-row v-if="isLoading">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="n in 2"
            :key="n"
            class="pr-0"
          >
            <album-skeleton />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="playlist in topPlaylists"
            :key="playlist.id"
          >
            <playlist-card :playlist="playlist" />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AlbumCard from "../components/albums/AlbumCard.vue";
import ArtistCard from "../components/artists/ArtistCard.vue";
import PlaylistCard from "../components/playlists/PlaylistCard.vue";
import SongCard from "../components/songs/SongCard.vue";

import AlbumSkeleton from "../components/albums/AlbumSkeleton.vue";
import ArtistSkeleton from "../components/artists/ArtistSkeleton.vue";
// import PlaylistSkeleton from "../components/albums/AlbumSkeleton.vue";
import SongSkeleton from "../components/songs/SongSkeleton.vue";

export default {
  components: {
    AlbumCard,
    SongCard,
    ArtistCard,
    PlaylistCard,
    AlbumSkeleton,
    SongSkeleton,
    ArtistSkeleton,
    // PlaylistSkeleton,
  },
  name: "Home",
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["recentSongs", "topAlbums", "topArtists", "topPlaylists"]),
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("fetchBrowseData", { limit: 40 });
    this.isLoading = false;
  },
};
</script>

<style lang="scss" scoped>
.home{
  margin-bottom: 85px;
}
.songs {
  border-radius: 10px;
  // background: var(--v-cardBackground-base);
  padding-left: 4px;
  padding-right: 4px;
  max-height: 270px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border: none;
  }
  &::-webkit-scrollbar-track {
    background: var(--v-background-base);
    border-left: none;
  }
}
.text-h5 {
  font-size: 20px !important;
  font-weight: 600 !important;
}
.theme--light {
  .text-h5 {
    color: #595959;
  }
}
</style>

<style lang="scss">
.artists:not(.sm) {
  .artist {
    &:nth-child(1) {
      .artist-card {
        border-top-left-radius: 15px;
      }
    }
    &:nth-child(2) {
      .artist-card {
        border-top-right-radius: 15px;
      }
    }

    //
    &:nth-last-child(2):not(:nth-child(even)) {
      .artist-card {
        border-bottom-left-radius: 15px;
      }
    }
    &:last-child:not(:nth-child(odd)) {
      .artist-card {
        border-bottom-right-radius: 15px;
      }
    }

    //
    &:last-child:nth-child(odd) {
      .artist-card {
        border-bottom-left-radius: 15px;
      }
    }
  }
}
.justify-content-end {
  justify-content: end;
}
</style>
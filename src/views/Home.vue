<template>
  <v-container class="home px-5">
    <div class="top-songs">
      <v-row class="mx-0">
        <v-col cols="12" lg="7" class="px-md-3 px-0">
          <div class="text-h5 font-weight-bold">Top Songs</div>
          <div class="pa-md-2 pa-1 mt-3 songs elevation-0">
            <song-card
              v-for="song in recentSongs"
              :key="song.id"
              :song="song"
            />
          </div>
        </v-col>
        <v-col cols="12" lg="5">
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
                <v-col cols="12" lg="8">
                  <v-row>
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
    <div class="top-albums pt-5">
      <div class="text-h5 font-weight-bold">New Albums</div>
      <div class="pt-5 albums">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="album in topAlbums"
            :key="album.id"
          >
            <album-card :album="album" />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import AlbumCard from "../components/albums/AlbumCard.vue";
import ArtistCard from "../components/artists/ArtistCard.vue";
import SongCard from "../components/songs/SongCard.vue";
// @ is an alias to /src

export default {
  components: { AlbumCard, SongCard, ArtistCard },
  name: "Home",
  data() {
    return {
      recentSongs: [
        {
          id: 1,
          title: "8TEEN",
          artist: "Khalid",
          cover:
            "https://i.scdn.co/image/ab67616d00004851988ede5e1276e758b5f9e577",
          album: "American Teen",
          duration: "3:01",
        },
        {
          id: 2,
          title: "Saturday Nights",
          artist: "Khalid",
          cover:
            "https://i.scdn.co/image/ab67616d0000485160624c0781fd787c9aa4699c",
          album: "Suncity",
          duration: "3:30",
        },
        {
          id: 3,
          title: "Better",
          artist: "Khalid",
          cover:
            "https://i.scdn.co/image/ab67616d0000485197bbd3ef27fe0b40b36f8002",
          album: "Suncity",
          duration: "3:49",
        },
      ],
      topAlbums: [
        {
          id: 1,
          title: "Donda",
          artist: "Kanye",
          cover:
            "https://i.scdn.co/image/ab67616d00001e02e9d11eb596a7a7e426d81635",
        },
        {
          id: 2,
          title: "Donda",
          artist: "Kanye",
          cover:
            "https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77933ee5",
        },
        {
          id: 3,
          title: "Donda",
          artist: "Kanye",
          cover:
            "https://i.scdn.co/image/ab67616d00001e02c2bd783533a07368136793a8",
        },
        {
          id: 4,
          title: "Donda",
          artist: "Kanye",
          cover:
            "https://i.scdn.co/image/ab67616d00001e02e9d11eb596a7a7e426d81635",
        },
      ],
      topArtists: [
        {
          id: 1,
          image:
            "https://i.scdn.co/image/ab6761610000f178012b37d6dec8872b18524f78",
          name: "Khalid",
        },
        {
          id: 2,
          image:
            "https://i.scdn.co/image/ab6761610000f178012b37d6dec8872b18524f78",
          name: "Khalid",
        },
        {
          id: 3,
          image:
            "https://i.scdn.co/image/ab6761610000f178012b37d6dec8872b18524f78",
          name: "Khalid",
        },
        {
          id: 4,
          image:
            "https://i.scdn.co/image/ab6761610000f178012b37d6dec8872b18524f78",
          name: "Khalid",
        },
        
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.songs {
  border-radius: 10px;
  // background: var(--v-cardBackground-base);
  padding-left: 4px;
  padding-right: 4px;
  max-height: 270px;
  overflow-y: auto;
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
    &:nth-last-child(2) {
      .artist-card {
        border-bottom-left-radius: 15px;
      }
    }
    &:last-child:not(:first-child) {
      .artist-card {
        border-bottom-right-radius: 15px;
      }
    }
  }
}
.justify-content-end {
  justify-content: end;
}
</style>
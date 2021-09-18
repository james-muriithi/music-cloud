<template>
  <v-container class="home px-5">
    <div class="top-songs">
      <v-row>
        <v-col cols="12" lg="7">
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
          <div class="text-h5 font-weight-bold">Top Artists</div>
          <div class="pa-3 mt-3"></div>
        </v-col>
      </v-row>
    </div>
    <div class="top-albums pt-5">
      <div class="text-h5 font-weight-bold">New Albums</div>
      <div class="pt-5 albums">
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <album-card :background="albumCardStyle" />
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <album-card :background="albumCardStyle2" />
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <album-card :background="albumCardStyle3" />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import AlbumCard from "../components/albums/AlbumCard.vue";
import SongCard from "../components/songs/SongCard.vue";
// @ is an alias to /src

export default {
  components: { AlbumCard, SongCard },
  name: "Home",
  data() {
    return {
      recentSongs: [
        {
          id: 1,
          title: "8TEEN",
          artist: "Kalid",
          cover:
            "https://i.scdn.co/image/ab67616d00004851988ede5e1276e758b5f9e577",
          album: "American Teen",
          duration: "3:01",
        },
        {
          id: 2,
          title: "Better",
          artist: "Kalid",
          cover:
            "https://i.scdn.co/image/ab67616d0000485160624c0781fd787c9aa4699c",
          album: "Suncity",
          duration: "3:49",
        },
        {
          id: 3,
          title: "Better",
          artist: "Kalid",
          cover:
            "https://i.scdn.co/image/ab67616d0000485160624c0781fd787c9aa4699c",
          album: "Suncity",
          duration: "3:49",
        },
      ],
    };
  },
  computed: {
    albumCardStyle() {
      return {
        background: `linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 90%,rgba(0,0,0,.8) 100%), url("https://i.scdn.co/image/ab67616d00001e02e9d11eb596a7a7e426d81635") center center / cover no-repeat`,
        backgroundRepeat: "no-repeat",
        backgroundCenter: "center",
      };
    },
    albumCardStyle2() {
      return {
        background: `linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 90%,rgba(0,0,0,.8) 100%), url("https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77933ee5") center center / cover no-repeat`,
      };
    },
    albumCardStyle3() {
      return {
        background: `linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 90%,rgba(0,0,0,.8) 100%), url("https://i.scdn.co/image/ab67616d00001e02c2bd783533a07368136793a8") center center / cover no-repeat`,
      };
    },
  },
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
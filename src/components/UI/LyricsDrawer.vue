<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :width="300"
    :permanent="showDrawer"
    fixed
    right
    dark
    :style="`background: #000; ${smallScreen ? 'z-index: 100000' : ''}`"
  >
    <v-container>
      <v-btn icon @click="closeDrawer">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-container>
    <div :class="`lyrics-container ${loading ? 'loading' : ''}`">
      <h2
        class="browse-page-category text-center"
        v-if="error"
        style="margin: 4em 10px 0 10px; color: #fff"
      >
        {{ error }}
      </h2>
      <v-progress-circular
        v-if="!error && loading"
        indeterminate
        color="primary"
      ></v-progress-circular>
      <iframe
        frameBorder="0"
        v-else-if="!error && lyrics && !loading"
        id="lyrics-iframe"
        :srcdoc="lyrics + getStyle()"
      ></iframe>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LyricsDrawer",
  data() {
    return {
      drawer: true,
      error: null,
      loading: false,
    };
  },
  computed: {
    showDrawer: {
      get: function () {
        return this.$store.getters["lyrics/showDrawer"];
      },
      set: function (state) {
        this.$store.dispatch("lyrics/setDrawerState", state);
      },
    },
    currentPlayingSong() {
      return this.currentPlaying.title;
    },
    ...mapGetters("lyrics", ["lyrics"]),
    ...mapGetters("player", ["currentPlaying"]),
    smallScreen() {
      return this.$vuetify.breakpoint.width < 450;
    },
  },
  methods: {
    closeDrawer() {
      this.$store.dispatch("lyrics/setDrawerState", false);
    },
    async fetchLyrics() {
      if (
        this.currentPlaying &&
        this.currentPlaying.title &&
        this.currentPlaying.artist
      ) {
        this.loading = true;
        this.error = null;
        try {
          const data = await this.$store.dispatch("lyrics/fetchLyrics", {
            title: this.currentPlaying.title,
            artist: this.currentPlaying.artist,
          });
          this.loading = false;
          return data;
        } catch (error) {
          this.error = error.message;
        }
        this.loading = false;
      }
    },
    getStyle() {
      return `
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        <style>
          *{
              border: none transparent !important;
          }
          body, html {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
                border: none !important;
          }
          body, html {
              overflow: auto;
              scrollbar-color: #FF7597;
              scrollbar-width: thin;
          }
          body::-webkit-scrollbar, html::-webkit-scrollbar {
              width: 3px;
              height: 3px;
              border-radius: 1px;
          }
          body::-webkit-scrollbar-track, html::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0);
              border-radius: 1px;
          }
          body::-webkit-scrollbar-thumb, html::-webkit-scrollbar-thumb {
              background: #ff7597;
              border-radius: 1px;
              cursor: pointer;
          }
           body::-webkit-scrollbar-thumb:hover, html::-webkit-scrollbar-thumb:hover {
              background: #ff7597;
          }
          body:hover::-webkit-scrollbar-thumb, html:hover::-webkit-scrollbar-thumb {
              background: #ff8faa;
          }
          body::-webkit-scrollbar-corner, html::-webkit-scrollbar-corner {
              display: none;
          }
          .rg_embed_body * {
              border: none !important;
              background: #000000 !important;
              color: white !important;
          }
          .rg_embed_body a {
              background: rgba(255,117,151,0.4) !important;
          }
          .rg_embed_body a:hover {
              background: rgba(255,117,151,0.7) !important;
          }
          .rg_embed {
            background:  #000000 !important;
            margin: 0 !important;
            width: 100% !important;
            heighy: 100% !important;
          }
        </style>
        `;
    },
  },
  watch: {
    currentPlayingSong(newValue) {
      if (newValue && this.showDrawer) {
        this.fetchLyrics();
      }
    },
    showDrawer(newValue) {
      if (newValue && !this.lyrics) {
        this.fetchLyrics();
      }
    },
  },
  mounted() {
    if (this.showDrawer) {
      this.fetchLyrics();
    }
  },
};
</script>

<style>
.lyrics-container,
iframe {
  height: 90%;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
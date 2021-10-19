<template>
  <div id="app" @keypress.space="spacePause" tabindex="0">
    <v-app>
      <app-bar />
      <side-nav />
      <v-main>
        <router-view />
        <bottom-player @openPlayer="openPlayer" />
        <small-screen-player :open="playerOpen" @close="closePlayer" />
      </v-main>
    </v-app>
    <audio-player />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AudioPlayer from "./components/player/AudioPlayer.vue";
import BottomPlayer from "./components/player/BottomPlayer.vue";
import SmallScreenPlayer from "./components/player/SmallScreenPlayer.vue";
export default {
  name: "App",
  components: { BottomPlayer, AudioPlayer, SmallScreenPlayer },
  data() {
    return {
      isLoading: false,
      playerOpen: false,
    };
  },
  // metaInfo() {
  //   const description = this.metaDescription;
  //   const title = this.metaTitle;
  //   const base_url = this.baseUrl;
  //   const image = this.baseUrl + this.metaImage;

  //   return {
  //     meta: [
  //       {
  //         description: description,
  //       },
  //       {
  //         property: "og:type",
  //         content: "website",
  //       },
  //       {
  //         property: "og:url",
  //         content: base_url,
  //       },
  //       {
  //         property: "og:title",
  //         content: title,
  //       },
  //       {
  //         property: "og:description",
  //         content: description,
  //       },
  //       {
  //         property: "og:image",
  //         content: image,
  //       },

  //       {
  //         property: "twitter:card",
  //         content: "summary_large_image",
  //       },
  //       {
  //         property: "twitter:url",
  //         content: base_url,
  //       },
  //       {
  //         property: "twitter:title",
  //         content: title,
  //       },
  //       {
  //         property: "twitter:description",
  //         content: description,
  //       },
  //       {
  //         property: "twitter:image",
  //         content: image,
  //       },
  //     ],
  //   };
  // },
  computed: {
    ...mapGetters("player", ["isPlaying", "currentPlaying"]),
    // metaTitle() {
    //   return "Music Cloud - Vue Music Player";
    // },
    // metaDescription() {
    //   return "A music app that consumes apple music API and built using Vue, Vuex, Vue Router and Vuetify";
    // },
    // metaImage() {
    //   return require("@/assets/logo.png");
    // },
    // baseUrl() {
    //   return "https://musik-cloud.netlify.app";
    // },
  },
  methods: {
    closePlayer() {
      this.playerOpen = false;
    },
    openPlayer() {
      this.playerOpen = true;
    },
    togglePlay() {
      if (this.currentPlaying.title && this.currentPlaying.artist) {
        this.$store.dispatch("player/setIsPlaying", {
          isPlaying: !this.isPlaying,
        });
      }
    },
    spacePause(e) {
      if (e.target.tagName.toUpperCase() == "INPUT") return;
      this.togglePlay();
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 11px;
}

::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 2px #202020;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
}

.theme--dark.v-application {
  background: var(--v-background-base) !important;
  ::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-track {
    background: #202020;
    border-left: 1px solid #2c2c2c;
  }

  ::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border: solid 2px #202020;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
}

.theme--light.v-application {
  ::-webkit-scrollbar-track {
    background: #e6e6e6;
    border-left: 1px solid #dadada;
  }

  ::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border: solid 2px #e6e6e6;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4c4c4d;
  }
}
.w-100 {
  width: 100%;
}
.align-items-center {
  align-items: center;
}
.align-items-end {
  align-items: flex-end;
}
.justify-content-center {
  justify-content: center;
}
body {
  overflow-x: hidden;
}
</style>
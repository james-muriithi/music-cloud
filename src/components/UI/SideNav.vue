<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :mini-variant.sync="mini"
    :permanent="!smallScreen"
    app
    floating
    class="bg-background-base nd"
  >
    <v-list-item class="px-2 pt-3">
      <v-list-item-avatar>
        <v-img :src="require('@/assets/logo.png')"></v-img>
      </v-list-item-avatar>

      <v-list-item-title color="grey darken-1" class="app-name"
        >MusicCloud</v-list-item-title
      >

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-list dense class="mt-15">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.path"
        active-class="highlighted"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2 text-left">
        <v-btn
          href="https://github.com/james-muriithi/music-cloud"
          icon
          target="_blank"
          rel="noopener noreferrer"
          class="mb-3"
          link
        >
          <v-icon size="35">mdi-github</v-icon>
        </v-btn>

        <theme-toggle />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import ThemeToggle from "./ThemeToggle.vue";
export default {
  components: { ThemeToggle },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-fire", path: "/" },
        { title: "Search", icon: "mdi-magnify", path: "/search" },
        {
          title: "Recent Songs",
          icon: "mdi-music-note-plus",
          path: "/recent",
        },
        // { title: "Top Songs", icon: "mdi-chart-line-variant", path: "/songs" },
        // {
        //   title: "Top Artists",
        //   icon: "mdi-account-music-outline",
        //   path: "/artists",
        // },
        { title: "Top Albums", icon: "mdi-album", path: "/albums" },
        { title: "Playlists", icon: "mdi-playlist-music", path: "/playlists" },
      ],
      mini: this.minify,
    };
  },
  computed: {
    minify() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    smallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    showDrawer: {
      get: function () {
        return this.$store.getters["sidebar/showDrawer"];
      },
      set: function (state) {
        this.$store.dispatch("sidebar/setDrawerState", state);
      },
    },
  },
  methods: {
    setDrawerState(state) {
      this.$store.dispatch("sidebar/setDrawerState", state);
    },
    toggleDrawer() {
      this.$store.dispatch("sidebar/toggleDrawer");
    },
  },
  watch: {
    minify(newValue) {
      this.mini = newValue;
    },
    smallScreen(newValue) {
      if (newValue) {
        this.setDrawerState(false);
        this.mini = false;
      }
    },
  },
  created() {
    if (this.smallScreen) {
      this.setDrawerState(false);
      this.mini = false;
    } else {
      this.mini = this.minify;
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;700&display=swap");
.app-name {
  font-family: Signika, serif;
  font-weight: 650;
  font-size: 1.5rem;
}
.theme--light {
  .app-name {
    color: rgba(0, 0, 0, 0.75);
  }

  .v-list-item {
    margin-top: 5px;
    margin-bottom: 5px;
    &.highlighted {
      background-image: linear-gradient(
        to right,
        #772bfb,
        #8341f1,
        #8d52e8,
        #9562de,
        #9b71d4
      );
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      color: #fff;
      &::before {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }
    }
  }
}

.theme--dark {
  .v-list-item {
    margin-top: 5px;
    margin-bottom: 5px;
    &.v-list-item--link:not(.v-list-item--disabled) {
      color: #b3b3b3;
      &:hover {
        &::before {
          border-top-right-radius: 50px;
          border-bottom-right-radius: 50px;
        }
      }
    }
    &.v-list-item--link.highlighted {
      background-image: linear-gradient(
        to right,
        #772bfb,
        #8341f1,
        #8d52e8,
        #9562de,
        #9b71d4
      );
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      color: #fff;
      &::before {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }
    }
  }
  .nd {
    background: var(--v-navBackground-base);
  }
}
</style>

<style>
.v-navigation-drawer__append {
  margin-bottom: 90px;
}
</style>
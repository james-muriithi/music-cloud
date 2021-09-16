<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    :permanent="showDrawer"
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
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-fire", path: "/" },
        { title: "Search", icon: "mdi-magnify", path: "/search" },
        {
          title: "Recently Added",
          icon: "mdi-music-note-plus",
          path: "/recent",
        },
        { title: "Top Songs", icon: "mdi-chart-line-variant", path: "/songs" },
        {
          title: "Top Artists",
          icon: "mdi-account-music-outline",
          path: "/artists",
        },
        { title: "New Album", icon: "mdi-album", path: "/albums" },
        { title: "Playlists", icon: "mdi-playlist-music", path: "/playlists" },
      ],
      mini: this.minify,
    };
  },
  computed: {
    minify() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    showDrawer() {
      return !this.$vuetify.breakpoint.smAndDown;
    },
  },
  watch: {
    minify(newValue) {
      this.mini = newValue;
    },
    showDrawer(newValue) {
      this.drawer = newValue;
    },
  },
  created() {
    this.mini = this.minify;
    this.drawer = this.showDrawer;
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
<template>
  <v-card elevation="0" class="card">
    <v-app-bar flat class="app-bar">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <search-input v-if="searchPage" />

      <v-btn to="/search" icon v-else class="mr-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <theme-toggle class="ml-2 ml-sm-0" />
    </v-app-bar>
  </v-card>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import ThemeToggle from "./ThemeToggle.vue";

export default {
  name: "AppBar",
  components: {
    ThemeToggle,
    SearchInput,
  },
  computed: {
    searchPage() {
      return this.$route.name == "search";
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch("sidebar/toggleDrawer");
    },
  },
};
</script>

<style lang="scss" scoped>
.app-bar {
  background: var(--v-background-base) !important;
}
.card {
  margin-bottom: 8px;
}
</style>

<style lang="scss">
.app-bar {
  .v-text-field__details {
    display: none !important;
    margin: 0 !important;
  }
  .v-text-field {
    max-width: 200px !important;
    margin-right: 10px !important;
    @media screen and (min-width: 992px) {
      max-width: 300px !important;
      margin-right: 20px !important;
    }
  }
}
</style>
<template>
  <v-card elevation="0" class="card">
    <v-app-bar flat class="app-bar">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <theme-toggle class="ml-2 ml-sm-0" />
    </v-app-bar>
  </v-card>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue';

export default {
  name: "AppBar",
  components: {
    ThemeToggle
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
.card{
    margin-bottom: 8px;
}
</style>
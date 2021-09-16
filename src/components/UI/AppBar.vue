<template>
  <v-card elevation="0" class="card">
    <v-app-bar flat class="app-bar">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
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
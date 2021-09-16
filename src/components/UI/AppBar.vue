<template>
  <v-app-bar density="compact" absolute outlined elevation="0" class="white">
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
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
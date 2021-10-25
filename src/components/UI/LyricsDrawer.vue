<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="400"
    :permanent="drawer"
    fixed
    right
  >
    <v-container>
      <v-btn icon @click="closeDrawer">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LyricsDrawer",
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    closeDrawer() {
      this.drawer = false;
    },
  },
};
</script>
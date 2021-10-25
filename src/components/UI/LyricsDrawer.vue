<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :width="400"
    :permanent="showDrawer"
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
  computed: {
    showDrawer: {
      get: function () {
        return this.$store.getters["lyrics/showDrawer"];
      },
      set: function (state) {
        this.$store.dispatch("lyrics/setDrawerState", state);
      },
    },
  },
  methods: {
    closeDrawer() {
      this.$store.dispatch("lyrics/setDrawerState", false);
    },
  },
};
</script>
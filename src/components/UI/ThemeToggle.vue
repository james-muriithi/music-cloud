<template>
  <div>
    <v-tooltip v-if="!$vuetify.theme.dark" top data-app>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="primary" small fab @click="darkMode">
          <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
        </v-btn>
      </template>
      <span>Dark Mode On</span>
    </v-tooltip>

    <v-tooltip v-else top data-app>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="secondary" small fab @click="darkMode">
          <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
        </v-btn>
      </template>
      <span>Dark Mode Off</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "ThemeToggle",
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
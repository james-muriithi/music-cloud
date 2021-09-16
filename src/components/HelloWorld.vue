<template>
  <v-container>
    <div>
      <div class="purple darken-2 text-center">
    <span class="white--text">Lorem ipsum</span>
  </div>
      <v-tooltip v-if="!$vuetify.theme.dark" bottom data-app>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="primary" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span class="primary--text">Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom data-app>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="secondary" small fab @click="darkMode">
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

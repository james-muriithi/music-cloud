<template>
  <div>
    <v-tooltip v-if="!isDark" bottom data-app>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="primary" small fab @click="darkMode">
          <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
        </v-btn>
      </template>
      <span class="caption">Dark Mode On</span>
    </v-tooltip>

    <v-tooltip v-else bottom data-app>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="secondary" small fab @click="darkMode">
          <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
        </v-btn>
      </template>
      <span class="caption">Dark Mode Off</span>
    </v-tooltip>
  </div>
</template>

<script>
import { saveToLocalStorage } from "@/helpers/index.js";
export default {
  name: "ThemeToggle",
  computed: {
    isDark(){
      return this.$vuetify.theme.dark;
    }
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      saveToLocalStorage("theme", this.$vuetify.theme.dark ? "dark" : "light");
    },
  },
};
</script>
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

import { getFromLocalStorage } from "@/helpers/index.js";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: getFromLocalStorage("theme") != "light",
    themes: {
      light: {
        primary: "#772bfb",
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: "#ffffff",
        cardBackground: "#fff",
        songTitleColor: "#181818",
        artistColor: "#333333",
      },
      dark: {
        // primary: colors.blue.lighten3,
        primary: "#772bfb",
        background: "#121212",
        navBackground: "#121212",
        cardBackground: "#181818",
        songTitleColor: "#f2f2f2",
        artistColor: "#d9d9d9",
      },
    },
    options: {
      // themeCache: {
      //     get: key = > localStorage.getItem(key),
      //     set: (key, value) => localStorage.setItem(key, value),
      // },
      customProperties: true,
    },
  },
});

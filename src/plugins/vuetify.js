import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#772bfb",
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
                background: colors.indigo.lighten5,
            },
            dark: {
                primary: colors.blue.lighten3,
                background: "#121212",
                navBackground: "#121212",
            },
        },
        options: {
            // themeCache: {
            //     get: key = > localStorage.getItem(key),
            //     set: (key, value) => localStorage.setItem(key, value),
            // },
            customProperties: true,
        },
    }
});
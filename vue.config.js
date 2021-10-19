module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Music Cloud - Vue Music Player";
      args[0].description =
        "A music app that consumes apple music API and built using Vue, Vuex, Vue Router and Vuetify";
      args[0].base_url = "https://musik-cloud.netlify.app/";
      args[0].image = args[0].base_url + "logo.png";
      args[0].meta = {
        "theme-color": "#512DA8",
        robots: "follow, index",
        description: args[0].description,
        image: args[0].image,
        locale: {
          property: "og:locale",
          content: "en_US",
        },
        type: {
          property: "og:type",
          content: "website",
        },
        "og-site_name": {
          property: "og:site_name",
          content: "Music Cloud",
        },
        "og-url": {
          property: "og:url",
          content: args[0].base_url,
        },
        "og-title": {
          property: "og:title",
          content: args[0].title,
        },
        "og-image": {
          property: "og:image",
          content: args[0].image,
        },
        "og-description": {
          property: "og:description",
          content: args[0].description,
        },
        "og-image-height": {
          property: "og:image:height",
          content: 400,
        },
        "og-image-width": {
          property: "og:image:width",
          content: 400,
        },
        "og-image-type": {
          property: "og:image:type",
          content: "image/png",
        },
        "og-image-alt": {
          property: "og:image:alt",
          content: args[0].title,
        },
        "twitter-card": {
          property: "twitter:card",
          content: "summary_large_image",
        },
        "twitter-title": {
          property: "twitter:title",
          content: args[0].title,
        },
        "twitter-description": {
          property: "twitter:description",
          content: args[0].description,
        },
        "twitter-image": {
          property: "twitter:image",
          content: args[0].image,
        },
        "twitter-creator": {
          property: "twitter:creator",
          content: "@jam_es_muriithi",
        },
      };
      return args;
    });
  },
  transpileDependencies: ["vuetify"],
};

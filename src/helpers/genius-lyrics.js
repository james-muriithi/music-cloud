import { getLyrics } from "genius-lyrics-api";

function getSongLyrics(title, artist) {
  const options = {
    apiKey: process.env.VUE_APP_GENIUS_TOKEN,
    title,
    artist,
    optimizeQuery: true,
  };

  getLyrics(options).then((lyrics) => console.log(lyrics));
}

export { getSongLyrics };

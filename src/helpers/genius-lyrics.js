import axios from "axios";
import { getSafe } from "./index";

const myAxios = axios;

myAxios.defaults.headers.common = { accept: "*/*" };

async function fetchLyrics(title, artist) {
  let hits = await fetchHits(title, artist);
  // trial 1
  try {
    const songId = await getHitsFromResponse(hits, title, artist);
    return fetchSongLyrics(songId);
  } catch (e) {
    console.log(e.message);
  }

  // trial 2
  try {
    let newSongName = getSafe(() => title.match(/^[^(]*/)[0], null);
    if (!newSongName) {
      throw new Error("Lyrics not found.");
    }
    newSongName = newSongName.replace(/\s+$/, "");

    hits = await fetchHits(artist, newSongName);

    const songId = await getHitsFromResponse(hits, newSongName, artist);
    return fetchSongLyrics(songId);
  } catch (error) {
    throw new Error(error.message);
  }
}

function fetchSongLyrics(songId) {
  return myAxios
    .get(
      "https://api.genius.com/songs/" + songId,
      {
        params: {
          access_token: process.env.VUE_APP_GENIUS_TOKEN,
        },
      },
      { headers: { accept: "*/*" } }
    )
    .then((d) => {
      return d.data.response.song.embed_content;
    })
    .catch((e) => {
      console.log(e);
      throw new Error("Error fetching lyrics");
    });
}

function fetchHits(title, artist) {
  return myAxios
    .get(
      `https://api.genius.com/search?q=${title} ${artist}`,
      {
        params: {
          access_token: process.env.VUE_APP_GENIUS_TOKEN,
        },
      },
      { headers: { accept: "*/*" } }
    )
    .then((d) => d.data);
}

function getHitsFromResponse(searchResponse, songName, artistName) {
  return new Promise((resolve, reject) => {
    let hit = null;
    for (let response of searchResponse.response.hits) {
      const result = response.result;
      const isSong = response.type === "song";
      const isSameSong =
        stringSimilarity(result.title_with_featured, songName) > 0.8 ||
        stringSimilarity(result.title, songName) > 0.8;
      const isSameArtist =
        stringSimilarity(result.primary_artist.name, artistName) > 0.8;
      if (isSong && isSameSong && isSameArtist) {
        hit = result.id;
        break;
      }
    }
    if (!hit) {
      return reject(new Error("Lyrics not found."));
    }
    resolve(hit);
  });
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

function stringSimilarity(s1, s2) {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  let longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

export { fetchLyrics };

import {
  extractAlbums,
  extractPlaylists,
  extractSongs,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../../helpers";
import { fetchBrowseData } from "../../../helpers/apple-music";

export default {
  async fetchBrowseData(
    { commit },
    { limit = 20, forceUpdate = false, albumLimit = 12, playlistLimit = 4 } = {}
  ) {
    let savedData = getFromLocalStorage("browse-data");

    try {
      savedData = JSON.parse(savedData);
    } catch (error) {
      console.log(error);
    }

    let data;

    if (savedData && savedData.expiry_date > Date.now() && !forceUpdate) {
      data = savedData;
    } else {
      data = await fetchBrowseData(limit);
      data.expiry_date = Date.now() + 3600000;
      saveToLocalStorage("browse-data", JSON.stringify(data));
    }

    let songs = extractSongs(data.songs[0].data);
    const albums = extractAlbums(data.albums[0].data, albumLimit);
    const playlists = extractPlaylists(data.playlists[0].data, playlistLimit);

    if (savedData && !forceUpdate) {
      songs = songs.slice(0, limit);
    }

    commit("setRecentSongs", songs);
    commit("setTopAlbums", albums);
    commit("setTopPlaylists", playlists);
  },
  toggleFavouriteSong({ commit, getters }, { songId }) {
    if (getters.isSongFavourite(songId)) {
      commit("unFavouriteSong", { songId });
    } else {
      commit("favouriteSong", { songId });
    }

    saveToLocalStorage("favourites", JSON.stringify(getters.favourites));
  },
  fetchFavourites({ commit, getters }) {
    let savedData = getFromLocalStorage("favourites");

    try {
      savedData = JSON.parse(savedData);
    } catch (error) {
      console.log(error);
      savedData = getters.favourites;
    }
    if (!savedData) {
      savedData = getters.favourites;
    }

    commit("setFavourites", { favourites: savedData });
  },
};

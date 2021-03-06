import { extractAlbumData } from "../../helpers";
import { fetchAlbum } from "../../helpers/apple-music";

export default {
  namespaced: true,
  state: {
    album: {
      id: null,
      artist: null,
      cover: null,
      content_rating: null,
      copyright: null,
      genres: [],
      is_complete: null,
      is_single: false,
      name: null,
      record_label: null,
      release_date: null,
      track_count: 0,
      url: null,
      is_playing: false,
      songs: [],
    },
  },

  getters: {
    currentAlbum(state) {
      return state.album;
    },
    isAlbumPlaying(state) {
      return state.album.is_playing;
    },
    albumSongs(state) {
      return state.album.songs;
    },
  },
  mutations: {
    setAlbum(state, { album }) {
      state.album = Object.assign(album);
    },
    setAlbumPlaying(state) {
      state.album.is_playing = true;
    },
    setAlbumNotPlaying(state) {
      state.album.is_playing = false;
    },
  },
  actions: {
    async fetchAlbum({ commit }, albumId) {
      let album = await fetchAlbum(albumId);
      album = extractAlbumData(album);
      commit("setAlbum", { album });
    },
    async playAlbum({ dispatch, getters, commit }, albumId) {
      await dispatch("fetchAlbum", albumId);
      if (getters.albumSongs.length > 0) {
        commit('setAlbumPlaying');
        dispatch(
          "player/play",
          {
            song: getters.albumSongs[0],
            collection: "album",
          },
          {
            root: true,
          }
        );
      }
    },
  },
};

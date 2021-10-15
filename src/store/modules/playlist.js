import { extractPlaylistData } from "../../helpers";
import { fetchPlaylist } from "../../helpers/apple-music";

export default {
  namespaced: true,
  state: {
    playlist: {
      id: null,
      cover: null,
      curator_name: null,
      name: null,
      last_modified: null,
      description: null,
      url: null,
      is_chart: false,
      is_playing: false,
      songs: [],
    },
  },

  getters: {
    currentPlaylist(state) {
      return state.playlist;
    },
    isPlaylistlaying(state) {
      return state.playlist.is_playing;
    },
    playlistSongs(state) {
      return state.playlist.songs;
    },
  },
  mutations: {
    setPlaylist(state, { playlist }) {
      state.playlist = Object.assign(playlist);
    },
    setPlaylistPlaying(state) {
      state.playlist.is_playing = true;
    },
    setPlaylistNotPlaying(state) {
      state.playlist.is_playing = false;
    },
  },
  actions: {
    async fetchPlaylist({ commit }, playlistId) {
      let playlist = await fetchPlaylist(playlistId);
      playlist = extractPlaylistData(playlist);
      commit("setPlaylist", { playlist });
    },
    async playPlaylist({ dispatch, getters, commit }, playlistId) {
      await dispatch("fetchPlaylist", playlistId);
      if (getters.playlistSongs.length > 0) {
        commit('setPlaylistPlaying');

        dispatch(
          "player/play",
          {
            song: getters.playlistSongs[0],
            collection: "playlist",
          },
          {
            root: true,
          }
        );
      }
    },
  },
};

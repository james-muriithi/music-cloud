import { getSafe } from "../../helpers";
import { addSongMetaData } from "../../helpers/media-session";

const defaultCover =
  "https://is1-ssl.mzstatic.com/image/thumb/Features127/v4/75/f9/6f/75f96fa5-99ca-0854-3aae-8f76f5cb7fb5/source/100x100bb.jpeg";

export default {
  namespaced: true,
  state: {
    isPlaying: false,
    timeChangedByUser: false,
    volume: 100,
    shuffle: false,
    // Repeat mode , 0 = no repeat, 1 = one, 2 = all
    repeat: 2,
    currentlyPlaying: null,
    queue: [],
    playbackTimeInfo: {
      currentTime: 0,
      songDuration: 0,
    },
  },
  getters: {
    volume(state) {
      return state.volume;
    },
    currentPlaying(state) {
      const currentPlaying = state.currentlyPlaying;

      return {
        id: getSafe(() => currentPlaying.id, 0),
        title: getSafe(() => currentPlaying.title, ""),
        album: getSafe(() => currentPlaying.album, ""),
        artist: getSafe(() => currentPlaying.artist, ""),
        cover: getSafe(() => currentPlaying.cover, defaultCover),
        isPlaying: state.isPlaying,
        duration: getSafe(() => currentPlaying.duration, ""),
        preview_url: getSafe(() => currentPlaying.preview_url, ""),
        playbackTimeInfo: {
          currentTime: state.playbackTimeInfo.currentTime,
          songDuration: state.playbackTimeInfo.songDuration,
        },
        url: getSafe(() => currentPlaying.url, ""),
      };
    },
    isPlaying(state) {
      return state.isPlaying;
    },
    timeChangedByUser(state) {
      return state.timeChangedByUser;
    },
    currentTime(state) {
      return state.playbackTimeInfo.currentTime;
    },
    repeat(state) {
      return state.repeat;
    },
    shuffle(state) {
      return state.shuffle;
    },
  },
  mutations: {
    setVolumeState(state, { volume }) {
      state.volume = volume;
    },
    setShuffle(state, { shuffle }) {
      state.shuffle = shuffle;
    },
    setRepeat(state, { repeat }) {
      state.repeat = repeat;
    },
    setCurrentlyPlaying(state, { currentlyPlaying }) {
      state.currentlyPlaying = Object.assign(currentlyPlaying);
    },
    setPlaybackState(state, { playbackState }) {
      state.playbackState = playbackState;
    },
    setPlaybackTime(state, { playtimeInfo }) {
      state.playbackTimeInfo = playtimeInfo;
    },
    setIsPlaying(state, { isPlaying }) {
      state.isPlaying = isPlaying;
    },
    updateSongDuration(state, { duration }) {
      state.playbackTimeInfo.songDuration = duration;
    },
    updateSongCurrentTime(state, { currentTime }) {
      state.playbackTimeInfo.currentTime = currentTime;
    },
    setTimeChangedByUser(state, value) {
      state.timeChangedByUser = value;
    },
    setSongsQueue(state, songs) {
      state.queue = songs;
    },
  },
  actions: {
    setVolume({ commit }, { volume }) {
      const volumeValue = parseFloat(volume);
      commit("setVolumeState", { volume: volumeValue });
    },
    setIsPlaying({ commit }, { isPlaying }) {
      commit("setIsPlaying", { isPlaying });
    },
    async play({ commit, rootGetters }, { song, collection }) {
      //pause current playing song
      await commit("setIsPlaying", { isPlaying: false });
      // add song to current playing
      await commit("setCurrentlyPlaying", { currentlyPlaying: song });
      // set song as playing
      await commit("setIsPlaying", { isPlaying: true });
      // add song metadata
      addSongMetaData(song.title, song.artist, song.cover, song.album);

      switch (collection) {
        case "recent-songs":
          commit("setSongsQueue", rootGetters["recentSongs"]);
          break;
        case "album":
          commit("setSongsQueue", rootGetters["album/albumSongs"]);
          break;
        case "playlist":
          commit("setSongsQueue", rootGetters["playlist/playlistSongs"]);
          break;

        default:
          break;
      }
    },
    updateSongDuration({ commit }, { duration }) {
      commit("updateSongDuration", { duration });
    },
    updateSongCurrentTime({ commit }, { currentTime }) {
      commit("updateSongCurrentTime", { currentTime });
    },
    setTimeChangedByUser({ commit }, value) {
      commit("setTimeChangedByUser", value);
    },
    playNext({ state, dispatch }) {
      if (state.repeat != 1 && state.queue && state.queue.length > 0) {
        const currentPlayingIndex =
          state.queue.findIndex(
            (song) => song.id == state.currentlyPlaying.id
          ) || 0;

        let nextSong = null;
        // if its not the last song
        if (currentPlayingIndex + 1 < state.queue.length) {
          if (!state.shuffle) {
            nextSong = state.queue[currentPlayingIndex + 1];
          }

          dispatch("play", { song: nextSong });
        } else {
          // if repeat all play first song when end reached
          if (state.repeat == 2) {
            if (!state.shuffle) {
              nextSong = state.queue[0];

              dispatch("play", { song: nextSong });
            }
          }
        }
      }
    },
    playPrevious({ state, dispatch }) {
      if (state.queue.length > 0) {
        const currentPlayingIndex =
          state.queue.findIndex(
            (song) => song.id == state.currentlyPlaying.id
          ) || 0;
        let prevSong = null;
        // if its not the last song
        if (currentPlayingIndex - 1 >= 0) {
          if (!state.shuffle) {
            prevSong = state.queue[currentPlayingIndex - 1];
          }

          dispatch("play", { song: prevSong });
        }
      }
    },
    toggleRepeat({ commit, getters }) {
      const repeat = getters.repeat == 2 ? 0 : getters.repeat + 1;
      commit("setRepeat", { repeat });
    },
    toggleShuffle({ commit, getters }) {
      commit("setShuffle", { shuffle: !getters.shuffle });
    },
  },
};

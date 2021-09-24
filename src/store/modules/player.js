import { getSafe } from "../../helpers";

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
        repeat: 0,
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
        }
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
    },
    actions: {
        setVolume({ commit }, { volume }) {
            const volumeValue = parseFloat(volume);
            commit("setVolumeState", { volume: volumeValue });
        },
        setIsPlaying({ commit }, { isPlaying }) {
            commit("setIsPlaying", { isPlaying });
        },
        async play({ commit }, { song }) {
            commit("setIsPlaying", { isPlaying: true });
            commit("setCurrentlyPlaying", { currentlyPlaying: song });
        },
        updateSongDuration({ commit }, { duration }) {
            commit("updateSongDuration", { duration });
        },
        updateSongCurrentTime({ commit }, { currentTime }) {
            commit("updateSongCurrentTime", { currentTime });
        },
        setTimeChangedByUser({ commit }, value) {
            commit('setTimeChangedByUser', value);
        }
    },
};
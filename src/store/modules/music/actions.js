import { extractSongs, fetchBrowseData } from '../../../helpers/apple-music';

export default {
    async fetchBrowseData({ commit }, { limit = 20 } = {}) {
        const data = await fetchBrowseData(limit);
        const songs = extractSongs(data.songs[0].data);

        commit('setRecentSongs', songs)
    }
};
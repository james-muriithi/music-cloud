import { fetchBrowseData } from '@/helpers/apple-music'

export default {
    async fetchBrowseData({ commit }, limit = 20) {
        const data = await fetchBrowseData(limit);
        console.log(data);
        commit('setRecentSongs', [])
    }
};
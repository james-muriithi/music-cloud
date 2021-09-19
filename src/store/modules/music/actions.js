import { extractAlbums, extractPlaylists, extractSongs, getFromLocalStorage, saveToLocalStorage } from '../../../helpers';
import { fetchBrowseData } from '../../../helpers/apple-music';

export default {
    async fetchBrowseData({ commit }, { limit = 20 } = {}) {

        let savedData = getFromLocalStorage('browse-data');

        try {
            savedData = JSON.parse(savedData);
        } catch (error) {
            console.log(error);
        }

        let data;

        if (savedData && savedData.expiry_date > 1632087860490) {
            data = savedData;
        } else {
            data = await fetchBrowseData(limit);
            data.expiry_date = Date.now() + 3600000;
            saveToLocalStorage('browse-data', JSON.stringify(data));
        }



        const songs = extractSongs(data.songs[0].data);
        const albums = extractAlbums(data.albums[0].data, 12);
        const playlists = extractPlaylists(data.playlists[0].data, 4);

        commit('setRecentSongs', songs);
        commit('setTopAlbums', albums);
        commit('setTopPlaylists', playlists);
    }
};
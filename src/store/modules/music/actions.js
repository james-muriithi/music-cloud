import { extractAlbums, extractPlaylists, extractSongs } from '../../../helpers';
import { fetchBrowseData } from '../../../helpers/apple-music';

export default {
    async fetchBrowseData({ commit }, { limit = 20 } = {}) {
        const data = await fetchBrowseData(limit);
        const songs = extractSongs(data.songs[0].data);
        const albums = extractAlbums(data.albums[0].data, 12);
        const playlists = extractPlaylists(data.playlists[0].data, 4);

        commit('setRecentSongs', songs);
        commit('setTopAlbums', albums);
        commit('setTopPlaylists', playlists);
    }
};
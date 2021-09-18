export default {
    setRecentSongs(state, songs) {
        console.log(songs);
        // state.music.recentSongs = songs
    },
    setTopAlbums(state, albums) {
        state.music.topAlbums = albums
    },
    setTopPlaylists(state, playlists) {
        state.music.topPlaylists = playlists
    },
    setTopArtists(state, artists) {
        state.music.topArtists = artists
    },
};
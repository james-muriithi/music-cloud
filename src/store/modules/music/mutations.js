export default {
  setRecentSongs(state, songs) {
    state.music.recentSongs = songs;
  },
  setTopAlbums(state, albums) {
    state.music.topAlbums = albums;
  },
  setTopPlaylists(state, playlists) {
    state.music.topPlaylists = playlists;
  },
  setTopArtists(state, artists) {
    state.music.topArtists = artists;
  },
  favouriteSong(state, { songId }) {
    state.favourites.songs.push(songId);
  },
  unFavouriteSong(state, { songId }) {
    state.favourites.songs = state.favourites.songs.filter(
      (id) => id != songId
    );
  },
  setFavourites(state, { favourites }) {
    // state.favourites = Object.assign(favourites);
    state.favourites = favourites;
  },
};

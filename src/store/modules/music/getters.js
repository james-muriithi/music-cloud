export default {
  recentSongs(state) {
    return state.music.recentSongs;
  },
  topAlbums(state) {
    return state.music.topAlbums;
  },
  topArtists(state) {
    return state.music.topArtists;
  },
  topPlaylists(state) {
    return state.music.topPlaylists;
  },
  favourites(state) {
    return state.favourites;
  },
  favouriteSongs(state) {
    return state.favourites.songs;
  },
  favouriteArtists(state) {
    return state.favourites.artists;
  },
  favouriteAlbums(state) {
    return state.favourites.albums;
  },
  favouritePlaylists(state) {
    return state.favourites.playlists;
  },
  isSongFavourite(state) {
    return function(songId) {
      return state.favourites.songs.some((id) => songId == id);
    };
  },
};

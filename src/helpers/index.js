function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function extractAlbums(albums, limit = 6) {
    let formattedAlbums = albums.map((album) => {
        return {
            id: album.id,
            artist: album.attributes.artistName,
            track_count: album.attributes.trackCount,
            genres: album.attributes.genreNames,
            title: album.attributes.name,
            url: album.attributes.url,
            is_single: album.attributes.isSingle,
            content_rating: album.attributes.contentRating,
            release_date: album.attributes.releaseDate,
            record_label: album.attributes.recordLabel,
            cover: album.attributes.artwork.url,
            copyright: album.attributes.copyright
        };
    });

    return formattedAlbums.slice(0, limit);
}

function extractSongs(songs) {
    let formattedSongs = songs.map((song) => {
        return {
            id: song.id,
            artist: song.attributes.artistName,
            album: song.attributes.albumName,
            genres: song.attributes.genreNames,
            title: song.attributes.name,
            url: song.attributes.url,
            preview_url: song.attributes.previews[0].url || "",
            release_date: song.attributes.releaseDate,
            duration: song.attributes.durationInMillis,
            cover: song.attributes.artwork.url,
        };
    });

    return formattedSongs;
}

function extractPlaylists(playlists, limit = 4) {
    let formattedPlaylists = playlists.map((playlist) => {
        return {
            id: playlist.id,
            description: playlist.attributes.description,
            last_modified: playlist.attributes.lastModifiedDate,
            title: playlist.attributes.name,
            url: playlist.attributes.url,
            cover: playlist.attributes.artwork.url,
            curator_name: playlist.attributes.curatorName,
            playlist_type: playlist.attributes.playlistType,
        };
    });

    return formattedPlaylists.slice(0, limit);
}

export { saveToLocalStorage, getFromLocalStorage, extractSongs, extractAlbums, extractPlaylists };
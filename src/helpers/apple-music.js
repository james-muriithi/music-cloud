import axios from 'axios'

const API_BASE_URL = "https://api.music.apple.com/v1/";

const token = process.env.VUE_APP_TOKEN;

axios.defaults.baseURL = API_BASE_URL
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

function fetchBrowseData(limit) {
    return axios.get('catalog/us/charts', { params: { types: "albums,songs,playlists", limit } })
        .then(res => {
            return res.data.results
        })
}

function extractSongs(songs) {
    let formattedSongs = songs.map((song) => {
        let formattedSong = {};
        formattedSong.id = song.id;
        formattedSong.artist = song.attributes.artistName;
        formattedSong.album = song.attributes.albumName;
        formattedSong.genres = song.attributes.genreNames;
        formattedSong.title = song.attributes.name;
        formattedSong.url = song.attributes.url;
        formattedSong.title = song.attributes.name;
        formattedSong.preview_url = song.attributes.previews[0].url || "";
        formattedSong.release_date = song.attributes.releaseDate;
        formattedSong.duration = song.attributes.durationInMillis;
        formattedSong.cover = song.attributes.artwork.url;

        return formattedSong;
    });

    return formattedSongs;
}

export {
    fetchBrowseData,
    extractSongs
};
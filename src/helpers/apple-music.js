import axios from "axios";

const API_BASE_URL = "https://api.music.apple.com/v1/";

const token = process.env.VUE_APP_TOKEN;

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

function fetchBrowseData(limit) {
  return axios
    .get("catalog/us/charts", {
      params: { types: "albums,songs,playlists", limit },
    })
    .then((res) => {
      return res.data.results;
    });
}

function fetchAlbum(albumId) {
  return axios
    .get("catalog/us/albums", { params: { ids: albumId } })
    .then((res) => {
      return res.data.data[0];
    });
}

function fetchPlaylist(playlistId) {
  return axios
    .get("catalog/us/playlists", { params: { ids: playlistId } })
    .then((res) => {
      return res.data.data[0];
    });
}

function search(keyword, limit = 10) {
  const types = "albums,artists,playlists,songs";
  return axios
    .get("catalog/us/search", {
      params: {
        limit,
        types,
        term: encodeURIComponent(keyword).replace(/%20/g, "+"),
      },
    })
    .then((res) => {
      return res.data;
    });
}

export { fetchBrowseData, fetchAlbum, fetchPlaylist, search };

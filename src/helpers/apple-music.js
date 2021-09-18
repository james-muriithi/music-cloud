import axios from 'axios'

const API_BASE_URL = "https://api.music.apple.com/v1/";

const token = process.env.VUE_APP_TOKEN;

axios.defaults.baseURL = API_BASE_URL
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

function fetchBrowseData(limit) {
    return axios.get('catalog/ke/charts', { params: { types: "albums,songs,playlists", limit } })
        .then(res => {
            console.log(res.data);
            return res.data.results
        })
}


export {
    fetchBrowseData
};
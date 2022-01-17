import axios from 'axios'

const API_KEY = 'AIzaSyCE1l1y89AAVyCtSb9EP2JF1lgG6HH2dlc'
export const apiYoutube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: API_KEY,
        maxResults: 50
    }
})


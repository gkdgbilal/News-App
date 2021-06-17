import axios from "axios";

export default axios.create({
    baseURL: 'https://newsapi.org/v2/'
})

// https://newsapi.org/v2/top-headlines?country=us&apiKey=a790e673f1dc4c13a7051b9cf4d3fc39

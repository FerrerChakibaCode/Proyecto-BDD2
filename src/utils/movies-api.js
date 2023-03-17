import axios from "axios";

export async function fetchMovies(page) {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=69e576331d7baf30beab2a4c59945ff5&page=${page}`)
}

export async function fetchUpcomingMovies(page) {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=69e576331d7baf30beab2a4c59945ff5&page=${page}`)
}

export async function fetchMovieQuery(search){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=69e576331d7baf30beab2a4c59945ff5&query=${search}`)
}

export async function fetchMovieById(movie_id) {
    const link = "https://api.themoviedb.org/3/movie/" + movie_id + "?api_key=69e576331d7baf30beab2a4c59945ff5"
    return axios.get(link)
}

export async function fetchLanguages() {
    return axios.get("https://api.themoviedb.org/3/configuration/languages?api_key=69e576331d7baf30beab2a4c59945ff5")
}

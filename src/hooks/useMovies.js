import { useState } from "react";
import { fetchMovies, fetchUpcomingMovies, fetchMovieQuery } from "../utils/movies-api";
import { fetchMovieById } from "../utils/movies-api";

export function useMovies() {
    const [movies, setMovies] = useState([])
    const [upcoming, setUpcomingMovies] = useState([])
    const [total_pages, setPages] = useState()
    const [isLoading, setLoading] = useState(false);
    const [movie, setMovie] = useState({})

    const getUpcomingMovies = async (page) => {
        setLoading(true)
        const {data} = await fetchUpcomingMovies(page)
        
        setPages(data.total_pages)
        setUpcomingMovies(data.results)
        setLoading(false)
    }
    
    const getMovies = async (page) => {
        setLoading(true)
        const {data} = await fetchMovies(page)
        
        setPages(data.total_pages)
        setMovies(data.results)
        setLoading(false)
    }
    const getMovieQuery = async (search) => {
        setLoading(true)
        const {data} = await fetchMovieQuery(search)
        
        setMovies(data.results)
        setLoading(false)
    }

    const getMovieById = async (movie_id) => {
        setLoading(true)
        const {data} = await fetchMovieById(movie_id)
        setMovie(data)
        setLoading(false)
    }

    return {movies, upcoming, total_pages, isLoading, getMovies, getUpcomingMovies, getMovieQuery, getMovieById, movie}
}
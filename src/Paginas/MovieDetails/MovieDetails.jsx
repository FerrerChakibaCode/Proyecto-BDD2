import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { useLanguages } from "../../hooks/useLanguages";

export function MovieDetails() {
    const { movie_id } = useParams();
    const { movie, isLoading, getMovieById } = useMovies(movie_id);
    const { languages, isLoadingLanguages, getLanguages } = useLanguages();


    useEffect(() => {
        getMovieById(movie_id);
        getLanguages();
    }, []);
    
    return (
        <div className="flex flex-col m-5 md:flex-row">
            <div className="w-full flex items-center justify-center content-center md:max-w-xs lg:max-w-sm">
                <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="poster" className="w-full max-w-md"/>
            </div>

            <div className="p-4 w-full text-xl md:text-2xl lg:text-3xl">
                <div className="flex items-center justify-center w-full md:justify-start md:mb-6">
                    <h1 className="text-4xl font-bold md:text-6xl">{movie.title}</h1>
                </div>
                    <h1 className=""><span className="font-semibold">Lista de generos:</span>&nbsp;{movie.genres && movie.genres.map(genre => genre.name).join(", ")}</h1>
                    <h1 className=""><span className="font-semibold">Lenguaje original:</span>&nbsp;
                    {languages && languages
                    .filter(language => language.iso_639_1 === movie.original_language)
                    .map(language => language.english_name)
                    }
                    </h1>
                    <h1 className=""><span className="font-semibold">Presupuesto:</span>&nbsp;${movie.budget}</h1>
                    <h1 className=""><span className="font-semibold">Descripción:</span>&nbsp;{movie.overview}</h1>
                    <h1 className=""><span className="font-semibold">Rating de popularidad:</span>&nbsp;{movie.popularity}</h1>
                    <h1 className=""><span className="font-semibold">Compañias de producción:</span>&nbsp;{movie.production_companies && movie.production_companies.map(company => company.name).join(", ")}</h1>
                    <h1 className=""><span className="font-semibold">Fecha de lanzamiento:</span>&nbsp;{movie.release_date}</h1>
                    <h1 className=""><span className="font-semibold">Estado de la película:</span>&nbsp;{movie.status}</h1>
            </div>
        </div>
    );
}
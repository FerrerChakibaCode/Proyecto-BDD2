import React, { useEffect, useState } from 'react'
import { MovieCard } from '../../Componentes/MovieCard/MovieCard'
import searchicon from '../../assets/search.png'
import { useMovies } from '../../hooks/useMovies'
import { useLanguages } from '../../hooks/useLanguages'
import { Link } from 'react-router-dom';

export function SearchPage() {

  const { movies, isLoading, getMovies, getMovieQuery } = useMovies();
  const { languages, isLoadingLanguages, getLanguages } = useLanguages();
  
  useEffect(() => {
    getMovies();
    getLanguages();
  }, []);

  const [value, setValue] = useState('');
  let search=[];

  const handleChange = event => {
    setValue(event.target.value);
    search = event.target.value.split(' ')
    getMovieQuery(search)
  };

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="flex flex-row justify-center h-15 w-11/12 bg-sky-700 my-5 p-4 rounded-full drop-shadow-lg">
        <div className="flex flex-row justify-center bg-gray-100 w-2/3 p-2 rounded-lg mx-5">
          <img src={searchicon} alt="(search icon)" className='w-[20px] h-[20px] mx-5'></img>
          <input onChange={handleChange} type="text" className="w-4/5 rounded-lg px-5 font-comfortaa" placeholder="Busca el título de una película"></input>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between m-4 gap-y-4 mt-8">
        {movies.map((movie, idx) => (
          <Link to={`/movie/${movie.id}`}>
              <MovieCard key={idx} movie={movie} languages={languages}/>
          </Link>
        ))}
      </div>
      
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { MovieCard } from '../../Componentes/MovieCard/MovieCard'
import { useMovies } from '../../hooks/useMovies'
import { useLanguages } from '../../hooks/useLanguages'
import { Link } from 'react-router-dom';

export function HomePage() {

  const { movies, upcoming, total_pages, isLoading, getMovies, getUpcomingMovies, getMovieQuery, getMovieById, movie } = useMovies();
  const { languages, isLoadingLanguages, getLanguages } = useLanguages();
  const [estrenos, setEstrenos] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies(page);
    getUpcomingMovies(page);
    getLanguages();
  }, []);

  function decide(page){
    if (estrenos===1){
      getUpcomingMovies(page);
    }else{
      getMovies(page)
    }
  }

  const nextPage = () => {
    if(page < total_pages) {
      setPage(prevPage=>prevPage+1)
      decide(page+1)
    }
  }

  const previousPage = () => {
    if(page !== 1) {
      setPage(prevPage=>prevPage-1)
      decide(page-1)
    }
  }

  const handleOnClick0 = () => {
    setPage(1)
    setEstrenos(0)
  }

  const handleOnClick1 = () => {
    setPage(1)
    setEstrenos(1)
  }
  
  return (
    <div>
      <h1 className="text-6xl font-bold font-anton ml-8 mt-4 text-gray-900">Peliculas</h1>
      <div className="flex items-stretch">
        <button onClick={handleOnClick1} className={`w-1/5 min-w-min px-5 py-2 font-comfortaa text-blue-900 rounded-lg shadow-md shadow-gray-500 transition duration-400 ease-out m-4 ${estrenos === 1 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2 hover:text-slate-300'}`}>Proximos estrenos</button>
        <button onClick={handleOnClick0} className={`w-1/5 min-w-min px-5 py-2 font-comfortaa text-blue-900 rounded-lg shadow-md shadow-gray-500 transition duration-400 ease-out m-4 ${estrenos === 0 ? 'bg-sky-700 text-gray-100' : 'border-solid border-slate-600 border-2 hover:text-slate-300'}`}>Peliculas</button>
      </div>
      <div className="flex flex-wrap items-center justify-between m-4 gap-y-4 mt-8">
        {estrenos===1 ?
        upcoming.map((movie, idx) => (
          <Link to={`/movie/${movie.id}`}>
              <MovieCard key={idx} movie={movie} languages={languages}/>
          </Link>
        ))
        :
        movies.map((movie, idx) => (
          <Link to={`/movie/${movie.id}`}>
              <MovieCard key={idx} movie={movie} languages={languages}/>
          </Link>
        ))
        }
      </div>
      <div className='flex justify-center'>
      <button onClick={previousPage} className={`w-1/10 px-5 py-2 font-comfortaa text-gray-100 font-bold rounded-lg shadow-md shadow-gray-500 transition duration-400 ease-out m-4 bg-sky-700 border-solid border-slate-600 border-2 hover:text-slate-300`}>&lt; </button>
      <p className={`w-1/10 px-5 py-2 font-anton text-gray-900 m-4`}>{page}</p>
      <button onClick={nextPage} className={`w-1/10 px-5 py-2 font-comfortaa text-gray-100 font-bold rounded-lg shadow-md shadow-gray-500 transition duration-400 ease-out m-4 bg-sky-700 border-solid border-slate-600 border-2 hover:text-slate-300`}>&gt;</button>
      </div>
    </div>
  )
}
 
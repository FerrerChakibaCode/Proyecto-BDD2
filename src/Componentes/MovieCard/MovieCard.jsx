import React from 'react';

export function MovieCard (props) {
    const { title, poster_path, original_language, popularity } = props.movie;

    return (
        <div className="rounded-3xl shadow-lg p-4 text-xl flex border-2 border-gray-100 items-center sm:h-48 sm:w-96 h-44 w-80">
                <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="poster" className="h-auto w-24"/>

            <div className="p-4">
                <h1 className="sm:text-2xl font-bold font-roboto text-xl text-blue-900 pb-2">{title}</h1>
                <h1 className="text-sm sm:text-base font-roboto-c text-slate-700"><span className="font-semibold">Popularidad:</span>&nbsp;{popularity}</h1>
                <h1 className="text-sm sm:text-base font-roboto-c text-slate-700"><span className="font-semibold">Idioma:</span>&nbsp;
                {props.languages && props.languages
                .filter(language => language.iso_639_1 === original_language)
                .map(language => language.english_name)
                }
                </h1>
            </div>
            
        </div>
    )
}
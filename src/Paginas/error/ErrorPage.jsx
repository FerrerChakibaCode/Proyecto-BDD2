import React from 'react'
import { HOME_URL } from '../../constantes/urls'


export default function ErrorPage() {
  return (
    <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-base font-semibold text-blue-800">404</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
    <p className="mt-6 text-base leading-7 text-gray-600">No pudimos encontrar la página que estas buscando</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a href={HOME_URL} className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition duration-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regresar al inicio</a>
    </div>
  </div>
</main>
  )
}

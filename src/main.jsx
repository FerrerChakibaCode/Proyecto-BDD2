import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes,Route,BrowserRouter} from "react-router-dom"
import {HOME_URL, LOGIN_URL, REGISTER_URL, MOVIES_URL, SEARCH_URL } from './constantes/urls'
import { Layout } from './Componentes/Layout/Layout'
import {HomePage} from './Paginas/Home/HomePage'
import {RegisterPage} from './Paginas/register/RegisterPage'
import { LoginPage } from './Paginas/login/LoginPage'
import { SearchPage } from './Paginas/Search/SearchPage'
import ErrorPage from './Paginas/error/ErrorPage'
import { MovieDetails } from './Paginas/MovieDetails/MovieDetails'
import {PrivateRoute} from './Componentes/PrivateRoutes/PrivateRoute'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path={HOME_URL} element={<LoginPage/>}/>
        <Route path={REGISTER_URL} element={<RegisterPage/>}/>
        <Route path={LOGIN_URL} element={<LoginPage/>}/>
        <Route path={MOVIES_URL} element={<PrivateRoute><HomePage/></PrivateRoute>}/>
        <Route path={SEARCH_URL} element={<PrivateRoute><SearchPage/></PrivateRoute>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        <Route path="/movie/:movie_id" element={<PrivateRoute><MovieDetails/></PrivateRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

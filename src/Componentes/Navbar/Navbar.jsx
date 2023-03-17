import { async } from '@firebase/util';
import React from 'react'
import { Link } from "react-router-dom";
import { HOME_URL, LOGIN_URL, REGISTER_URL, MOVIES_URL, SEARCH_URL } from '../../constantes/urls';
import { useUser } from '../../contexts/UserContext';
import { logout } from '../../firebase/auth-service';



export function Navbar() {
   const{user}=useUser();
   const handleLogout = async ()=>{
      await logout()
   }
  return (
    <nav id="header" className="w-full z-30 top-10 py-1 shadow-lg border-b bg-blue-900 font-comfortaa text-[14px]  ">
      <div className="w-full flex items-center justify-between mt-0 sm:px-6 py-2 px-1">
      <div className="group md:hidden block">
            <button
                className="outline-none focus:outline-none border px-3 py-1 bg-white flex items-center min-w-32 rounded-2xl"
            >
                <span className="pr-1 font-semibold flex-1">Menu</span>
                <span>
                <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
                    transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
                </span>
            </button>
            <ul
                className="bg-white border transform scale-0 group-hover:scale-100 absolute 
            transition duration-150 ease-in-out origin-top min-w-32"
            >
                <li className="px-3 py-1 hover:bg-gray-100 hover:font-bold"><Link to={MOVIES_URL}>Películas</Link></li>
                <li className="px-3 py-1 hover:bg-gray-100 hover:font-bold"><Link to={SEARCH_URL}>Buscador</Link></li>
            </ul>
            </div>
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 overflow-y-auto " id="menu">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-white font-bold pt-4 md:pt-0">
                  <li><Link to={MOVIES_URL} className="inline-block no-underline hover:text-gray-300 text-lg py-2 px-4 lg:-ml-2 transition duration-500 ease-out">Películas</Link></li>
                  <li><Link to={SEARCH_URL} className="inline-block no-underline hover:text-gray-300 text-lg py-2 px-4 lg:-ml-2 transition duration-500 ease-out">Buscador</Link></li>
               </ul>
            </nav>
         </div>
         {user&&(
           <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
           <div className="auth flex items-center w-full md:w-full">
              <button onClick={handleLogout} className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-700 hover:text-neutral-100 transition duration-400 ease-out mr-4 px-5 hover:font-bold">Logout</button>
           </div>
        </div> 
         )}


         {!user &&(<>
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
               <Link to={LOGIN_URL} className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-700 hover:text-neutral-100 transition duration-400 ease-out sm:mr-4 px-5 hover:font-bold sm:text-sm mr-1">Iniciar sesion</Link>
               <Link to={REGISTER_URL} className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-700 hover:text-neutral-100 transition duration-400 ease-out px-5 hover:font-bold">Registrarse</Link>
            </div>
         </div>
         </>)}
      </div>
   </nav>
  )
}

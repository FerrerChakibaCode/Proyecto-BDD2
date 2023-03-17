import { async } from '@firebase/util';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MOVIES_URL, REGISTER_URL } from '../../constantes/urls';
import { logInWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service';

export function LoginPage() {
    const navigate = useNavigate()
const[formData,setFormData]=useState({
    email:'',
    password:'',
})
const handleSigninWithGoogle = async ()=>{
    await signInWithGoogle();
    navigate(MOVIES_URL)
}

const onSubmit = async(event)=>{
    event.preventDefault();//evita que el form recargue la pagina
    const{email,password}=formData//form destructurado
    await logInWithEmailAndPassword(email,password);
    navigate(MOVIES_URL)
}
//en cada input utiliza la informacion del campo para agregarla al form existente
const handleOnChange = (event)=>{
    const{name,value}=event.target;
    setFormData({
        ...formData,
        [name]:value,
    })
}
    return (
    <div className="max-w-lg mx-auto p-8 rounded-3xl shadow-2xl my-12 border-slate-200 border">
        <h1 className="text-4xl font-medium text-center">Iniciar sesión</h1>
        <div className="mt-10 mb-4  flex flex-col items-center">
              <button onClick={handleSigninWithGoogle} className="w-2/3 text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-300 rounded-full text-slate-700 hover:shadow-md hover:scale-105 bg-white">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/>
                  <span>Login with Google</span>
              </button>
          <div className='text-center'>
            <p>---------------- o ----------------</p>
          </div>
        </div>
        <form action="" onSubmit={onSubmit} className="my-2">
            <div className="flex flex-col">
                    <input 
                    id="email" name="email" type="email" 
                    onChange={handleOnChange}
                    className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow mt-4" placeholder="Dirección de correo"/>

                    <input 
                    id="password" name="password" type="password" 
                    onChange={handleOnChange}
                    className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow mt-4" placeholder="Contraseña"/>

                <button className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center mt-8 mb-2 hover:scale-105">
                      <span>Login</span>
                </button> 
                <p className="text-center text-black">No tienes una cuenta? <Link to={REGISTER_URL} className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Registrate! </span>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></Link></p>
            </div>
        </form>
    </div>
    
    
    
  )
}

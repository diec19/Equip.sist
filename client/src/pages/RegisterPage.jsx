import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const { register, handleSubmit, formState:{errors}, } = useForm();
  const {signup, isAuthenticated, errors:registerErrors} = useAuth();
  const navigate = useNavigate()

 useEffect(()=>{
  if (isAuthenticated) navigate("/tasks")
 },[isAuthenticated])
  
const onSubmit = handleSubmit(async(values)=>{
   signup(values)
})

  return (

    <div className='flex h-[calc(100vh-100px)] items-center justify-center '>
       
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      
      {
        registerErrors.map((error, i)=>(
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
       
       <h1 className="text-2x1 font-bold">Resgister</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
          placeholder="usuario"
        />

            {errors.username && <p className="text-red-500">Usuario Requerido</p>}

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
          placeholder="email"
        />

            {errors.email && <p className="text-red-500">Email Requerido</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
          placeholder="contraseña"
        />
            {errors.password && <p className="text-red-500">Password Requerido</p>}
              
        <button type="submit">Register</button>
      </form>
    </div>
    </div>  

  );
};

export default RegisterPage;

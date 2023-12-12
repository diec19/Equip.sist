import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';


const LoginPage = () => {
 const {
    register,
    handleSubmit,
    formState:{ errors },
 } = useForm();

 const {signin}=useAuth();

 const onSubmit = handleSubmit((data)=>{
  signin(data);
 })


  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center '>
      
      
     <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

     <h1 className="text-2x1 font-bold">Login</h1>
     <form onSubmit={onSubmit}>
       

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
             
       <button type="submit">Login</button>
     </form>
     </div>

    </div>
  )
}

export default LoginPage
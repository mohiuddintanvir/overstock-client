

import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";


const Register = () => {
const{createuser,updateuser}=useContext(AuthContext)
  const handleRegister = (data) => {
    console.log(data);
    createuser(data.email,data.password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        toast('user create sucessfully')
        const userinfo={
          displaName:data.name
        }
        updateuser(userinfo)
        .then(()=>{})
        .catch(error=>console.log(error))
    })
    .catch(err=>console.error(err))
   
  };









  const { register ,formState: { errors }, handleSubmit } = useForm();
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
      <h2 className="text-4xl text-center">Registation</h2>


        <form className="" onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="text"
              {...register("name",{required:"Email Address is required"})}
              name="name"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="email"
              {...register("email" ,{required:"Email Address is required"
            })}
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
             {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="password"
              {...register("password",{required:"Password is required",  minLength:{value:6,massage:'Password must be 6 characters log'}})}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
             {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
          </div>

          <input className="btn btn-accent w-full mt-5" type="submit" />
        </form>
        <p className="mt-5 text-center">New to Doctors Portal?<Link to="/login" className=" text-secondary">please LogIn</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full h-12 my-6 ">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Register;


import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";


const Login = () => {
  const { finduser } = useContext(AuthContext);

  const handleLogin = (data) => {
    console.log(data);
    finduser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
      
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-4xl text-center">LogIn</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: "password  is required",
                minLength: {
                  value: 6,
                  massage: "password must be 6 character or longer",
                },
              })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text">Forget password</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full "
            value="login"
            type="submit"
          />
        </form>
        <p>
          New to Doctors Portal?
          <Link to="/register" className=" text-secondary">
            create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full h-12 my-6 ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;

import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const Register = () => {
  //import from  Authprovider
  const { createuser, updateuser, providerLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log(data);
    console.log(data.usertype);

    createuser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user create sucessfully");
        const userinfo = {
          displaName: data.name,
        };
        updateuser(userinfo)
          .then(() => {
            saveuser(data.name, data.email, data.usertype);
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.error(err));
  };

  const saveuser = (name, email, usertype) => {
    const user = { name, email, usertype };
    // data test
    console.log(name);
    console.log(email);
    console.log(usertype);

    fetch("https://over-stcok-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        getusertoken(email);
      });
  };

  // jwt token

  const getusertoken = (email) => {
    fetch(`https://over-stcok-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/");
        }
      });
  };

  // google signIn code
  const googleProvider = new GoogleAuthProvider();

  // google handle
  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
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
        <h2 className="text-4xl text-center">Registation</h2>

        <form className="" onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="text"
              {...register("name", { required: "Email Address is required" })}
              name="name"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="text"
              {...register("usertype")}
              name="usertype"
              placeholder="usertype"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  massage: "Password must be 6 characters log",
                },
              })}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          {/* dropdown botton */}

          <input className="btn btn-accent w-full mt-5" type="submit" />
        </form>
        <p className="mt-5 text-center">
          New to Doctors Portal?
          <Link to="/login" className=" text-secondary">
            please LogIn
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full h-12 my-6 "
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;

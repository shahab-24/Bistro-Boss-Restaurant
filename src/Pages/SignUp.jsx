import { useForm} from "react-hook-form"
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext)

	const {
		register,
		formState: { errors },
		handleSubmit,
	  } = useForm()

  

	const onSubmit = (data) =>{ 
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
  
  }

	return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">sign up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", {required: true})} type="text" placeholder="name" className="input input-bordered" required />
		  {errors.name && (<p className="text-red-500">this field is required</p>)}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", {required: true})} type="email" placeholder="email" className="input input-bordered" required />
          {errors.email && (<p className="text-red-500">Email is must required</p>)}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", {
            required: true, 
            minLength: 6, 
            maxLength: 20,
            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/,
        
            })}  type="password"  name="password" placeholder="password" className="input input-bordered" required />
          
          {errors.password?.type === "pattern" && (<p className="text-red-500">password must be 6 characters, one uppercase, one lowercase, one special character and one number</p>)}
          {errors.password?.type === "minLength" && (<p className="text-red-500">password must be 6 characters</p>)}
          {errors.password?.type === "required" && (<p className="text-red-500">Please give correct password</p>)}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <p><small>Already have an Acount? Go to <Link to="/login"> <button className="btn btn-outline btn-xs">Login</button>
      </Link></small></p>
    </div>
  </div>
</div>
	);
};

export default SignUp;
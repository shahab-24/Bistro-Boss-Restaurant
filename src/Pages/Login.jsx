import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Components/SocialLogin/SocialLogin';

const Login = () => {
	const captchaRef = useRef();
	const [disabled, setDisabled] = useState(true)
  const {signIn,setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"


	useEffect(() => {
		loadCaptchaEnginge(6);	},[])

	const handleLogin = e => {
		e.preventDefault()
		const form  = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email,password)
    signIn(email,password)
    .then(res => {
      const user = res.user;
      setUser(user)

    
        Swal.fire({
          title: "user login successful",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate(from, {replace: true})
      
    })
    .catch(err => {
      console.log(err.message)
    })

	}

	const handleValidateCaptcha = (e) => {
		const user_captcha_value = e.target.value;
		console.log(user_captcha_value)
		if(validateCaptcha(user_captcha_value)){
			setDisabled(false)

		}
	else{
		setDisabled(true)

	}

	}
	return (
		<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
		  <LoadCanvasTemplate />
          </label>
          <input  onBlur={handleValidateCaptcha} ref={captchaRef} type="text" name="captcha" placeholder="type catcha above" className="input input-bordered" required />

		  {/* <input onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-4" type="submit" value="validate" /> */}
          
        </div>
        <div className="form-control mt-6">
          
		  <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
        <p><small>Don't have acount? please <Link to='/signup'><button>Sign Up</button></Link></small></p>
        
      </form>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
	);
};

export default Login;
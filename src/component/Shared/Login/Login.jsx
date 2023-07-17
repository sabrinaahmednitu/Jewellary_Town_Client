import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {
  const emailref = useRef('');
  const passRef = useRef('');

  const navigate = useNavigate();
  const navigateLogin =() => {
    navigate('/signup');
  };

  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = emailref.current.value;
    const password = passRef.current.value;
    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white ">Login now !</h1>
          <p className="py-6 text-2xl text-white ">
            Login is the process of gaining access to a secure system or account
            by providing valid credentials, such as a username and password.
          </p>
        </div>

        <form
          onSubmit={handleLoginForm}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white"
        >
          <div className="card-body">
            <div className="form-control">
              <input
                ref={emailref}
                type="email"
                placeholder="Type Email"
                className="input input-bordered bg-transparent text-black"
              />
            </div>
            <div className="form-control">
              <input
                ref={passRef}
                type="password"
                placeholder="Type Password"
                className="input input-bordered bg-transparent mt-2 text-black"
              />

              <a
                href="#"
                className=" link link-hover mt-2 text-black font-bold"
              >
                Forgot password?
              </a>
            </div>
            <div className="form-control mt-2">
              <button className="btn text-white bg-black-200">Login</button>
            </div>
            <p className="text-black">
              Dont have an account
              <Link
                className="text-green-600 font-bold"
                to="/signup"
                onClick={navigateLogin}
              >
                Please Signup
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

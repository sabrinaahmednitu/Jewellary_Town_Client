import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passRef = useRef('');

  const handleSignupForm = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(name, email, password);
  };

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login')
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white ">SignUp now !</h1>
          <p className="py-6 text-2xl text-white ">
            Signup is the process of gaining access to a secure system or
            account by providing valid credentials, such as a username and
            password.
          </p>
        </div>

        <form
          onSubmit={handleSignupForm}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white"
        >
          <div className="card-body">
            <div className="form-control">
              <input
                ref={nameRef}
                type="text"
                placeholder="Type Name"
                className="input input-bordered bg-transparent text-black"
              />
            </div>
            <div className="form-control">
              <input
                ref={emailRef}
                type="email"
                placeholder="Type Email"
                className="input input-bordered bg-transparent mt-2 text-black"
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
              <button className="btn text-white bg-black-200">SignUp</button>
            </div>
            <p className="text-black">
              Dont have an account
              <Link
                onClick={navigateLogin}
                className="text-green-600 font-bold"
                to="/login"
              >
                Please Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

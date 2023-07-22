import { Link } from 'react-router-dom';

const Signup = () => {
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

        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Type Name"
                className="input input-bordered bg-transparent text-black"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Type Email"
                className="input input-bordered bg-transparent mt-2 text-black"
              />
            </div>
            <div className="form-control">
              <input
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
              <Link className="text-green-600 font-bold" to="/login">
                Please Login
              </Link>
            </p>
            <div className="">
              <div className="flex align-items-center w-[75%] mx-auto mt-2 mb-5">
                <div
                  style={{ height: '1px' }}
                  className="bg-black w-[50%] mt-3"
                ></div>
                <p className="px-2 text-black font-bold">OR</p>
                <div
                  style={{ height: '1px' }}
                  className="bg-black w-[50%] mt-3"
                ></div>
              </div>
              <div className="form-control mt-2">
                <button className="btn text-white bg-black-200">
                  Continue with google
                </button>
              </div>
              <div className="form-control mt-2">
                <button className="btn text-white bg-black-200">
                  Continue with github
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

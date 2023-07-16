import img1 from '../../../video/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg'
import './Login.css'
const Login = () => {
  return (
    <div className="hero min-h-screen bg-white">
      {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
      <div className="hero-content flex-col ">
       
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-bold">
                  Password
                </span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered bg-white"
              />
              <label className="label mt-5">
                <a
                  href="#"
                  className="label-text-alt link text-black font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
         <div className="text-center ">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>

          {/* <img className="py-6" src={img1} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;

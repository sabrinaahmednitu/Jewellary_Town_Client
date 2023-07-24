import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';

const Signup = () => {
  const { register, formState: { errors },handleSubmit,} = useForm();
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const navigateLogin = () => {
    navigate('/login');
   }

  const signupOnSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert(' Thank you !!!', 'Your account has been created');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login-main pt-[20%]">
      <div className=" bg-white w-[30%] mx-auto">
        <h1 className="text-center">Signup</h1>
        <form
          onSubmit={handleSubmit(signupOnSubmit)}
          className="w-[50%] mx-auto"
        >
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'provide a valid email',
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              {errors.email?.type === 'required' && (
                <p className="text-red-600 my-2">{errors.email?.message}</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className="text-red-600 my-2">{errors.email?.message}</p>
              )}
            </label>
          </div>
          {/* Email */}

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: 'provide a valid ppassword',
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label">
              {errors.password?.type === 'minLength' && (
                <p className="text-red-600 my-2">{errors.password?.message}</p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-600 my-2">{errors.password?.message}</p>
              )}
            </label>

            {/* Forgot password */}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {/* Forgot password */}
          </div>
          {/* Password */}

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary max-w-xs">
              sign Up
            </button>
          </div>
        </form>
        <p className="text-black">
          Already have an account
          <Link
            className="text-green-600 font-bold"
            to="/login"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
      </div>
    </div>
  );
};

export default Signup;

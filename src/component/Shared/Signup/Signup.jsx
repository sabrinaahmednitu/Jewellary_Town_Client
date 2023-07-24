import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Hooks/AuthProvider';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { signUp, verifyEmail } = useContext(AuthContext);
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
        reset();
        verifyEmail();
       
        updateProfile({ displayName: data.name});
         navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login-main pt-[10%] ">
      <div className=" bg-white mx-auto text-center p-5 rounded  w-[50%] max-w-md mx-auto">
        <h1 className="text-center text-4xl text-black font-bold mb-3">
          Signup
        </h1>
        <form onSubmit={handleSubmit(signupOnSubmit)}>
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              {...register('name', {
                required: {
                  value: true,
                  message: 'name is required',
                },
              })}
              className="input input-bordered w-[75%] max-w-md"
            />

            <label className="label">
              {errors.name?.type === 'required' && (
                <p className="text-red-600 my-2">{errors.name?.message}</p>
              )}
              {errors.name?.type === 'pattern' && (
                <p className="text-red-600 my-2">{errors.name?.message}</p>
              )}
            </label>
          </div>
          {/* Name */}

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
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
              className="input input-bordered w-[75%] max-w-md"
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
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: 'provide a valid password',
                },
              })}
              className="input input-bordered w-[75%] max-w-md"
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
              <span className="label-text">
                Forget Password ?<button className="btn btn-link">Reset</button>
              </span>
            </label>
            {/* Forgot password */}
          </div>
          {/* Password */}

          <div className="mt-6 ">
            <button type="submit" className="btn btn-primary  w-[75%] max-w-md">
              sign Up
            </button>
          </div>
        </form>
        <p className="text-black mt-2">
          Already have an account
          <Link
            className="text-green-600 font-bold"
            to="/login"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Signup;

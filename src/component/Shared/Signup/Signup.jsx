import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../../Hooks/AuthProvider';


const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signUp, googleLoginInProvider, githubSignUp, verifyEmail } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const HandleRegister = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert(' Thank you !!!', 'Your account has been created');
        reset();
        verifyEmail();
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    googleLoginInProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        alert(' Thank you !!!', 'Your account has been created');
        verifyEmail();
      })
      .catch((error) => console.log(error));
  };

  const handleGitHub = () => {
    githubSignUp(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        verifyEmail();
      })

      .catch((err) => console.log(err));
  };

  return (
    <section className="mx-5">
      <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
        <div className=" mx-auto"></div>
        <div>
          <div className="w-96 p-7 mx-auto">
            <h2 className="text-xl text-center font-bold">Register</h2>
            <form onSubmit={handleSubmit(HandleRegister)}>
              {/* name filed  */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-600 my-2">{errors.name?.message}</p>
                )}
              </div>

              {/* email filed */}

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email Address is required',
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600 my-2">{errors.email?.message}</p>
                )}
              </div>

              {/* Password filed */}

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required ',
                    minLength: {
                      value: 6,
                      message: 'Password must be 6 characters or long',
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        'Password must have uppercase number and special character number',
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />

                <label className="label">
                  <span className="label-text">
                    Forget Password{' '}
                    <button className="btn btn-link">Reset</button>
                  </span>
                </label>
                {errors.password && (
                  <p className="text-red-600 my-2">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              {/* register filed and google and github button */}

              <input
                className="btn btn-accent w-full"
                value="Register"
                type="submit"
              />
            </form>
            <p>
              Already hve an account ?{' '}
              <Link className="text-secondary" to="/login">
                Please Login
              </Link>
            </p>
            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-second w-full"
            >
              {' '}
              <img className="mx-3" style={{ width: '40px' }} alt="" /> CONTINUE
              WITH GOOGLE
            </button>
            <br />
            <br />
            <button
              onClick={handleGitHub}
              className="btn btn-outline btn-second w-full"
            >
              <img className="mx-3" style={{ width: '40px' }} alt="" />
              CONTINUE WITH GITHUB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
